import { useState } from 'react'
import './App.css'
import Home from './Componenti/Home'
import Info from './Componenti/Info'
import Sfida from './Componenti/Sfida'
import LuoghiFigo from './Componenti/LuoghiFigo'
import{Router,Routes} from 'react-router-dom'
import GETLuoghiAttrazione from './Componenti/GetData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <GETLuoghiAttrazione></GETLuoghiAttrazione> */}
      <Home/>
      <Info/>
      <Sfida/>
      <LuoghiFigo/>
     
     
    </div>
  )
}

export default App
