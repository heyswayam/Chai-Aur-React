import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className={` w-full h-screen`} style={{ background: color }}>

        <div className="flex flex-col justify-evenly py-3 md:flex-row md:space-x-2 md:space-y-0 bg-gray-100/60 w-1/3 mx-auto rounded-md">
          <button
            type="button"
            className="rounded-md bg-pink-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
            onClick={() => setColor("pink")}>Pink</button>
          <button
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            onClick={() => setColor("yellow")}>Yellow</button>
          <button
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            onClick={() => setColor("red")}>Red</button>
          <button
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={() => setColor("green")}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App
