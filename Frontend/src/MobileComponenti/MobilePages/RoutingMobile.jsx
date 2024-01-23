import React from 'react'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import{MapMobile,MoNav,HomeMobile,InfoMobile}from './index'

export const RoutingMobile = () => {
  return (
    <div>        
      <BrowserRouter> 
            <Routes>
                <Route path='/home' element={<HomeMobile/>}/>
                <Route path='/map' element={<MapMobile/>} />
                <Route path='/info' element={<InfoMobile/>} />
            </Routes>
            <MoNav/>
      </BrowserRouter>
    
    </div>
  )
}
