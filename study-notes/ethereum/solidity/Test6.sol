pragma solidity ^0.6.1;
contract C {
    uint256 public a;
    function f() public {}
    // function a() public view returns (uint256) {
    //     return a;
    // }
}
contract D is C {
    function g() public {
        f();
    }
}
