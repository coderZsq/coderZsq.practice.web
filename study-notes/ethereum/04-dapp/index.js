var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidateName","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidateName","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"candidateListName","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
var contractAddr = "0x4442ba953f56b368fa430264fa644558b8c1db83"
var VotingContract = web3.eth.contract(abi)
var contractInstance = VotingContract.at(contractAddr)

var candidates = { "Alice": "candidate-1", "Bob": "candidate-2", "Cary": "candidate-3" }

function voteForCandidate() {
  let candidateName = $("#candidate").val()
  try {
    contractInstance.vote(candidateName, { from: web3.eth.accounts[0] }, (err, res) => {
      if (err) {
        console.log("Error: ", err)
      } else {
        let id = candidates[candidateName]
        let count = contractInstance.totalVotesFor(candidateName).toString()
        $("#" + id).html(count)
      }
    })
  } catch (err) {

  }
}

$(document).ready(function () {
  var candidateList = Object.keys(candidates)
  for (let i = 0; i < candidateList.length; i++) {
    let name = candidateList[i]
    let count = contractInstance.totalVotesFor(name).toString()
    $("#" + candidates[name]).html(count)
  }
})