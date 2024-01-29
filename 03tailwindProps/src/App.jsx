import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [1,2,3]
  let myObj = {
    name:"Swayam",
    age:20
  }
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-md p-5 mb-5"> Chai Aur Code</h1>
      <Button btnText="ME CLICK" arr = {myArr} obj = {myObj} />
    </>
  )
}

export default App
