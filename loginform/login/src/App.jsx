import { useState } from 'react';
import Basicform from "./Components/Forms/Basicform";
import './App.css';
// import Uncontrolled from './Components/Forms/Uncontrolled';
function App() {
  return (
    <div className="App">
      {/* <Uncontrolled /> */}
      <Basicform />
    </div>
  );
}
export default App;