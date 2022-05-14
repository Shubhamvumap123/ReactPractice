 import React,{useState} from 'react'
 
 const useStateObject = () => {
     const [myObject,setmyObject] = useState({
         myAgemyName:"vinod", myAge:27, degree:"MSC"
     });
     const changeObject =()=>{
        setmyObject({ ...myObject, myName: "pushpa", myAge: 30,degree:"C" });
     }
   return (
     <div>
       <h1>
         Name:{myObject.myName} & Age:{myObject.myAge} & degree:
         {myObject.degree}
       </h1>
       <button onClick={changeObject}>Update</button>
     </div>
   );
 }
 
 export default useStateObject