
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNum,decNum } from './action'
const App = () => {
   const mystate=useSelector((state)=>state.changeNumber)
   const dispatch=useDispatch();
  return (
    <>
    <h3>Welcome to counter App</h3>
    <p>{mystate}</p>
    <button onClick={()=>dispatch(incNum())}>Increment</button>
    <button onClick={()=>dispatch(decNum())}>Decrement</button>
    </>
  )
}

export default App