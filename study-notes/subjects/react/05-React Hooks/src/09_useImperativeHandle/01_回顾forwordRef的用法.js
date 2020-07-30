import React, { useRef, forwardRef } from 'react'

const SQInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />
})

export default function ForwardRefDemo() {
  const inputRef = useRef()

  return (
    <div>
      <SQInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
