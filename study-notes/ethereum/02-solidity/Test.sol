pragma solidity ^0.6.1;
contract C {
    mapping(address => uint256) public balances;
    constructor() public {
        balances[address(this)] = 300;
    }
    function update(uint256 amount) public {
        balances[msg.sender] = amount;
    }
}
contract D {
    function fun() public returns (uint256, uint256) {
        C c = new C();
        c.update(10);
        return (c.balances(address(this)), c.balances(address(c)));
    }
}
