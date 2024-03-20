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
          italic
          '>
Benvenuti e benvenute sul nostro sito, dove vi facciamo vedere il meglio di Modena e tutto ciò che c'è da esplorare in questa fantastica città.  Dalla Ghirlandina al Museo Stanguellini, ciò che c'è da scoprire mette d'accordo ogni persona.        </p>
      </div>

    </div>
  )
}
