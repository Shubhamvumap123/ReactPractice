
import React ,{useState} from 'react'

const Shortcircuit = () => {
    const [demo,setdemo] =useState("")
  return (
    <div>
      <h1>{<>
      <h1>mast</h1>
      <p>you can do anything</p>
      </>|| demo}</h1>
      <h1>{demo && "vinod"}</h1>
    </div>
  );
}

export default Shortcircuit;