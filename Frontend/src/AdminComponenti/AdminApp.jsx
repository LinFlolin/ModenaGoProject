import React from 'react'
import { Navbar } from './Pagine/Navbar'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import {HomePage,Info,LuoghiFigo,Sfida,Mappa,Hero,Footer} from './Pagine/index'
import LoginApp from '../LoginComponent/LoginApp'
import RegistrationApp from '../LoginComponent/RegistrationApp'
import './Admin.css'
import { DirectionCreate } from '../LoginComponent/DirectionCreate'
import { PercorsoCreate } from '../LoginComponent/PercorsoCreate'
import { MarkerCreate } from '../LoginComponent/MarkerCreate'
export const AdminApp = () => {
  return (
    <div className='adcontainer'>
      <BrowserRouter> 
       <Navbar/> 
       <Hero />  
        <Routes>
          <Route path='/' element={<HomePage/>}/>
            <Route path='/map' element={<Mappa />} />
            <Route path='/info' element={<Info/>} />
            <Route path='/luoghi' element={<LuoghiFigo/>} />
            <Route path='/sfide' element={<Sfida/>} />
            <Route path='/login' element={<LoginApp/>}/>
            <Route path='/registration' element={<RegistrationApp/>}/>
            <Route path='/Direction' element={<DirectionCreate/>}/>
            <Route path='/Percorso' element={<PercorsoCreate/>}/>
            <Route path='/Marker' element={<MarkerCreate/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}
