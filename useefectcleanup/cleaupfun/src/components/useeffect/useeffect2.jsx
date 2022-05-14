

import React,{useState,useEffect} from 'react'

const Useeffect2 = () => {

    const [widthcount,setwidthcont] = useState(window.screen.width)
const actualWidth =() =>{
    setwidthcont(window.innerWidth)
    console.log("innerWidth", innerWidth);
}

    useEffect(()=>{
    window.addEventListener("resize",actualWidth);
return () => {
    window.removeEventListener("resize", actualWidth);
}
    }) ;
  return (
    <div>
      <p>The actual size of the window is:</p>
      <h1>{widthcount}</h1>
    </div>
  );
}

export default Useeffect2