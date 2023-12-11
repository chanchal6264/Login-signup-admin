import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Csig() {
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [confirmpassword, setConfirmpassword] =useState("");
    const navigate = useNavigate();
 
    const sign= async()=> {
        const data = [name, email, password, confirmpassword]
        console.log(data);

        await axios 
        .post("/sign",data)
        .then((res)=>{
            console.log(res);
        })
        .catch((err) => console.log(err))
    }
  return (
    <>
    from
    Name:
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/><br /><br />
    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/><br /><br />
    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/><br /><br />
    <input type='text' value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} placeholder='cpassword'/><br /><br />
    <button onClick={sign}>click</button>
    
      
    </>
  )
}

export default Csig
