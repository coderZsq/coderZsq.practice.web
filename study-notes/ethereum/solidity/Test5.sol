pragma solidity ^0.6.1;
contract C {
    uint256 public luckyNumber = 52;
    struct Guess {
        address player;
        uint256 number;
    }
    Guess[] public guessHistory;
    constructor() public payable {}
    function guess(uint256 _num) public payable {
        Guess memory newGuess;
        newGuess.player = msg.sender;
        newGuess.number = _num;
        guessHistory.push(newGuess);
        if (_num == luckyNumber) {
            msg.sender.transfer(msg.value * 2);
        }
    }
}
