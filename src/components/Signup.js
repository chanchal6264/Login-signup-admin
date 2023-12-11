import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();

  const signup = async () => {
    const data = { name, email, password, confirmpassword };
    console.log(data);
    await axios
      .post("user/register", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          navigate("/login");
          
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="grid place-content-center h-screen">
        <div className="bg-[#f3f3f1] shadow-2xl">
          <p className="flex justify-center font-bold pt-3">FORM</p>
          <div className="grid p-9">
            <label className="font-bold m-2 ">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="enter your name"
              className="p-2 border-"
            />

            <label className="font-bold m-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="enter your email"
              className="p-2 border-"
            />

            <label className="font-bold p-2 m-2">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="enter password"
              className="p-2 border-"
            />
            <label className="font-bold p-2 m-2">confirm Password</label>
            <input
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              type="text"
              placeholder="enter password"
              className="p-2 border-"
            />
            <button
              onClick={signup}
              className="rounded-full bg-slate-600 m-5 text-white p-3 hover:bg-white hover:text-slate-500 font-bold"
            >
              Register
            </button>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-slate-600 cursor-pointer font-bold"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
