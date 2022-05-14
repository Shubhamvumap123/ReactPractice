import React, { useState } from "react";

const Input = () => {
  let[state, setstate] = useState("");
  const [add, setadd] = useState("");
  const handleoperator = (e) => {
    let res = state;
    res = res.split("+").map(Number);
    res = res[0] + res[1];
  setstate(res);
  };
  const addition =(e) =>{
      setstate(state+=e.target.value)
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
      <button>-</button>
      <button>*</button>
      <button onClick={handleoperator}>=</button>
      <div>{add}</div>
    </div>
  );
};

export default Input;
