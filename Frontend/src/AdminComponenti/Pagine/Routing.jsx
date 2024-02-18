import React from 'react'
import { Navbar } from './Navbar'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import {HomePage,Info,LuoghiFigo,Sfida,Mappa} from '.'
import LoginApp from '../../LoginComponent/LoginApp'
import RegistrationApp from '../../LoginComponent/RegistrationApp'
export function Routing () {

  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
            <Route path='/map' element={<Mappa/>} />
            <Route path='/info' element={<Info/>} />
            <Route path='/luoghi' element={<LuoghiFigo/>} />
            <Route path='/sfide' element={<Sfida/>} />
            <Route path='/login' element={<LoginApp/>}/>
            <Route path='/registration' element={<RegistrationApp/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

