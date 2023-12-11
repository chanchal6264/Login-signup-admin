import React from "react";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {data ? <p>{data.email}</p>:<p>this is home page</p>}
    </div>
  )
};

export default Home;
