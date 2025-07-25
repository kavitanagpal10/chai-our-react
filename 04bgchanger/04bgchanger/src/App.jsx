import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

return (
    
  <div className='w-full h-screen bg-green-500
  ' style={{background: color}} >

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl' >
        <button onClick={()=>setColor("red")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg' 
        style={{background: "red"}}>text</button>
        <button onClick={() =>setColor("green")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg' 
        style={{background: "green"}}>text</button>
        <button onClick={() => setColor("blue")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg' 
        style={{background: "blue"}}>text</button>
        <button onClick={() => setColor("orange")} className='outline-none px-6 py-2 rounded-full text-white shadow-lg' 
        style={{background: "orange"}}>text</button>
      </div>


    </div>
  
  </div>
  
  
       
  
  )
  
}

export default App
