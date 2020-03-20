var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

var abi = JSON.parse()
var contractAddr = ""
var VotingContract = web3.eth.contract(abi)
var contractInstance = VotingContract.at(contractAddr)

var candidates = { "Alice": "candidate-1", "Bob": "candidate-2", "Cary": "candidate-3" }

$(document).ready(function () {
  var candidateList = Object.keys(candidates)
  for (let i = 0; i < candidateList.length; i++) {
    let name = candidateList[i]
    let count = contractInstance.totalVotesFor(name).toString()
    $("#" + candidates[name]).html(count)
  }
})