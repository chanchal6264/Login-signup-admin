//import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Hedaer from "./components/Hedaer";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin";
//import axios from "axios";
import Update from "./components/Update";
import CL from './components/CL'
import CA from "./components/CA";
import Csig from "./components/Csig";


const App =()=> {
  return (
    <>
   
 <Hedaer />
 
      <Routes>
        <Route path="/cs" element={<Csig/>} />
        <Route path="/ca" element={<CA />} />
        <Route path="/CL" element={<CL />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
};

export default App;
