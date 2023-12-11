import React from "react";

function Header() {
  return (
    <>
      <div className="bg-black text-white flex justify-between h-140 px-9 py-12 font-bold  place-items-center">
        <ul className="flex space-x-4">
          <li
            className="cursor-pointer hover:bg-white hover:text-slate-600 hover:p-1"
          >
            {" "}
            Home
          </li>
          <li className="cursor-pointer  hover:bg-white hover:text-slate-600 hover:p-1">
            About{" "}
          </li>
        </ul>
        <div className="font-bold">ACCURATE</div>
        <ul className="flex space-x-4">
          <li className="cursor-pointer border-color-red-500"> cart </li>
          <li className="cursor-pointer"> Login </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
