import React from 'react'

export const Thirdsec = () => {
  return (
    <section className=' flex flex-row-reverse h-60 justify-evenly gap-3
    lg:
    '>
      <div className=' relative w-9/12 ml 
          md:hidden
          lg:object-cover             
          '>
        <img src='https://media.istockphoto.com/id/1362373123/it/foto/veduta-di-modena-in-italia.jpg?s=612x612&w=is&k=20&c=51hYfvNDZhudf1_Bjrc0nae5OCQHn9gnSWF44UUTetg='
         className=' absolute object-cover
          w-full h-full rounded-l-full 
          lg:rounded-full lg:mr-3          
          '/>
      </div>
      <div className='bg-gray-400 m-10 pt-5
          md:bg-homeImg1 bg-cover opacity-85 lg:m-0 lg:p-10
          sm:flex sm:flex-col sm:justify-center sm:p-2 sm:pt-0 sm:text-sm 
          lg:flex lg:flex-col justify-center
          '>
          <div className='bg-blend-luminosity bg-white 
            lg:m-0 lg:p-10
            sm:p-0 sm:max-w-full
            '>
          <h1>Obiettivo del sito</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus recusandae eligendi eos, inventore accusantium expedita numquam explicabo assumenda illum. Voluptas cum perspiciatis animi et, illum sunt vero expedita atque!</p>
       </div>
      </div>                         
  </section>
  )
}
