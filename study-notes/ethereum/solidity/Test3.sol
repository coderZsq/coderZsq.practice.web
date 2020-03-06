pragma solidity ^0.6.1;
contract C {
    bytes32 public a;
    uint256 public b;
    uint256[] public data;
    function g(bytes32 input) public {
        a = input;
    }
    function f() public {
        // uint256[] x; // error
        // x.push(2);
        // data = x;
        uint256[] storage x = data;
        x.push(2);
    }
}
