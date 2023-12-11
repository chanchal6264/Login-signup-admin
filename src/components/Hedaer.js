import React from "react";
import { useNavigate } from "react-router-dom";

const Hedaer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-700 text-white flex justify-between h-14 px-4 place-items-center">
        <div className="font-bold">ACCURATE</div>
        <ul className="flex space-x-4">
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer hover:bg-white hover:text-slate-600 hover:p-1"
          >
            Home
          </li>
          <li className="cursor-pointer  hover:bg-white hover:text-slate-600 hover:p-1">
            About
          </li>
          <li className="cursor-pointer  hover:bg-white hover:text-slate-600 hover:p-1">
            Service
          </li>
          <li className="cursor-pointer  hover:bg-white hover:text-slate-600 hover:p-1">
            Contact
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li
            onClick={() => navigate("/signup")}
            className="cursor-pointer border-color-red-500"
          >
            Register
          </li>
          <li onClick={() => navigate("./login")} className="cursor-pointer">
            Login
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hedaer;
