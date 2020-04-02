pragma solidity >=0.4.21 <0.7.0;


contract Voting {
    struct voter {
        address voterAddress;
        uint256 tokenNum;
        uint256[] tokensVoteForCandidates;
    }
    uint256 public totalTokens;
    uint256 public tokenBalance;
    uint256 public tokenPrice;
    bytes32[] candidateList;
    mapping(bytes32 => uint256) public votesReceived;
    mapping(address => voter) public voterInfo;

    constructor(
        uint256 totalSupply,
        uint256 price,
        bytes32[] memory candidateNames
    ) public {
        totalTokens = totalSupply;
        tokenBalance = totalSupply;
        tokenPrice = price;
        candidateList = candidateNames;
    }

    function buy() public payable returns (uint256) {
        uint256 tokensToBuy = msg.value / tokenPrice;
        require(tokensToBuy <= tokenBalance, "");
        voterInfo[msg.sender].voterAddress = msg.sender;
        voterInfo[msg.sender].tokenNum += tokensToBuy;
        tokenBalance -= tokensToBuy;
        return tokensToBuy;
    }

    function voteForCandidate(bytes32 candidate, uint256 voteTokens) public {
        uint256 index = indexOfCandidate(candidate);
        require(index != uint256(-1), "");
        if (voterInfo[msg.sender].tokensVoteForCandidates.length == 0) {
            for (uint256 i = 0; i < candidateList.length; i++) {
                voterInfo[msg.sender].tokensVoteForCandidates.push(0);
            }
        }
        uint256 availableTokens = voterInfo[msg.sender].tokenNum -
            totalUsedTokens(voterInfo[msg.sender].tokensVoteForCandidates);
        require(availableTokens >= voteTokens, "");
        votesReceived[candidate] += voteTokens;
        voterInfo[msg.sender].tokensVoteForCandidates[index] += voteTokens;
    }

    function totalVotesFor(bytes32 candidate) public view returns (uint256) {
        return votesReceived[candidate];
    }

    function totalUsedTokens(uint256[] memory votesForCandidate)
        private
        pure
        returns (uint256)
    {
        uint256 totalToken = 0;
        for (uint256 i = 0; i < votesForCandidate.length; i++) {
            totalToken += votesForCandidate[i];
        }
        return totalToken;
    }

    function indexOfCandidate(bytes32 candidate)
        private
        view
        returns (uint256)
    {
        for (uint256 i = 0; i < candidateList.length; i++) {
            if (candidate == candidateList[i]) {
                return i;
            }
        }
        return uint256(-1);
    }

    function tokenSold() public view returns (uint256) {
        return totalTokens - tokenBalance;
    }

    function voterDetail(address voterAddr)
        public
        view
        returns (uint256, uint256[] memory)
    {
        return (
            voterInfo[voterAddr].tokenNum,
            voterInfo[voterAddr].tokensVoteForCandidates
        );
    }

    function allCandidate() public view returns (bytes32[] memory) {
        return candidateList;
    }

    function transfer(address _to) public {
        _to.transfer(address(this).balance);
    }
}
