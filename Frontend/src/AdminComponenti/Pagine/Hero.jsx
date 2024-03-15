import React from 'react'
import { useLocation } from 'react-router-dom';
import '../AdminCss/hero.css';
import {Link } from 'react-router-dom'

export const Hero = () => {
  const location = useLocation()
  const Route = ['/login','/info','/Registration']
  const hideHero = Route.some(route => location.pathname.includes(route));

  if(hideHero) {
    return null ;
  }

  return (
    <div className=' relative flex flex-col justify-center mb-6
    shadow-xl shadow-yellow-900
      bg-no-repeat bg-cover bg-bottom
      2xl:h-96     
      rounded-b-3xl overflow-hidden'>

      <img 
        className=' w-full h-full object-top object-cover
         opacity-75 '
        src='https://pedaliamoinitalia.it/wp-content/uploads/2022/09/New-tours-website-banner.png'/>
      
      <div className=' absolute flex flex-col m-3'>
      <Link to={'http://localhost:5173/map'} >
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi vero distinctio totam, voluptatum esse error quaerat nisi eos ad nobis possimus laudantium commodi enim ipsam consequatur? Ipsam, aperiam unde.
          </h1>
        </Link>
        <p className='  text-pretty  text-yellow-50 text-lg hover:uppercase 
          sm:bg-slate-100 sm:text-gray-900
          md:text-5xl md:bg-slate-600
          lg:bg-red-500
          xl:bg-amber-400 xl:text-7xl
        '>
          
          Modena Go
        </p>
        <p className='text-pretty 
         text-yellow-50 text-base
          sm:text-xs
          xl:text-base
          '>
          Immergiti nel cuore pulsante di Modena, dove ogni angolo racconta una storia. Esplora i tesori nascosti, sperimenta le emozioni uniche e scopri il fascino di un patrimonio culturale e artistico che risplende di luce e colore. Questa è la tua occasione per vivere un viaggio indimenticabile, dove ogni passo ti avvicina di più al cuore di Modena.
        </p>
      </div>

    </div>
  )
}
