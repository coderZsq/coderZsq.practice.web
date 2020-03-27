import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';
import voting_artifacts from '../../build/contracts/Voting.json';

var Voting = contract(voting_artifacts);
let candidates = { "Alice": "candidate-1", "Bob": "candidate-2", "Cary": "candidate-3" };

window.voteForCandidate = function () {
  try {
    let candidateName = $("#candidate").val();
    $("#" + "candidate").val("");
    Voting.deployed().then(votingInstance => {
      votingInstance.vote(candidateName, { from: web3.eth.accounts[0] }).then(res => {
        let div_id = candidates[candidateName];
        votingInstance.totalVotesFor(candidateName).then(res => {
          $("#" + div_id).html(res.toString());
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
};

$(document).ready(function () {
  if (typeof web3 != 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
  } else {
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  Voting.setProvider(web3.currentProvider);
  let candidateNames = Object.keys(candidates);
  for (let i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    Voting.deployed().then(votingInstance => {
      votingInstance.totalVotesFor(name).then(res => {
        $("#" + candidates[name]).html(res.toString());
      });
    });
  }
});