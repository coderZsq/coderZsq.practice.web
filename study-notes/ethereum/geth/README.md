```
$ geth --datadir ./geth

INFO [03-03|22:34:30.232] Bumping default cache on mainnet         provided=1024 updated=4096
INFO [03-03|22:34:30.242] Maximum peer count                       ETH=50 LES=0 total=50
INFO [03-03|22:34:30.263] Starting peer-to-peer node               instance=Geth/v1.9.9-stable/darwin-amd64/go1.13.4
INFO [03-03|22:34:30.264] Allocated trie memory caches             clean=1024.00MiB dirty=1024.00MiB
INFO [03-03|22:34:30.265] Allocated cache and file handles         database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/chaindata" cache=2.00GiB handles=5120
INFO [03-03|22:34:30.641] Opened ancient database                  database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/chaindata/ancient"
INFO [03-03|22:34:30.642] Writing default main-net genesis block
INFO [03-03|22:34:30.904] Persisted trie from memory database      nodes=12356 size=1.79MiB time=47.678427ms gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [03-03|22:34:30.907] Initialised chain configuration          config="{ChainID: 1 Homestead: 1150000 DAO: 1920000 DAOSupport: true EIP150: 2463000 EIP155: 2675000 EIP158: 2675000 Byzantium: 4370000 Constantinople: 7280000 Petersburg: 7280000 Istanbul: 9069000, Muir Glacier: 9200000, Engine: ethash}"
INFO [03-03|22:34:30.907] Disk storage enabled for ethash caches   dir="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/ethash" count=3
INFO [03-03|22:34:30.907] Disk storage enabled for ethash DAGs     dir=/Users/zhushuangquan/Library/Ethash count=2
INFO [03-03|22:34:30.907] Initialising Ethereum protocol           versions="[64 63]" network=1 dbversion=<nil>
WARN [03-03|22:34:30.907] Upgrade blockchain database version      from=<nil> to=7
INFO [03-03|22:34:30.908] Loaded most recent local header          number=0 hash=d4e567…cb8fa3 td=17179869184 age=50y10mo3w
INFO [03-03|22:34:30.908] Loaded most recent local full block      number=0 hash=d4e567…cb8fa3 td=17179869184 age=50y10mo3w
INFO [03-03|22:34:30.908] Loaded most recent local fast block      number=0 hash=d4e567…cb8fa3 td=17179869184 age=50y10mo3w
INFO [03-03|22:34:30.910] Regenerated local transaction journal    transactions=0 accounts=0
INFO [03-03|22:34:30.946] Allocated fast sync bloom                size=2.00GiB
INFO [03-03|22:34:31.001] New local node record                    seq=1 id=8c4f68f501b25a36 ip=127.0.0.1 udp=30303 tcp=30303
INFO [03-03|22:34:31.001] Started P2P networking                   self=enode://c2f09391f56c8c14b4c0ef7605a37aa3546e102517c05383a026d0abed07521d4a7aec1edc048066de8acc5519e647db4693b74d4af589a69e3815b93960e3cf@127.0.0.1:30303
INFO [03-03|22:34:31.004] IPC endpoint opened                      url="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth.ipc"
INFO [03-03|22:34:31.054] Initialized fast sync bloom              items=12356 errorrate=0.000 elapsed=104.230ms
INFO [03-03|22:34:31.162] New local node record                    seq=2 id=8c4f68f501b25a36 ip=192.168.1.3 udp=30303 tcp=30303
INFO [03-03|22:34:31.186] Mapped network port                      proto=tcp extport=30303 intport=30303 interface=NAT-PMP(192.168.199.1)
INFO [03-03|22:34:31.355] Mapped network port                      proto=udp extport=30303 intport=30303 interface=NAT-PMP(192.168.199.1)
```
```
$ geth --datadir ./geth init genesis.json

INFO [03-03|22:58:19.956] Maximum peer count                       ETH=50 LES=0 total=50
INFO [03-03|22:58:19.978] Allocated cache and file handles         database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/chaindata" cache=16.00MiB handles=16
INFO [03-03|22:58:20.018] Writing custom genesis block
INFO [03-03|22:58:20.020] Persisted trie from memory database      nodes=1 size=149.00B time=721.479µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [03-03|22:58:20.021] Successfully wrote genesis state         database=chaindata hash=8b1bdf…9f5791
INFO [03-03|22:58:20.021] Allocated cache and file handles         database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/lightchaindata" cache=16.00MiB handles=16
INFO [03-03|22:58:20.060] Writing custom genesis block
INFO [03-03|22:58:20.065] Persisted trie from memory database      nodes=1 size=149.00B time=4.716138ms gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [03-03|22:58:20.066] Successfully wrote genesis state         database=lightchaindata hash=8b1bdf…9f5791
```

