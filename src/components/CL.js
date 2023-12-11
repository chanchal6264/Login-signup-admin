import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CL() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const login= async() =>{
        const data = {name};
        console.log(data)
        await axios 
       /* .post("user/login",data)
        .ther((res)=>{
            console.log(res);
            if(res.data.success ===1){
                navigate("/");
                localStorage.setItem("user", JSON.stringify(res.data.result));
            }else{
                alert(res.data.message);
            }
        })
        //.catch((err)=> console.log(err));*/
    }

    
   

  return (
    <div className='bg-slate-300'>
      <input type='text' placeholder='name' className='' 
         value={name} onChange={(e)=>setName(e.target.value)}
         
      /><br />
      <button onClick={login}>click</button>

    </div>
  )
}

export default CL
