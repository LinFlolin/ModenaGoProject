import React from 'react'
import '../AdminCss/HomePage.css'
export const HomePage = () => {

  
  return (
    <div>
      <div className='firstpart'>
        <h1>ModenaGo</h1>
        <h2>Il sito più bellello</h2>
        <p>Stiamo lavorando per voi...</p>
      </div>
      <div className='sezionecards'>
       {/*Posto per il component sezionecards*/}
      </div>
      <div className='sezionecarousel'>
        <img src="#" alt="" />
      </div>
      <footer className='footer'>
        <ul className='homeul'>
          <li className='homeli'>Copyright</li>
          <li className='homeli'>Contattaci</li>
          <li className='homeli'>Instagram</li>
          <li className='homeli'>Privacy Policy</li>
          <li className='homeli'>Patrocinio</li>
        </ul>
      </footer>
    </div>
   
  )
}
