
# 定义1到10之间的数组
range = [1..10]

#console.log range

# ...不包含末尾数字
range1 = [1...10]
#console.log range1

# 获取某个范围内的值
arr = [1..8]
rng = arr[2...3]

#console.log rng

# 替换某个范围内数组的元素
arr[2..5] = ["a","b","c","d"]

console.log arr