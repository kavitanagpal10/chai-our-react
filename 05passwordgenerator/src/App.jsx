import { useCallback, useEffect, useRef, useState } from 'react'
import "./app.css"


function App() {
  const [length, setlength] = useState(8)
  const[numberAllowed, setnumberAllowed] = useState(false)
  const[charAllowed, setcharAllowed] = useState(false)
  const[password, setPassword] = useState("")


  //uerref hook

  const passwordRef =useRef(null)
  
  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str  ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
      if(numberAllowed) str+= "0123456789"
      if(charAllowed) str+= "!@#$%^&*()-_=+\|{};:/?>"
      

      for(let i = 1 ; i<= length; i++){
        let char = Math.floor(Math.random() *str.length+1)
        pass += str.charAt(char)
      }
      setPassword(pass)
  } , [length, numberAllowed, charAllowed, setPassword])//for optimisation and password change run it use the word in cashe
  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99)
    //copy to clipbord
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() =>{
    passwordGenerator() 
  },[length, numberAllowed, charAllowed, setPassword])// if password disturb then run again it is run password

  return (
    <>
        
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef} />
      <button onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setlength(e.target.value)}}
           />
           <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          className='cursor-pointer'
          onChange={() =>{setnumberAllowed((prev) => !prev)

          }}
           />
           <label htmlFor='numberInput'> Numbers</label>
        </div>
                <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          className='cursor-pointer'
          onChange={() =>{setnumberAllowed((prev) => !prev)

          }}
           />
           <label htmlFor='charactorInput'> Charector</label>
        </div>
    
      </div>
       
      </div>
     
    </>
  )
}

export default App
