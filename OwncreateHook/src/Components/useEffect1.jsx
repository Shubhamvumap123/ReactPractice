import {useState, useEffect} from "react";;
import useTitleCount from "./UseEffect/useTitleCount";
import React from 'react'

const useEffect1 = () => {
    const [count, setCount] = useState(0)
    useTitleCount(count)
    console.log("Hello Outside");
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default useEffect1
