import './App.css'
import React, { useState, useEffect } from 'react';
import {AdminApp} from './AdminComponenti/AdminApp'
import{AppMobile}from './MobileComponenti/AppMobile'
const App = () => {
  return (
    <div className='App'>
      <AdminApp className='admin'/>
    </div>
  )
}

export default App