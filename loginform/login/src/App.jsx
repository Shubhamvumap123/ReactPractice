import { useState } from 'react';
import Basicform from "./Components/Forms/Basicform";
import Uncontrolled from "./Components/Forms/Uncontrolled"
import './App.css';
// import Uncontrolled from './Components/Forms/Uncontrolled';
function App() {
  return (
    <div className="App">
      <Uncontrolled />
      <Basicform />
    </div>
  );
}
export default App;