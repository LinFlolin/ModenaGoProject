import './App.css'
import{Routing} from './Componenti/Routing'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className='APP'>
       <Routing/>       
    </div>
  ) 
}

export default App
