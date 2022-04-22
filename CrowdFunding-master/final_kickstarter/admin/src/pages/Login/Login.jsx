import React, { useState } from 'react'

const login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("");

    const handleClick = (e)=>{
        e.preventDefault()
    }

  return (
    <div>
        <input type="text" placeholder="username" onChane={e=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChane={e=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default login