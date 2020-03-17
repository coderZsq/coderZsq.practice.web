```
$ geth --datadir ./geth
```
```
$ geth --datadir ./geth init genesis.json
```

```
$ geth --datadir . --networkid 15
```

```
$ geth --datadir . --networkid 15 console
```

```
INFO [03-04|15:45:18.589] Maximum peer count                       ETH=50 LES=0 total=50
INFO [03-04|15:45:18.606] Starting peer-to-peer node               instance=Geth/v1.9.9-stable/darwin-amd64/go1.13.4
INFO [03-04|15:45:18.606] Allocated trie memory caches             clean=256.00MiB dirty=256.00MiB
INFO [03-04|15:45:18.606] Allocated cache and file handles         database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/chaindata" cache=512.00MiB handles=5120
INFO [03-04|15:45:18.679] Opened ancient database                  database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/chaindata/ancient"
INFO [03-04|15:45:18.680] Initialised chain configuration          config="{ChainID: 15 Homestead: <nil> DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: <nil> EIP158: <nil> Byzantium: <nil> Constantinople: <nil> Petersburg: <nil> Istanbul: <nil>, Muir Glacier: <nil>, Engine: unknown}"
INFO [03-04|15:45:18.680] Disk storage enabled for ethash caches   dir="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/ethash" count=3
INFO [03-04|15:45:18.680] Disk storage enabled for ethash DAGs     dir=/Users/zhushuangquan/Library/Ethash count=2
INFO [03-04|15:45:18.680] Initialising Ethereum protocol           versions="[64 63]" network=15 dbversion=7
INFO [03-04|15:45:18.684] Loaded most recent local header          number=0 hash=8b1bdf…9f5791 td=2000 age=50y10mo3w
INFO [03-04|15:45:18.684] Loaded most recent local full block      number=0 hash=8b1bdf…9f5791 td=2000 age=50y10mo3w
INFO [03-04|15:45:18.684] Loaded most recent local fast block      number=0 hash=8b1bdf…9f5791 td=2000 age=50y10mo3w
INFO [03-04|15:45:18.685] Loaded local transaction journal         transactions=0 dropped=0
INFO [03-04|15:45:18.685] Regenerated local transaction journal    transactions=0 accounts=0
INFO [03-04|15:45:18.695] Allocated fast sync bloom                size=512.00MiB
INFO [03-04|15:45:18.696] Initialized fast sync bloom              items=1 errorrate=0.000 elapsed=98.029µs
INFO [03-04|15:45:18.782] New local node record                    seq=5 id=7898fdb2993b5b8e ip=127.0.0.1 udp=30303 tcp=30303
INFO [03-04|15:45:18.783] Started P2P networking                   self=enode://f8913e756201cb2afd0a7c5aa1bea3e4a0fb48de47295296f513d955244e8c60384b60e4b50c3a1cbb216bf5a7a4d07c04c1c8289e2433b2bbd678c68597b59e@127.0.0.1:30303
INFO [03-04|15:45:18.785] IPC endpoint opened                      url="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth.ipc"
WARN [03-04|15:45:18.859] Served eth_coinbase                      reqid=3 t=28.359µs err="etherbase must be explicitly specified"
Welcome to the Geth JavaScript console!

instance: Geth/v1.9.9-stable/darwin-amd64/go1.13.4
at block: 0 (Thu, 01 Jan 1970 08:00:00 CST)
 datadir: /Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> INFO [03-04|15:45:18.967] Mapped network port                      proto=tcp extport=30303 intport=30303 interface=NAT-PMP(192.168.199.1)
INFO [03-04|15:45:19.006] New local node record                    seq=6 id=7898fdb2993b5b8e ip=192.168.1.3 udp=30303 tcp=30303
INFO [03-04|15:45:19.126] Mapped network port                      proto=udp extport=30303 intport=30303 interface=NAT-PMP(192.168.199.1)
> eth.accounts
[]
> eth.getBalance("0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8")
300000000000000000000
> web3.fromWei(eth.getBalance("0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8"), "ether")
300
> eth.blockNumber
0
> personal.newAccount()
Password:
Repeat password:
INFO [03-04|15:50:03.911] Your new key was generated               address=0x5DE20fe5a15AA7D13297031421b2C16f17E454b8
WARN [03-04|15:50:03.916] Please backup your key file!             path="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/keystore/UTC--2020-03-04T07-50-02.359850000Z--5de20fe5a15aa7d13297031421b2c16f17e454b8"
WARN [03-04|15:50:03.916] Please remember your password!
"0x5de20fe5a15aa7d13297031421b2c16f17e454b8"
> eth.accounts
["0x5de20fe5a15aa7d13297031421b2c16f17e454b8"]
> eth.getBalance(eth.accounts[0])
0
> eth.sendTransaction({from: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", to: eth.accounts[0], value: 1000000})
WARN [03-04|15:54:30.144] Served eth_sendTransaction               reqid=18 t=113.468µs err="unknown account"
Error: unknown account
    at web3.js:3143:20
    at web3.js:6347:15
    at web3.js:5081:36
    at <anonymous>:1:1

> eth.sendTransaction({from: eth.accounts[0], to: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", value: 100000})
WARN [03-04|15:56:16.969] Served eth_sendTransaction               reqid=20 t=13.018879ms err="authentication needed: password or unlock"
Error: authentication needed: password or unlock
    at web3.js:3143:20
    at web3.js:6347:15
    at web3.js:5081:36
    at <anonymous>:1:1

> personal.unlockAccount(eth.accounts[0])
Unlock account 0x5de20fe5a15aa7d13297031421b2c16f17e454b8
Password:
true
> eth.sendTransaction({from: eth.accounts[0], to: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", value: 100000})
WARN [03-04|15:57:24.742] Served eth_sendTransaction               reqid=24 t=8.092604ms  err="insufficient funds for gas * price + value"
Error: insufficient funds for gas * price + value
    at web3.js:3143:20
    at web3.js:6347:15
    at web3.js:5081:36
    at <anonymous>:1:1

>
```

