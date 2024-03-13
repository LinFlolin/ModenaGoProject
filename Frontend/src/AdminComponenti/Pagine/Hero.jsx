import React from 'react'
import { useLocation } from 'react-router-dom';
import '../AdminCss/hero.css';
export const Hero = () => {
  const location = useLocation()
  const Route = ['/login','/info','/Registration']
  const hideHero = Route.some(route => location.pathname.includes(route));

  if(hideHero) {
    return null ;
  }

  return (
    <div className='flex flex-col h-80 justify-center mt-14 mb-2 p-6  bg-slate-500 rounded-b-3xl bg-gradient-to-t  to-slate-500 '>
      <div className='box '>
        <p className=' text-pretty text-lg md:text-7xl  hover:uppercase '
        >
          Modena Go
        </p>
        <p className='text-pretty text-base  sm:text-sm '>
          Immergiti nel cuore pulsante di Modena, dove ogni angolo racconta una storia. Esplora i tesori nascosti, sperimenta le emozioni uniche e scopri il fascino di un patrimonio culturale e artistico che risplende di luce e colore. Questa è la tua occasione per vivere un viaggio indimenticabile, dove ogni passo ti avvicina di più al cuore di Modena.
        </p>
      </div>

    </div>
  )
}
