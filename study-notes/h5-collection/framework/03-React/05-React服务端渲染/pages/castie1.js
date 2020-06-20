import React, { useState } from 'react'

function coderZsq() {

  const [color, setColor] = useState('blue')

  const changeColor = () => {
    setColor(color == 'blue' ? 'red' : 'blue')
  }

  return (
    <>
      <div>https://github.com/coderZsq</div>
      <div className="coderZsq">https://github.com/coderZsq</div>
      <div><button onClick={changeColor}>改变颜色</button></div>
      <style jsx>
        {`
          div {color: ${color};}
          .coderZsq {color: red;}
        `}
      </style>
    </>
  )
}

export default coderZsq