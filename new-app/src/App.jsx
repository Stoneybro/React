import { useState } from 'react'
import './App.css'
import Profile from './Profile'
import Maincontent from './Maincontent'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
    <Profile />
    <Maincontent />
    <Footer />
    </div>
  )
}

export default App
