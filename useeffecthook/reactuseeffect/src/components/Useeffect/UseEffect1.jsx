import React, { useEffect, useState } from "react";

const UseEffect1 = () => {

    const [count,setcount] = useState(0);

     useEffect(() => {

         if(count>=1){
             document.title = `Count ${count}`;
         }else{
             document.title = `Count`;
         }

     },[count]);
   
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Click</button>
    </div>
  );
}

export default UseEffect1;