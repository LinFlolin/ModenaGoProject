import React from 'react'
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import { Navbar } from './Navbar'
import {HomePage,Info,LuoghiFigo,Sfida,Mappa} from './index'
export function Routing () {

  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
            <Route path='/map' element={<Mappa/>} />
            <Route path='/info' element={<Info/>} />
            <Route path='/luoghi' element={<LuoghiFigo/>} />
            <Route path='/sfide' element={<Sfida/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

