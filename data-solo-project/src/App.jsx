import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./navbar"
import Maincontent from "./maincontent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Maincontent />
    
    </div>
  )
}

export default App
