// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IWormhole {
    struct Signature {
        bytes32 r;
        bytes32 s;
        uint8 v;
        uint8 guardianIndex;
    }

    struct VM {
        uint8 version;
        uint32 timestamp;
        uint32 nonce;
        uint16 emitterChainId;
        bytes32 emitterAddress;
        uint64 sequence;
        uint8 consistencyLevel;
        bytes payload;
        uint32 guardianSetIndex;
        Signature[] signatures;
        bytes32 hash;
    }

    function messageFee() external view returns (uint256);

    function publishMessage(uint32 nonce, bytes memory payload, uint8 consistencyLevel)
        external
        payable
        returns (uint64 sequence);

    function parseAndVerifyVM(bytes calldata encodedVM)
        external
        view
        returns (VM memory vm, bool valid, string memory reason);

}

contract mETH is ERC20 {
    address public stETH;
    address public rETH;
    address public wormhole;
    mapping(address => bool) public validEmitters;
    mapping(bytes32 => bool) public processed;
    uint nonce;

    struct whMessage {
        address recipient;
        string message;
    }

    constructor(address _stETH, address _rETH, address _wormhole, address _emitter) ERC20("Multichain Staked ETH", "mETH") {
        stETH = _stETH;
        rETH = _rETH;
        wormhole = _wormhole;
        validEmitters[_emitter] = true;
    }

    function deposit(uint _amount) external {
        IERC20(stETH).transferFrom(msg.sender, address(this), _amount);
        IERC20(rETH).transferFrom(msg.sender, address(this), _amount);
        _mint(msg.sender, _amount * 2);
    }

    function bridge(uint _amount) external payable {
        _burn(msg.sender, _amount);
        bytes memory whMsg = abi.encode(whMessage(recipient, _amount));
        nonce += 1;
        IWormhole(wormhole).publishMessage{
            value: IWormhole(wormhole).messageFee()
        }(nonce, whMsg, 200);
    }

    function withdraw(bytes memory signedVaas) external payable {
        (IWormhole.VM memory parsed, bool valid, string memory reason) = IWormhole(wormhole).parseAndVerifyVM(signedVaas);
        require(validEmitters[parsed.emitterAddress] == true, "non valid emitter");
        whMessage memory message = abi.decode(parsed.payload, (whMessage));
        require(message.recipient == address(this));
        require(processed[parsed.hash] == false, "already processed");
        processed[parsed.hash] = true;
        _mint(msg.sender, uint(parsed.payload));
    }
}