import React, { useState }from 'react'

const UseStateobject = () => {
    const [myObject, setmyObject] = useState({
        myName:"vinod",myAge:27,degree:"MCS"
    });
    const changeObject=()=>{
        setmyObject({...myObject, myName:"shubham"})
    }
  return (
    <div>
      <h1>
        Name:{myObject.myName}myAge:{myObject.myAge}
        degree:{myObject.degree}
      </h1>
      <button onClick={changeObject}>update</button>
    </div>
  );
}

export default UseStateobject