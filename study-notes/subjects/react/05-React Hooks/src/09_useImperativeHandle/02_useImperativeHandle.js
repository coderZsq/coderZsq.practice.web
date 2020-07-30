import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const SQInput = forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }), [inputRef.current])
  return <input ref={inputRef} type="text" />
})

export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef()

  return (
    <div>
      <SQInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
