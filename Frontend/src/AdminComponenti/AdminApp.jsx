import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginApp from '../LoginComponent/LoginApp'
import { MarkerCreate } from '../LoginComponent/MarkerCreate'
import { MarkerDelete } from '../LoginComponent/MarkerDelete'
import { MarkerDetail } from '../LoginComponent/MarkerDetail'
import { MarkerList } from '../LoginComponent/MarkerList'
import RegistrationApp from '../LoginComponent/RegistrationApp'
import './Admin.css'
import { Navbar } from './Pagine/Navbar'
import { Footer, Hero, HomePage, Info, LuoghiFigo, Mappa, Sfida } from './Pagine/index'
export const AdminApp = () => {
  return (
    <div className='adcontainer'>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/map' element={<Mappa />} />
          <Route path='/info' element={<Info />} />
          <Route path='/luoghi' element={<LuoghiFigo />} />
          <Route path='/sfide' element={<Sfida />} />
          <Route path='/login' element={<LoginApp />} />
          <Route path='/registration' element={<RegistrationApp />} />
          {/* <Route path='/Direction' element={<DirectionCreate/>}/>
            <Route path='/Percorso' element={<PercorsoCreate/>}/> */}
          <Route path='/add-marker' element={<MarkerCreate />} />
          <Route path='/delete-marker/:id' element={<MarkerDelete />} />
          <Route path='/detail-marker/:id' element={<MarkerDetail />} />
          <Route path='/list-marker' element={<MarkerList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
