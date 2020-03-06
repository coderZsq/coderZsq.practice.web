var Web3 = require('web3')
var BigNumber = require('bignumber.js')

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
console.log(web3.isConnected())

var balance = new BigNumber('1234567890123456789012345678901234567890')
console.log(balance)
console.log(balance.toString())
console.log(balance.toString(10))
console.log(balance.toString(16))
console.log(balance.toString(2))

balance = new BigNumber('1234567890.123456789012345678901234567890')
console.log(balance)
console.log(balance.toString(10))
