import axios from "axios";
import React, { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState();
  const [id, setId] = useState();

  const del = async () => {
    await axios
      .delete(`user/userdelete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const getdata = async () => {
    await axios
      .get("user/alluser")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  });

  useEffect(() => {
    if (id) {
      console.log(id, "id");
      del();
    }
  }, [id]);

  console.log(data);

  return (
    <>
      <div className="w-full">
        <table className="w-4/5 mx-auto mt-10 ">
          <thead className=" border-b-2 border-slate-500 bg-blue-600 text-white">
            <tr className="w-full border-slate-600 ...">
              <th className="w-1/5 text-start ">ID</th>
              <th className="w-1/5 text-start ">NAME</th>
              <th className="w-1/5 text-start ">EMAIL</th>
              <th className="w-1/5 text-start ">PASSWORD</th>
              <th className=" w-1/5 text-start ">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td className="border-b-2 border-2   border-slate-400">
                        {i + 1}
                      </td>
                      <td className="border-b-2 border-2   border-slate-400">
                        {e.name}
                      </td>
                      <td className="border-b-2 border-2   border-slate-400">
                        {e.email}
                      </td>
                      <td className="border-b-2 border-2   border-slate-400">
                        {e.password}
                      </td>
                      <td className="border-b-2 border-2   border-slate-400">
                        <svg
                          onClick={() => {
                            setId(e._id);
                            alert("done");
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;


{/*import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Hedaer from "./components/Hedaer";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin";
import axios from "axios";
import Update from "./components/Update";

const App = () => {
  return (
    <>
      {/* <Demo/> */}
    {/*}  <Hedaer />
      <Routes>
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
*/}
