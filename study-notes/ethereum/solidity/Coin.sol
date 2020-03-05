pragma solidity ^0.6.1;

contract Coin {
    address public minter;
    mapping(address => uint256) public balances;
    event Sent(address from, address to, uint256 amount);
    constructor() public {
        minter = msg.sender;
    }
    function mint(address receiver, uint256 amount) public {
        require(msg.sender == minter, "");
        balances[receiver] += amount;
    }
    function send(address receiver, uint256 amount) public {
        require(balances[msg.sender] >= amount, "");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}
