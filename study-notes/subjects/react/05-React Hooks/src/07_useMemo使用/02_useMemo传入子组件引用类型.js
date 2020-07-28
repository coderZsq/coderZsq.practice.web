import React, { useState, memo, useMemo } from 'react'

const SQInfo = memo((props) => {
  console.log('SQInfo重新渲染')
  return <h2>名字: {props.info.name} 年龄: {props.info.age}</h2>
})

export default function MemoHookDemo02() {
  console.log('MemoHookDemo02重新渲染')
  const [show, setShow] = useState(true)

  // const info = { name: 'coderZsq', age: 18 }
  const info = useMemo(() => {
    return { name: 'coderZsq', age: 18 }
  }, [])

  return (
    <div>
      <SQInfo info={info} />
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}
