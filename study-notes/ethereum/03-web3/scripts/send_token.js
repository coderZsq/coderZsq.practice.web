var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var arguments = process.argv.slice(2)
if (!arguments || arguments.length != 2) {
  console.log('Parameter length must be 2')
  return
}

var _from = web3.eth.accounts[0]
var _to = arguments[0]
var amount = arguments[1]

var abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Sent", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "minter", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "send", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
var CoinContract = web3.eth.contract(abi)
var contractAddress = "0x00"
var contractInstance = CoinContract.at(contractAddress)

web3.personal.unlockAccount(_from, '123456', (err, res) => {
  if (err) {
    console.log("Error: ", err)
  } else {
    contractInstance.send(_to, amount, { from: _from }, (err, res) => {
      if (err) {
        console.log("Error: ", err)
      } else {
        console.log("Result: ", res)
      }
    })
  }
})