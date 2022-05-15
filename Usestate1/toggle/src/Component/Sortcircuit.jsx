import React,{useState} from 'react'

const Sortcircuit = () => {
    const [demo,setdemo] = useState("");
  return (
    <div>
      <h1>{demo || "tehnical"}</h1>
      <h1>{demo && "shubham"}</h1>
    </div>
  );
}

export default Sortcircuit;