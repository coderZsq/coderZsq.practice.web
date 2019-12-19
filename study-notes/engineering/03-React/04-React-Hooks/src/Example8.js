import React, { useRef, useState, useEffect } from 'react';

function Example8() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = 'Hello coderZsq'
    console.log(inputEl)
  }

  const [text, setText] = useState('coderZsq')
  const textRef = useRef()

  useEffect(() => {
    textRef.current = text
    console.log('textRef.current:', textRef.current)
  })

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <br />
      <input value={text} onChange={(e) => { setText(e.target.value) }} />
    </>
  )
}

export default Example8