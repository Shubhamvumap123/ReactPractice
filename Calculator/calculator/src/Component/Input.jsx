import React, { useState } from "react";

const Input = () => {
  let[state, setstate] = useState("");
  const [add, setadd] = useState("");

  const handleoperator = (e) => {
    let res = state;
    res = res.split("+").map(Number);
    var sum=0;
    for(var i =0;i<res.length;i++){
      sum+=res[i];
    }
    console.log(sum);
    setstate(sum);
  };
  const addition =(e) =>
  {
      setstate(state+=e.target.value)
  }
  const substraction =(e) => {
      setstate((state -= e.target.value));
  }
  
  return (
    <div>
      <div>{state}</div>
      <input type="submit" value="+" onClick={addition} />
      <input type="submit" value="0" onClick={addition} />
      <input type="submit" value="1" onClick={addition} />
      <input type="submit" value="2" onClick={addition} />
      <input type="submit" value="3" onClick={addition} />
      <input type="submit" value="4" onClick={addition} />
      <input type="submit" value="5" onClick={addition} />
      <input type="submit" value="6" onClick={addition} />
      <input type="submit" value="7" onClick={addition} />
      <input type="submit" value="8" onClick={addition} />
      <input type="submit" value="9" onClick={addition} />
      <button onClick={substraction} >-</button>
      <button>*</button>
      <button onClick={handleoperator}>=</button>
      <div>{add}</div>
    </div>
  );
};

export default Input;
