import React, { useState } from 'react'

const Usestatearray = () => {
    const biodata = [
      {
        id: 0,
        myName: "Shubham",
        age: 25,
      },
      {
        id: 1,
        myName: "Krishna",
        age: 26,
      },
    ];
    const [myArray,setmyArray] = useState(biodata)
   
    const remove = () => {
        setmyArray([]);
        }
    const delet = (id) => {
const myNewArray = myArray.filter((e)=>{
    return e.id !== id;
 console.log(id) 
})
console.log("after",myNewArray)
setmyArray(myNewArray);
    }
  return (
    <>
      {myArray.map((e) => {
        return (
          <h1 key={e.id}>
            id:{e.id} myName:{e.myName} age:{e.age}
            <button onClick={()=>delet(e.id)}>click</button>
          </h1>
        );
      })}
      <button onClick={remove}>clear</button>
    </>
  );
}

export default Usestatearray;