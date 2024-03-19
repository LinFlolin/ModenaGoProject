import axios from 'axios'
import { default as React, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginApp from '../LoginComponent/LoginApp'
import { MarkerCreate } from '../LoginComponent/MarkerCreate'
import { MarkerDelete } from '../LoginComponent/MarkerDelete'
import { MarkerDetail } from '../LoginComponent/MarkerDetail'
import { MarkerList } from '../LoginComponent/MarkerList'
import RegistrationApp from '../LoginComponent/RegistrationApp'
import { UpdateMarker } from '../LoginComponent/UpdateMarker'
import { Navbar } from './Pagine/Navbar'
import { Footer, Hero, HomePage, Info, Mappa} from './Pagine/index'

import { MarkerGet } from '../LoginComponent/MarkerGet'
import { AuthProvider } from '../context/AuthContext'
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
      });
  }, []);


  return (

    <div className='adcontainer'>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
        <Route path='/' element={<HomePage data={post} />} />
          <Route path='/map' element={<Mappa data={post} />} />
          <Route path='/info' element={<Info data={post} />} />
          <Route path='/login' element={<LoginApp />} />
          <Route path='/registration' element={<RegistrationApp />} />
          <Route path='/add-marker' element={<MarkerCreate />} />
          <Route path='/delete-marker/:id' element={<MarkerDelete />} />
          <Route path='/detail-marker/:id' element={<MarkerDetail />} />
          <Route path='/list-marker' element={<MarkerList data={post}  />} />
          <Route path="/edit-marker/:id" element={<UpdateMarker />}/>
          {/* <Route path="/Marker/:markerId" element={<UpdateMarker />}/> */} {/* stessa roba della route sopra */}
        </Routes>
          {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}
