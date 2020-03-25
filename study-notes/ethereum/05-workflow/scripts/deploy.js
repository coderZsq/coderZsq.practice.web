const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const path = require('path');

const filePath = path.resolve(__dirname, '../compiled/Car.json');
const { interface, bytecode } = require(filePath);

(async () => {
  let accounts = await web3.eth.getAccounts();
  console.time("deploy time");
  let result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["BMW"] })
    .send({ from: accounts[0], gas: 5000000 });
  console.timeEnd("deploy time");
  console.log("contract address: ", result.options.address);
})();