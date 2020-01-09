import React, { useState } from 'react';

function Example2() {
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端程序员')
  return (
    <div>
      <p>Castie! 今年: {age}岁</p>
      <p>性别: {sex}</p>
      <p>工作是: {work}</p>
    </div>
  )
}

export default Example2