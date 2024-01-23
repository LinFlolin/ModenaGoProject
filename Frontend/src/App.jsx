import './App.css'
<<<<<<< HEAD
import{Routing} from './Componenti/Routing'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginPage from './LoginPage';
=======
import {AppMobile} from './MobileComponenti/AppMobile'
import {AdminApp} from './AdminComponenti/AdminApp'
import React from 'react'
>>>>>>> d3635782dee795ce8633a486052539346df995dd

const App = () => {
  return (
    <div>
      {/* <AppMobile/> */}   
      <AdminApp/>
    </div>
  )
}

export default App

