import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import Maincontent from './Maincontent'
import Maindata from './Maindata'
import data from "./data"

function App() {
  const [count, setCount] = useState(0)
    const datamap=data.map((item)=>{
      return(
        <Maindata
       {...item}
         />
      )
     
    })
  return (
   <div>
      <Navbar />
      <Maincontent />
      <div className='flex mt-16 px-8'>
      {datamap}
      </div>
    </div>
  )
}

export default App
