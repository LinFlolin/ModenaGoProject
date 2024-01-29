import React from 'react'
import{BrowserRouter}from 'react-router-dom'
import { Navbar } from './Navbar'
<<<<<<< HEAD:Frontend/src/AdminComponenti/Pagine/Routing.jsx
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import {HomePage,Info,LuoghiFigo,Sfida,Mappa} from '.'
// import {LoginPage}from './Authentication/LoginPage'
=======
import{Route,Routes} from 'react-router-dom'
import {HomePage,Info,LuoghiFigo,Sfida,Mappa} from './Pagine'
import {LoginPage}from './Authentication/LoginPage'
>>>>>>> parent of 139797d (#AddLogInEMOdificareIlFrontFolder):Frontend/src/Componenti/Routing.jsx
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

