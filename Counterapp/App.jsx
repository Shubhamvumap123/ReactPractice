import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
const [counter,setcounter] = useState(0)
console.log(typeof(setcounter))

const HandleChange = (value)=>{
  setcounter(counter+value)
  console.log(counter)
}
  return (
    <div className="App">
     <h3 className={`${counter%2==0 ? "even":"odd"}`}>Counter:{counter}</h3>
     <button onClick={()=>{HandleChange(1)}}>add </button>
     <button onClick={()=>{HandleChange(-1)}}>sum </button>
     <button onClick={()=>{HandleChange(counter*1)}}>double</button>
    </div>
  );
}

export default App;
