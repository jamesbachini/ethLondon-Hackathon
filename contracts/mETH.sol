// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IWormhole {
    function publishMessage(uint32 nonce, bytes memory payload, uint8 consistencyLevel)
        external
        payable
        returns (uint64 sequence);

     function sendPayloadToEvm(
        uint16 targetChain,
        address targetAddress,
        bytes memory payload,
        uint256 receiverValue,
        uint256 gasLimit
    ) external payable returns (uint64 sequence);

    function quoteEVMDeliveryPrice(
        uint16 targetChain,
        uint256 receiverValue,
        uint256 gasLimit
    ) external view returns (uint256 nativePriceQuote, uint256);

    function messageFee() external view returns (uint256);
}

contract MockLST is ERC20 {
    constructor(string memory _name) ERC20(_name, _name) {
        _mint(msg.sender, 1_000_000 ether);
    }
}

contract mETH is ERC20 {
    address public stETH;
    address public rETH;
    address public wormhole;
    address public crossChainContract;
    mapping(bytes32 => bool) public processed;
    uint32 nonce;
    uint constant gasLimit = 50_000;

    struct whMessage {
        address recipient;
        uint amount;
    }

    constructor(address _wormhole, address _crossChainContract) ERC20("Multichain Staked ETH", "mETH") {
        wormhole = _wormhole; // 0x28D8F1Be96f97C1387e94A53e00eCcFb4E75175a
        crossChainContract = _crossChainContract;
        // Mint mock tokens and transfer to deployer for testing
        stETH = address(new MockLST("stETH"));
        rETH = address(new MockLST("rETH"));
        IERC20(stETH).transfer(msg.sender, 1_000_000 ether);
        IERC20(rETH).transfer(msg.sender, 1_000_000 ether);
    }

    function deposit(uint _amount) external {
        IERC20(stETH).transferFrom(msg.sender, address(this), _amount / 2);
        IERC20(rETH).transferFrom(msg.sender, address(this), _amount / 2);
        _mint(msg.sender, _amount);
    }

    function withdraw(uint _amount) external {
        _burn(msg.sender, _amount);
        IERC20(stETH).transfer(msg.sender, _amount / 2);
        IERC20(rETH).transfer(msg.sender, _amount / 2);
    }


    function bridge(uint _amount, uint16 _targetChain) external payable {
        _burn(msg.sender, _amount);
        nonce += 1;
        IWormhole(wormhole).sendPayloadToEvm{value: quote(_targetChain)}(
            _targetChain,
            crossChainContract,
            abi.encode(_amount, msg.sender),
            0,
            gasLimit
        );
    }

    function quote(uint16 _targetChain) public view returns (uint256 cost) {
        (cost,) = IWormhole(wormhole).quoteEVMDeliveryPrice(_targetChain, 0, gasLimit);
    }

    function receiveWormholeMessages(
        bytes memory payload,
        bytes[] memory,
        bytes32,
        uint16 sourceChain,
        bytes32 deliveryHash
    ) public payable {
        require(msg.sender == wormhole, "not allowed");
        require(!processed[deliveryHash], "already processed");
        require(sourceChain != 0, "add approved source chains");
        processed[deliveryHash] = true;
        (uint mintAmount, address sender) = abi.decode(payload, (uint, address));
        require(sender == crossChainContract, "wrong contract");
        _mint(msg.sender, mintAmount);
    }

    function updateCrossChainContract(address _newContract) external {
        require(nonce == 0, "too late");
        crossChainContract = _newContract;
    }
}