import React, { useState, useEffect } from "react";


const Timer = () => {
    const [second,setsecond] =useState(0)
    const [minuit,setminuit] =useState(0)

    var timer;
    useEffect(() => {
timer=setInterval(() => {
     setsecond(second+1);
     if(second==59){
         setminuit(minuit+1);
         setsecond(0)
     }
},1000)

    return ()=>clearInterval(timer);

    })
    
const restart = () => {
    setsecond(0)
    setminuit(0)
}
const stop = () => {clearInterval(timer)}
  return (
    <div>
      <div>
        <div>
          <h1>Timer</h1>
          <h1>
            {minuit < 10 ? "0" + minuit : minuit}:
            {second < 10 ? "0" + second : second}
          </h1>
          <button onClick={restart}>restart</button>
          <button onClick={stop}>stop</button>
        </div>
      </div>
    </div>
  );
}

export default Timer