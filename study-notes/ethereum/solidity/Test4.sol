pragma solidity ^0.6.1;
contract C {
    uint256[] x;
    function f(uint256[] memory memoryArray) public {
        x = memoryArray;
        uint256[] memory y = x;
        y[7];
        // y.length = 2;
        delete x;
        y = memoryArray;
        delete y;
        g(x);
        h(x);
    }
    function g(uint256[] storage storageArray) internal {}
    function h(uint256[] memory memoryArray) public {}
}
