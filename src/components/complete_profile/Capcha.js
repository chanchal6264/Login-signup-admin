import React, { useState, useEffect } from "react";
function Capcha() {
  const [user, setUser] = useState({
    username: "",
  });
  const characters = "abc123";
  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6);

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };
  const onSubmit = (e) => {
    var element = document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    element.innerHTML = "Checking..";
    inputData.disabled = true;
    element.disabled = true;

    var myFunctions = function () {
      if (captcha == user.username) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        inputData.style.display = "none";
      } else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "not matched";
        element.disabled = true;

        var myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "verify captcha";
          element.disabled = false;
          inputData.disabled = false;
          inputData.value = "";
        };
        setTimeout(myFunction, 5000);
      }
    };
    setTimeout(myFunctions, 5000);
  };

  const chanchu = () => {
    console.log("hello");
  };
  return (
    <>
      <button onClick={chanchu}>click</button>
      <div className="container">
        <h4 id="captcha">hello</h4>
        <div className="form-group row">
          <input
            type="text"
            id="inputType"
            className="form-control"
            placeholder="enter captcha"
            name="username"
            onChange={handleChange}
            autoComplete="off"
            style={{ width: "20%" }}
          />

          <button
            type="button"
            id="succesBTN"
            onClick={onSubmit}
            className="btn"
          >
            verify captcha
          </button>
        </div>
      </div>
    </>
  );
}

export default Capcha;
