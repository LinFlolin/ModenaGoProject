import React from 'react'
import {Link} from 'react-router-dom'
export const Secondosessione = () => {
  return (
    <section className=' flex flex-row h-60 justify-evenly gap-3
     2lg:text-xl 

    '>
      <div className=' relative w-9/12 

          md:hidden
          lg:object-cover             
          '>
        <img src='https://tourismmedia.italia.it/is/image/mitur/20210310112348-shutterstock-1765880312?wid=1080&hei=660&fit=constrain,1&fmt=webp'
         className=' absolute object-cover
          w-full h-full rounded-r-full 
          lg:rounded-full lg:mr-3          
          '/>
      </div>
      <div className='relative
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-i duration-300 bg-slate-700 bg-opacity-25
          m-10 
          md:bg-homeImg2 bg-cover opacity-85 lg:m-0 lg:p-10
          sm:flex sm:flex-col sm:justify-center sm:p-2 sm:pt-0 sm:text-sm 
          lg:flex lg:flex-col justify-center
          '>
          <div className='
            bg-blend-luminosity 
            lg:m-0 lg:p-10
            sm:p-2 sm:m-4 sm:max-w-full sm:text-sm md:bg-white 

            m-8
           text-secondo text-base 
          '>
            <h1>Luoghi d'attrazioni </h1>
            <p className=' text-orange-20'>
            Qui potrete scegliere i luoghi che più vi interessano, vederne i dettagli e seguire i percorsi per scoprire nuove cose su questa città             </p>
            < Link to={'/info'}
              className=' left-4 hover:bg-gradient-to-b from-slate-900 to-slate-600
               text-cyan-900 underline text-lg' >
               scopri di più
            </Link>
          </div>
      </div>                         
  </section>


  )
}
