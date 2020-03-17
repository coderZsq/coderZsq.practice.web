var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

var arguments = process.argv.splice(2)

if (!arguments || arguments.length != 2) {
  console.log("Parameter error")
  return
}

var _from = web3.eth.accounts[0]
var _to = arguments[0]
var _value = arguments[1]

web3.eth.sendTransaction({ from: _from, to: _to, value: _value }, (err, res) => {
  if (err) {
    console.log("Error: " + err)
  } else {
    console.log("Transacion Hash: " + res)
  }
})