import React, { useState, createContext } from 'react'
import CounterClass from './01_体验hooks/01_counter-class'
import CounterHook from './01_体验hooks/02_counter-hook'
import CounterHook2 from './01_体验hooks/03_counter-hook'
import MultiHookState from './02_useState使用/01_多个状态的使用'
import ComplexHookState from './02_useState使用/02_复杂状态的修改'
import ClassCounterTitleChange from './03_useEffect使用/01_class实现title的修改'
import HookCounterChangeTitle from './03_useEffect使用/02_useEffect的hook实现title的修改'
import EffectHookCancelDemo from './03_useEffect使用/03_useEffect模拟订阅和取消订阅'
import MultiEffectHookDemo from './03_useEffect使用/04_多useEffect一起使用'
import ContextHookDemo from './04_useContext使用/useContext的使用'
import Home from './05_useReducer使用/home'
import Profile from './05_useReducer使用/profile'
import CallbackHookDemo01 from './06_useCallback使用/01_useCallback不能进行的性能优化'
import CallbackHookDemo02 from './06_useCallback使用/02_useCallback进行的性能优化 copy'
import MemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用'
import MemoHookDemo02 from './07_useMemo使用/02_useMemo传入子组件引用类型'
import RefHookDemo01 from './08_useRef/01_useRef引用DOM'
import RefHookDemo02 from './08_useRef/02_useRef引用其他数据'
import ForwardRefDemo from './09_useImperativeHandle/01_回顾forwordRef的用法'
import UseImperativeHandleHookDemo from './09_useImperativeHandle/02_useImperativeHandle'
import EffectCounterDemo from './10_useLayoutEffect/01_useEffect的count修改'
import LayoutEffectCounterDemo from './10_useLayoutEffect/02_useLayoutEffect的count修改'
import CustomLifeHookDemo01 from './11_自定义Hook/01_认识自定义Hook'
import CustomContextShareHook from './11_自定义Hook/02_自定义Hook练习-Context共享'
import CustomScrollPositionHook from './11_自定义Hook/03_自定义Hook练习-获取滚动位置'
import CustomDataStoreHook from './11_自定义Hook/04_自定义Hook练习-localStorage'

export const UserContext = createContext()
export const TokenContext = createContext()
export const ThemeContext = createContext()

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* 1. Hook初体验 */}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <CounterHook2 /> */}

      {/* 2. useState */}
      {/* <MultiHookState /> */}
      {/* <ComplexHookState /> */}

      {/* 3. useEffect */}
      {/* <ClassCounterTitleChange /> */}
      {/* <HookCounterChangeTitle /> */}
      {/* {show && <EffectHookCancelDemo />} */}
      {/* <MultiEffectHookDemo /> */}

      {/* 4. useContext */}
      {/* <UserContext.Provider value={{ name: 'coderZsq', age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: '30px', color: 'red' }}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 5. useReducer */}
      {/* <Home />
      <Profile /> */}

      {/* 6. useCallback */}
      {/* <CallbackHookDemo01 /> */}
      {/* <CallbackHookDemo02 /> */}

      {/* 7. useMemo */}
      {/* <MemoHookDemo01 /> */}
      {/* <MemoHookDemo02 /> */}

      {/* 8. useRef */}
      {/* <RefHookDemo01 /> */}
      {/* <RefHookDemo02 /> */}

      {/* 9. useImperativeHandle */}
      {/* <ForwardRefDemo /> */}
      {/* <UseImperativeHandleHookDemo /> */}

      {/* 10. useLayoutEffect */}
      {/* <EffectCounterDemo /> */}
      {/* <LayoutEffectCounterDemo /> */}

      {/* 11. 自定义Hook */}
      {/* {show && <CustomLifeHookDemo01 />} */}
      {/* <UserContext.Provider value={{ name: 'sq', age: 18 }} >
        <TokenContext.Provider value="fdafdafafa">
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomScrollPositionHook /> */}
      <CustomDataStoreHook />

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}