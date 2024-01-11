import { useState } from 'react'
import './App.css'
import{Route,Routes} from 'react-router-dom'
import GETLuoghiAttrazione from './Componenti/GetData'
import { Navbar } from './Componenti/Navbar'
import {Home,Info,Sfida,LuoghiFigo} from './Componenti'



function App() {
  return (
    <div className='APP'>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/info' element={<Info/>} />
        <Route path='/luoghi' element={<LuoghiFigo/>} />
        <Route path='/sfide' element={<Sfida/>} />
      </Routes>
      
    </div>
  ) 
    // <div className='App'> 
    //   {/* <GETLuoghiAttrazione></GETLuoghiAttrazione> */}
    //   Navbar
    // </div>

  
}

export default App
