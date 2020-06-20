# 普通数组,元素之间不要添加空格
list = [1,2,3,4]

# 数组也可以添加不同类型的数据
list1 = [1,"xmg",true,[1,2,3]]

console.log list1, list


# 也可以通过缩进来定义,也就是说元素与元素之间可以换行(不加逗号)
list3 = [
  1,
  2,
  3,
  4,
  5
]

# 查找数组中对应的元素,下标是从0开始的
console.log list3[2]

# 查找对应的元素是否在数组中
console.log 6 in list3


# 查看数组的长度
console.log list3.length


# 可以查看某个范围下标的数据(元素)

# .. 包含末尾的元素
console.log list3[1..2]

# ... 不包含末尾的元素
console.log list3[1...2]