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
      shadow-xl
      bg-img1 
      bg-no-repeat bg-cover
      h-4/6
      xl:bg-center
      2xl:h-96 2xl:bg-[center_top_-10rem]
      rounded-b-3xl overflow-hidden
      '>
        <div className=' relative h-24 bg-slate-500 ' />
      <div className=' absolute flex flex-col m-3 '>
        <p className='  text-pretty text-primaria text-lg hover:uppercase 
          sm:bg-slate-100 sm:text-gray-900
          md:text-5xl md:bg-slate-600 md:bg-opacity-85
          lg:bg-red-500
          xl:bg-amber-400 xl:text-7xl'></p>
        <p className='text-pretty m-20
         text-center
         text-yellow-50 text-lg font-extrabold 
          sm:text-xs
          xl:text-base
          '>
          Immergiti nel cuore pulsante di Modena, dove ogni angolo racconta una storia. Esplora i tesori nascosti, sperimenta le emozioni uniche e scopri il fascino di un patrimonio culturale e artistico che risplende di luce e colore. Questa è la tua occasione per vivere un viaggio indimenticabile, dove ogni passo ti avvicina di più al cuore di Modena.
        </p>
      </div>

    </div>
  )
}
