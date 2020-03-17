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
; (function () {
  console.log(web3.eth.getBalance(web3.eth.accounts[0]).toString())
  console.log(web3.eth.getBalance(web3.eth.accounts[0], 'latest').toString())
  console.log(web3.eth.getBalance(web3.eth.accounts[0], 15).toString())
});

// 交易执行相关
; (function () {
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
  console.log(web3.eth.getTransaction("0x8e16faa5855f01421022c60b4f5fc2f45a2b2dc6f88d0b5b5a66db409c43e417"))
  console.log(web3.eth.getBlock(16))
  console.log(web3.eth.getBlock(16, true))
});

// 日志过滤 (事件监听)
; (function () {
  var filter = web3.eth.filter("latest")
  filter.watch((err, res) => console.log(res))
  filter.stopWatching()
  var filter2 = web3.eth.filter("pending")
  filter2.watch((err, res) => print(res))
});

// 合约相关
; (function () {
  var abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Sent", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "minter", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "send", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
  var CoinContract = web3.eth.contract(abi)
  var byteCode = "0x" + "60806040523480156100115760006000fd5b505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b61005a565b6104f0806100696000396000f3fe60806040523480156100115760006000fd5b50600436106100515760003560e01c8063075461721461005757806327e235e3146100a157806340c10f19146100fa578063d0679d341461014957610051565b60006000fd5b61005f610198565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100e4600480360360208110156100b85760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101be565b6040518082815260200191505060405180910390f35b610147600480360360408110156101115760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101d9565b005b610196600480360360408110156101605760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102d4565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016000506020528060005260406000206000915090505481565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561027b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260008152602001805060200191505060405180910390fd5b80600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054019250508190909055505b5050565b80600160005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541015151561036e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260008152602001805060200191505060405180910390fd5b80600160005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540392505081909090555080600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054019250508190909055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b505056fea26469706673582212207789ea553fd301c0bc684da9730e5a80df7135daa8f049a1526d4b2ade6117fe64736f6c63430006030033"
  var deployTxObject = { from: web3.eth.accounts[0], data: byteCode, gas: 1000000 }
  var coinContractInstance = CoinContract.new(deployTxObject)
  console.log(coinContractInstance.address)
  console.log(coinContractInstance.minter())
  coinContractInstance.minter((err, res) => console.log(res))
  coinContractInstance.call.minter((err, res) => console.log(res))
  coinContractInstance.minter({ from: web3.eth.accounts[0], to: web3.eth.accounts[1], value: 400000 }, (err, res) => console.log(res))
  coinContractInstance.mint(web3.eth.accounts[0], 3000000, { from: web3.eth.accounts[0] }, (err, res) => console.log(res))
  coinContractInstance.balance(web3.eth.accounts[0], (err, res) => console.log(res))
  coinContractInstance.Sent("pending", (err, res) => console.log(res))
  coinContractInstance.send(web3.eth.accounts[1], 230000, { from: web3.eth.accounts[0] })
})()
