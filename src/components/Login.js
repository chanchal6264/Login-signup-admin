import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    console.log(data);
    
    await axios
      .post("user/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          navigate("/");
          localStorage.setItem("user", JSON.stringify(res.data.result));
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="grid place-content-center h-screen">
          <div className="bg-[#f3f3f1] shadow-2xl">
            <p className="flex justify-center font-bold pt-3">LOGIN FORM</p>
            <div className="grid p-9">
              <label className="font-bold m-2">Email</label>
              <input
                type="text"
                placeholder="enter your email"
                className="p-2 border-"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="font-bold p-2 m-2">Password</label>
              <input
                type="text"
                placeholder="enter password"
                className="p-2 border-"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={login}
                className="rounded-full bg-slate-600 m-5 text-white p-3 hover:bg-white hover:text-slate-500 font-bold"
              >
                Login
              </button>
              <p>
                don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-slate-600 cursor-pointer font-bold"
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
