pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Voting.sol";


contract TestVoting {
    uint256 public initialBalance = 3 ether;

    function testInitialBalanceUsingDeployedContract() public {
        Voting voting = Voting(DeployedAddresses.Voting());

        uint256 expected = 10000;

        Assert.equal(
            voting.totalTokens(),
            expected,
            "total tokens should be 10000."
        );
    }

    function testBuyTokens() public {
        Voting voting = Voting(DeployedAddresses.Voting());
        voting.buy.value(1 ether)();
        uint256 expected = 9900;

        Assert.equal(
            voting.tokenBalance(),
            expected,
            "Token balance should be 9900 after buy 1 ether"
        );
    }
}
