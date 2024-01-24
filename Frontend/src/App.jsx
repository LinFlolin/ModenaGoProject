import './App.css'
import React, { useState, useEffect } from 'react';
import {AdminApp} from './AdminComponenti/AdminApp'
//import{Routing} from './Componenti/Routing'
import {AppMobile} from './/MobileComponenti/AppMobile'

const App = () => {
  return (
    <div>
      <AppMobile></AppMobile>
      {/* <AdminApp/> */}
    </div>
  )
}

export default App

