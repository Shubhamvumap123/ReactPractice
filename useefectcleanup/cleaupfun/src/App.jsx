import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Useeffect2 from './components/useeffect/useeffect2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Useeffect2/>
    </div>
  )
}

export default App
