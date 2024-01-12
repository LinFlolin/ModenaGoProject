import { useState } from 'react'
import './App.css'
import{Route,Routes} from 'react-router-dom'
// import GETLuoghiAttrazione from './Componenti/Pagine/GetData'
import { Navbar } from './Componenti/Navbar'
import {GetData,Sfida,LuoghiFigo,Info} from './Componenti/Pagine'

function App() {
  return (
    <div className='APP'>
      
      <Navbar/>
      <Routes>
        <Route path='/home' element={<GetData/>} />
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
