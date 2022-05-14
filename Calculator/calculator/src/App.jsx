import { useState } from 'react'
import Input from './Component/Input'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Input/>
    </div>
  )
}

export default App
