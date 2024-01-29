import React from 'react'
import{BrowserRouter}from 'react-router-dom'
import { Navbar } from './Navbar'
import{Route,Routes} from 'react-router-dom'
import {HomePage,Info,LuoghiFigo,Sfida,Mappa} from './Pagine'
import {LoginPage}from './Authentication/LoginPage'
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
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

