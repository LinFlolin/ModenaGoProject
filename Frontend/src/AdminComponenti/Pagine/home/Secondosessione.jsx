import React from 'react'

export const Secondosessione = () => {
  return (
    <section className=' flex flex-row h-60 justify-evenly gap-3
    lg:
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
          bg-slate-700 bg-opacity-25
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
            <h1>Obiettivo del sito</h1>
            <p className=' text-orange-20'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus recusandae eligendi eos, inventore accusantium expedita numquam explicabo assumenda illum. Voluptas cum perspiciatis animi et, illum sunt vero expedita atque!
             </p>
          </div>
      </div>                         
  </section>


  )
}
