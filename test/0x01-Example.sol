// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "forge-std/Test.sol";
import "contracts/Example.sol";

contract UnitTest is Test {
    Example public example;
    error SomeError(uint256);

    function setUp() public {
        example = new Example();
    }

    function testStateVariable() public {
        assertEq(example.test(), 'hello world');
    }
}