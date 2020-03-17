pragma solidity ^0.6.1;
contract C {
    uint256 private data;
    function f(uint256 a) private pure returns (uint256 b) {
        return a + 1;
    }
    function setData(uint256 a) public {
        data = a;
    }
    function getData() public view returns (uint256) {
        return data;
    }
    function compute(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }
}
contract D {
    function readData() public {
        C c = new C();
        // uint256 local = c.f(7);
        uint256 local;
        c.setData(3);
        local = c.getData();
        // local = c.compute(3, 5);
    }
}
contract E is C {
    function g() public {
        C c = new C();
        // uint256 val = c.compute(3, 5);
        uint256 val = compute(3, 5);
        c.setData(val);
    }
}
