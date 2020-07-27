import React, { useState } from 'react'

export default function MultiHookState() {
  const [counter, setCounter] = useState(0)
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(['kobe', 'lilei'])

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <h2>我的年龄: {age}</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
