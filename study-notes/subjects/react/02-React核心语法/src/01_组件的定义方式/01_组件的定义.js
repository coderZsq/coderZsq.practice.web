import React from 'react'

// export default class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       message: '你好啊, 李银河'
//     }
//   }

//   render() {
//     return (
//       <div>
//         <span>我是App组件</span>
//         {/* alt + shift + f: 对代码进行格式化 */}
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }

/**
 * 函数式组件的特点
 * 1. 没有this对象
 * 2. 没有内部的状态(hooks)
 */
export default function App() {
  return (
    <div>
      <span>我是function的组件: App组件</span>
      <h2>counter</h2>
      <button>+1</button>
      <h2>你好啊, 王小波 </h2>
    </div>
  )
}