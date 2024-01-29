import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, newCount] = useState(0)
  const addValue = () => {
    if(count<=0) count=0
    count = count + 1
    if(count<=20){
      newCount(count)
    }
  }
  const removeValue = ()=> {
    if(count>=20) count=20
    count = count - 1
    if(count>=0){
      newCount(count)
    }
  }
  return (
    <>
      <h1>react react react</h1>
      <h3>{count}</h3>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <h3>{count}</h3>
    </>
  )
}

export default App
