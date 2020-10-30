const message = '你好啊'

{
  // 1. 编解码相同
  // 对中文进行编码: utf8
  const buffer = Buffer.from(message)
  console.log(buffer)

  // 对字节进行解码: utf8
  console.log(buffer.toString())
}

// 2. 编码使用utf16le, 解码使用utf8
{
  const buffer = Buffer.from(message, 'utf16le')
  console.log(buffer)
  console.log(buffer.toString('utf16le'))
}