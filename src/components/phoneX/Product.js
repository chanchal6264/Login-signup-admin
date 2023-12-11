import React from "react";

function Product() {
  return (
    <>
      <div className="">
        <p className="p-9 font-mono font-bold">POPULAR PRODUCTS</p>
        <button className="p-1 m-6 font-mono font-bold bg-blue-500 text-white hover:bg-blue-700">
          Categoris
        </button>
        <div className="place-content-around cursor-pointer flex bg-slate-300">
          <div>
            
            <p>Apple iPhone 14 pro Max(1 TB)</p>
            <p>RS.1</p>
          </div>
          <div>
            <p>Apple iPhone 5s</p>
            <p>RS.19900</p>
          </div>
          <div>
            <p>Google pixel</p>
            <p>RS.14999</p>
          </div>
          <div>
            <p>Samsung Galaxy 17</p>
            <p>Rs. 17900</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
