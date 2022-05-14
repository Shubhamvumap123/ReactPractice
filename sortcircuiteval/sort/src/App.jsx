import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Shortcircuit from "./Components/Shortcircuit"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Shortcircuit/>
    </div>
  )
}

export default App
