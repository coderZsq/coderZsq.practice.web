pragma solidity ^0.6.1;

contract Coin {
    mapping(address => uint256) public balances;
    // event Sent(address from, address to, uint256 amount);
    constructor(uint256 initalSupply) public {
        balances[msg.sender] = initalSupply;
    }
    function send(address receiver, uint256 amount)
        public
        returns (bool success)
    {
        require(balances[msg.sender] >= amount, "");
        require(balances[receiver] + amount >= balances[receiver], "");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        return true;
        // emit Sent(msg.sender, receiver, amount);
    }
}
