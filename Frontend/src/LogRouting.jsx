import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {LogInPage} from './LogInPage'
export const LogRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<LogInPage/>}/>         
      </Routes>
    </BrowserRouter>
  )
}
