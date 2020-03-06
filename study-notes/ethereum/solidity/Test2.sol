pragma solidity ^0.6.1;
contract C {
    uint256[] public data1;
    uint256[] public data2;
    function append1() public {
        append(data1);
    }
    function append2() public {
        append(data2);
    }
    function append(uint256[] storage d) internal {
        d.push(23);
    }
}
