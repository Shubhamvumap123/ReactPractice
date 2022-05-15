
import './App.css'
import RulesHooks from "./Component/RulesHooks";
import Usestatearray from "./Component/Usestatearray";
import Sortcircuit from "./Component/Sortcircuit";
function App() {
//   const [count, setCount] = useState("shubham")
// const handlechange =()=>{
//   (count=="shubham")?
//   setCount("Madhav"):
//     setCount("shubham");
// }
  return (
    <div className="App">
      {/* <h2>{count}</h2>
      <button onClick={handlechange}>change</button> */}
      {/* <RulesHooks/> */}
      {/* <UseStateobject/> */}
      <Sortcircuit/>
      <Usestatearray/>
    </div>
  );
}

export default App
