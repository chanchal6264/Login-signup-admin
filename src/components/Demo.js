import React from "react";

const Demo = () => {
  return (
    <div>
      {ab.map((data, i) => {
        return (
          <div key={i}>
            <div>{data.name}</div>
            <div>{data.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Demo;

const ab = [
  { name: "abc", email: "abc@gmail.com" },
  { name: "xyz", email: "xyz@gmail.com" },
  { name: "xyz", email: "xyz@gmail.com" },
  { name: "xyz", email: "xyz@gmail.com" },
  { name: "xyz", email: "xyz@gmail.com" },
];