```
$ geth --datadir . --networkid 15 console 2>output.log
```
```
$ tail -f output.log
```
```

> miner.start(1)
null
> miner.stop()
null
> eth.blockNumber
7
> eth.getBalance("0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8")
300000000000000000000
> eth.getBalance(eth.accounts[0])
35000000000000000000
> eth.sendTransaction({from: eth.accounts[0], to: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", value: web3.toWei(1, 'ether')})
Error: authentication needed: password or unlock
    at web3.js:3143:20
    at web3.js:6347:15
    at web3.js:5081:36
    at <anonymous>:1:1

> personal.unlockAccount(eth.accounts[0])
Unlock account 0x5de20fe5a15aa7d13297031421b2c16f17e454b8
Password:
true
> eth.sendTransaction({from: eth.accounts[0], to: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", value: web3.toWei(1, 'ether')})
"0x7c32e83c5af24c94e337670d5ff832c889dbb26053e1ac688b098be23cbfec47"
> eth.getBalance(eth.accounts[0])
35000000000000000000
> miner.start(1)
null
> miner.stop()
null
> eth.sendTransaction({from: eth.accounts[0], to: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", value: web3.toWei(1, 'ether')})
"0xca6f5f020d93152abe410fa9e362f7295fea4bdbc5d5b0dc42481f1500e04bee"
> eth.getBalance(eth.accounts[0])
75000000000000000000
> eth.getBalance("0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8")
300000000000000000000
> web3.fromWei(eth.getBalance("0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8"), "ether")
300
> eth.blockNumber
15
> eth.sendTransaction({from: eth.accounts[0], to: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", value: 333333333333333})
Error: authentication needed: password or unlock
    at web3.js:3143:20
    at web3.js:6347:15
    at web3.js:5081:36
    at <anonymous>:1:1

> personal.unlockAccount(eth.accounts[0])
Unlock account 0x5de20fe5a15aa7d13297031421b2c16f17e454b8
Password:
true
> eth.sendTransaction({from: eth.accounts[0], to: "0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8", value: 333333333333333})
"0x1d4ac2d6de2f51124930b9636875ca59a60691a143ea127e724b02ae0512bfde"
> web3.fromWei(eth.getBalance("0x7936cFfFd5e5d1134280B61A35EBdbf382151AD8"), "ether")
300
```
```
$ geth --datadir . --networkid 15 --rpc console 2>output.log
```
```
> eth.getTransactiom("0xca6f5f020d93152abe410fa9e362f7295fea4bdbc5d5b0dc42481f1500e04bee")
TypeError: 'getTransactiom' is not a function
    at <anonymous>:1:1

> eth.getTransaction("0xca6f5f020d93152abe410fa9e362f7295fea4bdbc5d5b0dc42481f1500e04bee")
{
  blockHash: null,
  blockNumber: null,
  from: "0x5de20fe5a15aa7d13297031421b2c16f17e454b8",
  gas: 21000,
  gasPrice: 1000000000,
  hash: "0xca6f5f020d93152abe410fa9e362f7295fea4bdbc5d5b0dc42481f1500e04bee",
  input: "0x",
  nonce: 1,
  r: "0xdb5863fa20184f3ea5be6886896af71754c8434c5643ac1210251711963b4540",
  s: "0x1107680b39ae5a5647199379fbe6ddc83a3fd2310510293f8ebe91e19f61b52d",
  to: "0x7936cfffd5e5d1134280b61a35ebdbf382151ad8",
  transactionIndex: null,
  v: "0x42",
  value: 1000000000000000000
}
> eth.getTransaction("0x7c32e83c5af24c94e337670d5ff832c889dbb26053e1ac688b098be23cbfec47")
{
  blockHash: null,
  blockNumber: null,
  from: "0x5de20fe5a15aa7d13297031421b2c16f17e454b8",
  gas: 21000,
  gasPrice: 1000000000,
  hash: "0x7c32e83c5af24c94e337670d5ff832c889dbb26053e1ac688b098be23cbfec47",
  input: "0x",
  nonce: 0,
  r: "0xc8e702e8b4f346492dcb9456c66da29d473e60845ea6de4251fb427ba57e28bf",
  s: "0x25c4d75168ddd4058c6bff8ad91d270e9158073dff547bcf600c4d8320ccbea8",
  to: "0x7936cfffd5e5d1134280b61a35ebdbf382151ad8",
  transactionIndex: null,
  v: "0x42",
  value: 1000000000000000000
}
> eth.getBlockTransactionCount(2)
0
> eth.getBlockTransactionCount(1)
0
> eth.getBlockTransactionCount(3)
0
> eth.getBlock(1)
{
  difficulty: 131072,
  extraData: "0xd983010909846765746888676f312e31332e348664617277696e",
  gasLimit: 2102049,
  gasUsed: 0,
  hash: "0x476eafd5f432251f5f3b306be3869fcc2fab27c05c68195a963552eab3a442e4",
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x5de20fe5a15aa7d13297031421b2c16f17e454b8",
  mixHash: "0xf7458bae7f44892eaf683ef44a0b309515fcf941834a1dd484c528ecd89abd0f",
  nonce: "0x3d3c11dbbfa66ee3",
  number: 1,
  parentHash: "0x8b1bdf726e9b0a1c96866256477c1e7c19287fb604225dd12d3d11ccef9f5791",
  receiptsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 537,
  stateRoot: "0xe85f2c78e714e144352643a166e70e216d38160beb4fa3c9c962549c5e682859",
  timestamp: 1583309220,
  totalDifficulty: 133072,
  transactions: [],
  transactionsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  uncles: []
}
> eth.getBlock(3)
{
  difficulty: 131136,
  extraData: "0xd983010909846765746888676f312e31332e348664617277696e",
  gasLimit: 2106153,
  gasUsed: 0,
  hash: "0x33921260bba9b410524b914bdd9eadbd108ce29a67c64fca1393fd5052a096dd",
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x5de20fe5a15aa7d13297031421b2c16f17e454b8",
  mixHash: "0x13adc5c5ce77522783221f7e48c10804e13ff933c4fd6a0331faf0c37a2d1988",
  nonce: "0x0ad110eb29f6f10f",
  number: 3,
  parentHash: "0xdf4dda8195ee11e82ce752e11b2f6694adef730813ebd879e31459988219aceb",
  receiptsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 537,
  stateRoot: "0xe1f73b201820a413c5565661a601f82fe230f74c56716c11ba00ec2248696248",
  timestamp: 1583309334,
  totalDifficulty: 395280,
  transactions: [],
  transactionsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  uncles: []
}
>
```
```
geth --datadir . --networkid 15 --rpc --allow-insecure-unlock console 2>output.log 
```
```
nohup geth--datadir. --networkid 15 --rpc 2 > output.log &
```
```
geth attach http://localhost:8545
```

```
geth --datadir . --networkid 15 --rpc --rpcapi "eth.personal" console 2>output.log 
```



