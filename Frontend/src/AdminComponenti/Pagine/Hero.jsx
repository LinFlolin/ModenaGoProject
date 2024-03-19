import React from 'react'
import { useLocation } from 'react-router-dom';
import {Link } from 'react-router-dom'

export const Hero = () => {
  const location = useLocation()
  const Route = ['/login','/info','/Registration','/list-marker','/detail-marker']
  const hideHero = Route.some(route => location.pathname.includes(route));

  if(hideHero) {
    return null ;
  }

  return (
    <div className='
      relative flex flex-col justify-center mb-14
      shadow-lg shadow-slate-400
      bg-img1 
      bg-no-repeat bg-cover
      h-4/6
      xl:bg-center
      2xl:h-96 2xl:bg-[center_top_-10rem]
      rounded-b-3xl overflow-hidden
      '>
      <div 
        className=' relative flex flex-col bg-slate-700 bg-opacity-60 p-5 mt-4
        '>

        <p className='text-pretty
         text-center
         text-yellow-50 text-lg font-extrabold 
          sm:text-xs
          xl:text-base 
          
          '>
          " Immergiti nel cuore pulsante di Modena, dove ogni angolo racconta una storia. Esplora i tesori nascosti, sperimenta le emozioni uniche e scopri il fascino di un patrimonio culturale e artistico che risplende di luce e colore. Questa è la tua occasione per vivere un viaggio indimenticabile, dove ogni passo ti avvicina di più al cuore di Modena "
        </p>
      </div>

    </div>
  )
}
