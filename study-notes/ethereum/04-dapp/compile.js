var Web3 = require('web3')
var solc = require('solc')
var fs = require('fs')

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
// console.log(web3.isConnected())
// console.log(web3.eth.accounts)

var sourceCode = fs.readFileSync('Voting.sol').toString()
// console.log(sourceCode)

var compiledCode = solc.compile(sourceCode)
// console.log(compiledCode)

var abi = JSON.parse(compiledCode.contracts[':Voting'].interface)
// console.log(abi)

var byteCode = compiledCode.contracts[':Voting'].bytecode
// console.log(byteCode)

var VotingContract = web3.eth.contract(abi)
var deployTxObj = { data: byteCode, from: web3.eth.accounts[0], gas: 3000000 }
var contractInstance = VotingContract.new(['Alice', 'Bob', 'Cary'], deployTxObj)
setTimeout(() => {
  console.log(contractInstance.address)
}, 1000)