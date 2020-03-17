pragma solidity ^0.6.1;

contract Faucet {
    function withdraw(uint256 amount) public {
        require(amount <= 1000000000000000000, "");
        msg.sender.transfer(amount);
    }
    fallback() external {}
    receive() external payable {}
}
