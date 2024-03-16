import React,{useState, useEffect } from 'react'
import { Navbar } from './Pagine/Navbar'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import {Info,Mappa,Hero,Footer,HomePage} from './Pagine/index'
import LoginApp from '../LoginComponent/LoginApp'
import RegistrationApp from '../LoginComponent/RegistrationApp'
import { DirectionCreate } from '../LoginComponent/DirectionCreate'
import { PercorsoCreate } from '../LoginComponent/PercorsoCreate'
import { MarkerCreate } from '../LoginComponent/MarkerCreate'
import { UpdateMarker } from '../LoginComponent/UpdateMarker'
import axios from 'axios';

export const AdminApp = () => {

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Marker/')
      .then(response => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
        // Handle error
      });
  }, []);

  return (
    <div>
      <BrowserRouter> 
       <Navbar/> 
       <Hero  />  
        <Routes>
          <Route path='/' element={<HomePage data ={post} />}/>
            <Route path='/map' element={<Mappa data ={post}/>} />
            <Route path='/info' element={<Info data ={post}/>} />
            
            <Route path='/login/' element={<LoginApp />}/>
            <Route path='/registration' element={<RegistrationApp/>}/>
            <Route path='/Direction' element={<DirectionCreate/>}/>
            <Route path='/Percorso' element={<PercorsoCreate/>}/>
            <Route path='/Marker' element={<MarkerCreate/>}/>
            <Route path="/Marker/:markerId" element={<UpdateMarker />} />
          </Routes>
          {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}
