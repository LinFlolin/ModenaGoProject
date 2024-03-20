import React from 'react'
import {useNavigate,Link} from 'react-router-dom'

export const Terzosessione = () => {
  const navigate = useNavigate();

  const goToPage = () => {
     navigate('/team'); 
  };
  return (
             
    <section className=' flex flex-row-reverse h-60 justify-evenly gap-3
      2lg:text-xl
    '>
      <div className=' relative w-9/12 
          md:hidden
          lg:object-cover             
          '>
        <img src='https://blog.vantagecircle.com/content/images/2023/07/Featured-Image-Light-1.png'
         className=' absolute object-cover
          w-full h-full rounded-l-full 
          lg:rounded-full lg:mr-3          
          '/>
      </div>
      <div className='relative
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-i duration-300 bg-slate-700 bg-opacity-25
          m-10 
          md:bg-homeImg3 bg-cover opacity-85 lg:m-0 lg:p-10
          sm:flex sm:flex-col sm:justify-center sm:p-2 sm:pt-0 sm:text-sm 
          lg:flex lg:flex-col justify-center
          '>
          <div className='
            relative
            bg-blend-luminosity
            lg:m-0 lg:p-10
            sm:p-2 sm:m-4 sm:max-w-full sm:text-sm md:bg-white 
            m-8
           text-base 
          '>
            <h1>TEAM</h1>
            <p className=' text-orange-20'>
            Siamo una squadra unita da una passione comune: perseguire obiettivi significativi attraverso la nostra diversità di competenze e l'impegno condiviso. Attraverso collaborazioni solide e l'ideazione di soluzioni innovative, svolgiamo un ruolo fondamentale nell'affrontare sfide complesse e nell'ispirare il cambiamento positivo. Scopri di più su chi siamo e il nostro impatto             </p>
            < Link to={'/team'}
              className=' left-4 hover:bg-gradient-to-b from-slate-900 to-slate-600
               text-cyan-900 underline text-lg' >
               scopri di più
            </Link>
          </div>
         
      </div>
    
                          
  </section>
  )
}
