import React, { useState } from "react";

import "../App.css";
const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    //concat is use to join 2 string
    setResult(result.concat(e.target.name));
  };

  const clear = (e) => {
    setResult("");
  };

  const backspace = (e) => {
    setResult(result.slice(0, -1));
  };

  const calculate = (e) => {
    try {
      //   let userInput = "2+4";
      //   console.log(eval(userInput)); // output : 6
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} className="clear">
            {" "}
            clear
          </button>
          <button onClick={backspace} id="backspace">
            C
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick} className="zero">
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