```
$ geth --datadir . --networkid 15

INFO [03-03|23:01:12.080] Maximum peer count                       ETH=50 LES=0 total=50
INFO [03-03|23:01:12.095] Starting peer-to-peer node               instance=Geth/v1.9.9-stable/darwin-amd64/go1.13.4
INFO [03-03|23:01:12.095] Allocated trie memory caches             clean=256.00MiB dirty=256.00MiB
INFO [03-03|23:01:12.095] Allocated cache and file handles         database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/chaindata" cache=512.00MiB handles=5120
INFO [03-03|23:01:12.231] Opened ancient database                  database="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/chaindata/ancient"
INFO [03-03|23:01:12.233] Initialised chain configuration          config="{ChainID: 15 Homestead: <nil> DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: <nil> EIP158: <nil> Byzantium: <nil> Constantinople: <nil> Petersburg: <nil> Istanbul: <nil>, Muir Glacier: <nil>, Engine: unknown}"
INFO [03-03|23:01:12.233] Disk storage enabled for ethash caches   dir="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth/ethash" count=3
INFO [03-03|23:01:12.233] Disk storage enabled for ethash DAGs     dir=/Users/zhushuangquan/Library/Ethash count=2
INFO [03-03|23:01:12.233] Initialising Ethereum protocol           versions="[64 63]" network=15 dbversion=<nil>
WARN [03-03|23:01:12.233] Upgrade blockchain database version      from=<nil> to=7
INFO [03-03|23:01:12.239] Loaded most recent local header          number=0 hash=8b1bdf…9f5791 td=2000 age=50y10mo3w
INFO [03-03|23:01:12.239] Loaded most recent local full block      number=0 hash=8b1bdf…9f5791 td=2000 age=50y10mo3w
INFO [03-03|23:01:12.239] Loaded most recent local fast block      number=0 hash=8b1bdf…9f5791 td=2000 age=50y10mo3w
INFO [03-03|23:01:12.240] Regenerated local transaction journal    transactions=0 accounts=0
INFO [03-03|23:01:12.250] Allocated fast sync bloom                size=512.00MiB
INFO [03-03|23:01:12.251] Initialized fast sync bloom              items=1 errorrate=0.000 elapsed=188.39µs
INFO [03-03|23:01:12.307] New local node record                    seq=1 id=7898fdb2993b5b8e ip=127.0.0.1 udp=30303 tcp=30303
INFO [03-03|23:01:12.309] Started P2P networking                   self=enode://f8913e756201cb2afd0a7c5aa1bea3e4a0fb48de47295296f513d955244e8c60384b60e4b50c3a1cbb216bf5a7a4d07c04c1c8289e2433b2bbd678c68597b59e@127.0.0.1:30303
INFO [03-03|23:01:12.312] IPC endpoint opened                      url="/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/ethereum/geth/geth.ipc"
INFO [03-03|23:01:12.477] Mapped network port                      proto=tcp extport=30303 intport=30303 interface=NAT-PMP(192.168.199.1)
INFO [03-03|23:01:12.528] New local node record                    seq=2 id=7898fdb2993b5b8e ip=192.168.1.3 udp=30303 tcp=30303
INFO [03-03|23:01:12.673] Mapped network port                      proto=udp extport=30303 intport=30303 interface=NAT-PMP(192.168.199.1)
```