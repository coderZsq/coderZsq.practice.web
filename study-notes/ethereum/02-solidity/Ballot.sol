pragma solidity ^0.6.1;

contract Ballot {
    struct Voter {
        uint256 weight;
        bool voted;
        uint8 vote;
        address delegate;
    }
    struct Proposal {
        bytes32 name;
        uint256 voteCount;
    }
    address public chairperson;
    Proposal[] proposals;
    mapping(address => Voter) voters;
    constructor(bytes32[] memory proposalNames) public {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        for (uint256 i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
    }
    function giveRightToVote(address voter) public {
        require(msg.sender == chairperson, "");
        require(!voters[voter].voted, "");
        require(voters[voter].weight == 0, "");
        voters[voter].weight = 1;
    }
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "");
        address to_ = to;
        while (
            voters[to_].delegate != address(0) &&
            voters[to_].delegate != msg.sender
        ) {
            to_ = voters[to_].delegate;
        }
        require(to_ != msg.sender, "");
        sender.voted = true;
        sender.delegate = to_;
        Voter storage delegateTo = voters[to_];
        if (delegateTo.voted) {
            proposals[delegateTo.vote].voteCount += sender.weight;
        } else {
            delegateTo.weight += sender.weight;
        }
    }
    function vote(uint8 proposal) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "");
        sender.voted = true;
        sender.vote = proposal;
        proposals[proposal].voteCount += sender.weight;
    }
    function winningProposal() public view returns (uint8 winningProposal_) {
        uint256 winningCount = 0;
        for (uint8 prop = 0; prop < proposals.length; prop++) {
            if (proposals[prop].voteCount > winningCount) {
                winningCount = proposals[prop].voteCount;
                winningProposal_ = prop;
            }
        }
    }
    function winnerName() public view returns (bytes32 winnerName_) {
        winnerName_ = proposals[winningProposal()].name;
    }
}
