import React, { useState } from "react";

const UseStatearray = () => {
 
  const bioData = [
    {
      id: 0,
      myName: "vinode",
      age: 26,
    },
    {
      id: 1,
      myName: "thapa",
      age: 28,
    },
  ];

  console.log("UseStatearray");
  const [myArray, setmyArray] = useState(bioData);
  const clearArray = () => {
    setmyArray([]);
  };
  // console.log("cleararray");
  const removeElem = (id) => {
    const MyNewarray = myArray.filter((curElem) => {
      return curElem.id !== id;
    });
    setmyArray(MyNewarray);
  };
  // console.log("removeElm");
  return (  
    <>
      {myArray.map((curElm) => {
        return (
          <h1 key={curElm.id}>
            id:{curElm.id} Name:{curElm.myName} Age:{curElm.age}
            <button onClick={() => removeElem(curElm.id)}>remove</button>
          </h1>
        );
      })}
      <button onClick={clearArray}>clear</button>
    </>
  );
};

export default UseStatearray;
