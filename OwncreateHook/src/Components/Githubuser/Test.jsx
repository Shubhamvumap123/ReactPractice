
import {useEffect, useState} from "react"
import useTitleCount from "../UseEffect/useTitleCount"
import React from 'react'

const Test = () => {
const [count, setcount] = useState(0);
useTitleCount(count)
    // useEffect(() => {
    //   if (count >= 1) {
    //     document.title = `Count ${count}`;
    //   } else {
    //     document.title = `Count`;
    //   }
    // }, [count]);

  return ( <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Click</button>
    </div>
  )
}

export default Test

