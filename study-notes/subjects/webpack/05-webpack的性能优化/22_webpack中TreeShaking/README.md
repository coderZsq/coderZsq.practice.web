```shell
$ npx terser ./src/abc.js -o abc.min.js
$ npx terser ./src/abc.js -o abc.min.js -c defaults
$ npx terser ./src/abc.js -o abc.min.js -c arrows=true,arguments=true
$ npx terser ./src/abc.js -o abc.min.js -c arrows=true,arguments=true,dead_code
$ npx terser ./src/abc.js -o abc.min.js -c arrows=true,arguments=true,dead_code=false
$ npx terser ./src/abc.js -o abc.min.js -c arrows=true,arguments=true,dead_code -m
$ npx terser ./src/abc.js -o abc.min.js -c arrows=true,arguments=true,dead_code -m toplevel=true
$ npx terser ./src/abc.js -o abc.min.js -c arrows=true,arguments=true,dead_code -m toplevel=true,keep_classnames=true
$ npx terser ./src/abc.js -o abc.min.js -c arrows=true,arguments=true,dead_code -m toplevel=true,keep_classnames=true,keep_fnames=true
```
