import './App.css'
import React, { useState, useEffect } from 'react';
import {AdminApp} from './AdminComponenti/AdminApp'
import {AppMobile} from './/MobileComponenti/AppMobile'

const App = () => {
  return (

    <div className='body'>
      {/* <AppMobile></AppMobile> */}
      <AdminApp/>
    </div>
  )
}

export default App