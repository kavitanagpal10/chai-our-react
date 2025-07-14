import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App(username) {
  const [count, setCount] = useState(0)
  const obj= {
    name:"Chai our code"
  }

  return (
    <>
     <h1 className='text-4xl font-black bg-green-400 text-black p-4 px-150 py-50'>Tailwind </h1>
        

    </>
  )
}

export default App
