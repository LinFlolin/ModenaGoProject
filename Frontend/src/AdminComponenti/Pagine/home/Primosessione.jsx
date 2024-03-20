import React from 'react'

export const Primosessione = () => {
  return (
   
    <section className=' flex flex-row-reverse h-60 justify-evenly gap-3
    lg:
    '>
      <div className=' relative w-9/12 
          md:hidden
          lg:object-cover             
          '>
        <img src='https://media.istockphoto.com/id/1298644676/it/foto/edificio-del-municipio-al-crepuscolo-di-modena-italia.jpg?s=612x612&w=0&k=20&c=yPL14qUAVnZNnpnYsCk2iegkxEZgeUm6xV60zRMDGBI='
         className=' absolute object-cover
          w-full h-full rounded-l-full 
          lg:rounded-full lg:mr-3          
          '/>
      </div>
      <div className='relative m-10 
        bg-slate-700 bg-opacity-25
          md:bg-homeImg1 bg-cover opacity-85 lg:m-0 lg:p-10
          sm:flex sm:flex-col sm:justify-center sm:p-2 sm:pt-0 sm:text-sm 
          lg:flex lg:flex-col justify-center
          '>
          <div className='
            relative
            lg:m-0 lg:p-10
            sm:p-2 sm:m-4 sm:max-w-full sm:text-sm md:bg-white 
            m-8
            text-base 
          '>
            <h1>MODENA GO</h1>
            <p className=' text-lg'>
            Qui potrete scegliere i luoghi che più vi interessano, vederne i dettagli e seguire i percorsi per scoprire nuove cose su questa città.

            </p>
          </div>
      </div>                         
  </section>


  )
}
