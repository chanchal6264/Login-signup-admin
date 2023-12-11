import React,{useState} from 'react'

function Update() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

function updateUser(){
    const data= [name,email,password,confirmpassword]
    console.log(data);
}
 
  return (
    <>
      this is update page
      <div>
      <div className="grid place-content-center h-screen">
        <div className="bg-[#f3f3f1] shadow-2xl">
          <p className="flex justify-center font-bold pt-3">Update page</p>

          <div className="grid p-9">
            <label className="font-bold m-2 ">Name</label>
            <input value={name}  onChange={(e) => setName(e.target.value)}  />

            <label className="font-bold m-2">Email</label>
            <input value={email}  onChange={(e) => setEmail(e.target.value)}  />

            <label className="font-bold p-2 m-2">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />

            <label className="font-bold p-2 m-2">confirm Password</label>
            <input value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}
              />
            <button onClick={updateUser} className='bg-slate-600 m-3 p-2 '>UPDATE</button>
           
          </div>
        </div>
      </div>
    </div>
  

    </>
  )
}

export default Update
