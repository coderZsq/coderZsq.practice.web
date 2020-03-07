var Web3 = require('web3')
var BigNumber = require('bignumber.js')

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
console.log(web3.isConnected());

// 大数处理
; (function () {
  var balance = new BigNumber('1234567890123456789012345678901234567890')
  console.log(balance)
  console.log(balance.toString())
  console.log(balance.toString(10))
  console.log(balance.toString(16))
  console.log(balance.toString(2))

  balance = new BigNumber('1234567890.123456789012345678901234567890')
  console.log(balance)
  console.log(balance.toString(10))
});

// 基本信息查询
; (function () {
  console.log(web3.version.api)
  console.log(web3.version.node)
  web3.version.getNode(function (err, res) {
    console.log(res)
  })
  web3.version.getNode((err, res) => console.log(res))
  console.log(web3.version.network)
  web3.version.getNetwork((err, res) => console.log(res))
  console.log(web3.version.ethereum)
  web3.version.getEthereum((err, res) => console.log(res))
});


// 网络状态查询
; (function () {
  console.log(web3.net.listening)
  web3.net.getListening((err, res) => console.log(res))
  console.log(web3.net.peerCount)
  web3.net.getPeerCount((err, res) => console.log(res))
});

// Provider
; (function () {
  console.log(web3.currentProvider)
  // console.log(web3.givenProvider) // ^v1.0.0
});

// 通用工具方法
; (function () {
  console.log(web3.fromWei(1000000000000000000, 'ether'))
  console.log(web3.toWei(1, 'ether'))
  console.log(web3.toBigNumber(1000000000000000000))
  console.log(web3.toBigNumber('1000000000000000000'))
  console.log(web3.isAddress('0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8'))
});

// 账号相关
; (function () {
  console.log(web3.eth.coinbase)
  web3.eth.getCoinbase((err, res) => console.log(res))
  console.log(web3.eth.accounts)
  web3.eth.getAccounts((err, res) => console.log(res))
});

// 区块相关
; (function () {
  console.log(web3.eth.blockNumber)
  web3.eth.getBlockNumber((err, res) => console.log(res))
  console.log(web3.eth.gasPrice)
  console.log(web3.eth.gasPrice.toString())
  web3.eth.getGasPrice((err, res) => console.log(res.toString()))
  console.log(web3.eth.getBlock(15, true))
  web3.eth.getBlock(15, (err, res) => console.log(res))
  console.log(web3.eth.getBlockTransactionCount(15))
  console.log(web3.eth.getBlockTransactionCount("0x92abcd25ccc696ec1540e557b9d910ff06353552472605b9cbec63f0c7634da7"))
  web3.eth.getBlockTransactionCount("0x92abcd25ccc696ec1540e557b9d910ff06353552472605b9cbec63f0c7634da7", (err, res) => console.log(res))
});

// 交易相关
; (function (err, res) {
  console.log(web3.eth.getBalance(web3.eth.accounts[0]).toString())
  console.log(web3.eth.getBalance(web3.eth.accounts[0], 'latest').toString())
  console.log(web3.eth.getBalance(web3.eth.accounts[0], 15).toString())
});

// 交易执行相关
; (function (err, res) {
  console.log(web3.eth.getTransactionReceipt("0x92abcd25ccc696ec1540e557b9d910ff06353552472605b9cbec63f0c7634da7"))
  web3.eth.getTransactionReceipt("0x92abcd25ccc696ec1540e557b9d910ff06353552472605b9cbec63f0c7634da7", (err, res) => console.log(res))
  console.log(web3.eth.estimateGas({ from: web3.eth.accounts[0], to: web3.eth.accounts[1], value: 2000000 }))
  console.log(web3.eth.estimateGas({ from: web3.eth.accounts[0], to: web3.eth.accounts[1], value: 2000000, data: "0x92abcd25ccc696ec1540e557b9d910ff06353552472605b9cbec63f0c7634da7" }))
});

// 发送交易
// geth: $personal.unlockAccount(eth.accounts[0])
// 123456
; (function () {
  console.log(web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: web3.eth.accounts[1], value: 2000000, data: "0x92abcd25ccc696ec1540e557b9d910ff06353552472605b9cbec63f0c7634da7" }))
  console.log(web3.eth.getTransaction("0x8e16faa5855f01421022c60b4f5fc2f45a2b2dc6f88d0b5b5a66db409c43e417 "))
  console.log(web3.eth.getBlock(16))
  console.log(web3.eth.getBlock(16, true))
});
