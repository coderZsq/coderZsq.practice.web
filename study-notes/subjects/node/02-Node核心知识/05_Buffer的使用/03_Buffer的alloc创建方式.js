// 通过alloc的方式创建Buffer
{
  const buffer = Buffer.alloc(8)
  console.log(buffer)

  buffer[0] = 88
  buffer[1] = 0x88
  console.log(buffer)
}