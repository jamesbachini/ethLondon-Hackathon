// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IWormhole {
    function messageFee() external view returns (uint256);

    function publishMessage(uint32 nonce, bytes memory payload, uint8 consistencyLevel)
        external
        payable
        returns (uint64 sequence);
}

contract mETH is ERC20 {
    address public stETH;
    address public rETH;
    address public wormhole;
    uint nonce = 1;

    struct wMessage {
        address recipient;
        string message;
    }

    constructor(address _stETH, address _rETH, address _wormhole) ERC20("Multichain Staked ETH", "mETH") {
        stETH = _stETH;
        rETH = _rETH;
        wormhole = _wormhole;
    }

    function deposit(uint _amount) external {
        IERC20(stETH).transferFrom(msg.sender, address(this), _amount);
        IERC20(rETH).transferFrom(msg.sender, address(this), _amount);
        _mint(msg.sender, _amount * 2);
    }

    function bridge(uint _amount) external payable {
        _burn(msg.sender, _amount);
        bytes memory msg = abi.encode(MyMessage(recipient, _amount);
        IWormhole(wormhole).publishMessage{
            value: IWormhole(wormhole).messageFee()
        }(nonce, msg, 200);
        nonce += 1;
    }

    function withdraw() external {

    }
}