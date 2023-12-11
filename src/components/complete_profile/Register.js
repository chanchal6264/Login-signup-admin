
import axios from "axios";
import React,{useState} from 'react'


import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const navigate = useNavigate();
    const ragister =async () =>{
        const data = {name, email, password, confirmpassword};
        console.log("data");
        await axios
      .post("https://sparksprince.cyclic.cloud/user/register", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          navigate("/login");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
       
    }
  return (
    <>
    <div className='bg-slate-500'>
      ragister
      <input type='text' 
      value={name} onChange={(e)=> setName(e.target.value)}
       placeholder='name' />
       <br /><br />
      <input type='text'
      value={email} onChange={(e)=> setEmail(e.target.value)}
      placeholder='email' />
      <br /><br />
      <input type='text'
      value={password} onChange={(e)=> setPassword(e.target.value)}
      placeholder='password' />
      <br /><br />
      <input type='text' 
      value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}
      placeholder='confirmpassword' />
      <br /><br />
      <button onClick={ragister}>ragister</button>


    </div>
    </>
  )
}

export default Register
