
# 定义对象
person = {name: "YDH", age: 12, height: 1.7}

console.log person

# 另一种定义对象的方式
dog = {
  name: "旺财"
  age: 2
}

console.log dog

# 通过key查找对应的value
console.log dog.name

# 如果key不存在,就会返回未定义 undefined
console.log dog.height

# 给创建好的对象添加新的属性
dog["food"] = "五花肉"

console.log dog


# 删除对象的属性
delete dog["name"]
console.log dog
