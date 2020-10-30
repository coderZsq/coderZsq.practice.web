const message = 'Hello'

// 创建Buffer
// 0~15 0~15
// 0~f 0~f
// 00 ~ ff
// 1.创建方式一: 不推荐(过期)
{
  const buffer = new Buffer(message)
  console.log(buffer)
}

// 2. 创建方式二:
{
  const buffer = Buffer.from(message)
  console.log(buffer)
}