import React, { useContext } from 'react'
import { useState } from 'react';
import UserContext from '../context/userContext'

function login() {
    const {setuser} = useContext(UserContext);
    const [username, setusername] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        setuser(username)
    }
  return (
    <div className='bg-slate-100 w-fit flex'>
        <h2>Name</h2>
        <input type="text" placeholder={username} onChange={(e)=>setusername(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login