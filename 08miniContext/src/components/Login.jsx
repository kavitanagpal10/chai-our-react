import React,{useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
const [username, setuername] = useState('')
const [password, setPassword] = useState('')

const {setUser} = useContext(UserContext)

const handleSubmit =(e) =>{
e.preventDefault()
setUser({username,password})
}

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username} //to access value and control
        onChange={(e) => setuername(e.target.value)}
        placeholder='username'/>
        {'  '}
        <input type="text" value={username} //to access value and control
        onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Login