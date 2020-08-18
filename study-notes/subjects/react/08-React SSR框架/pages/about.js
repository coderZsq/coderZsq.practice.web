import React, { memo } from 'react'
import AppLayout from '../components/app-layout'

// styled-jsx: 一种css in js的技术(nextjs默认集成了)
// styled-components

export default memo(function About() {
  return (
    <div>
      <h2 className="title">About</h2>
      <p>公司成立于2000年, 拥有悠久的历史!</p>

      <style>{`
        p {
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
})
