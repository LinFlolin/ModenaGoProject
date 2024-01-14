import React from 'react'
import{BrowserRouter}from 'react-router-dom'
import { Navbar } from './Navbar'
import{Route,Routes} from 'react-router-dom'
import {GetData,Info,LuoghiFigo,Sfida,Mappa} from './Pagine'

export function Home () {

  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/map' element={<Mappa/>} />
          <Route path='/info' element={<Info/>} />
          <Route path='/luoghi' element={<LuoghiFigo/>} />
          <Route path='/sfide' element={<Sfida/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

