import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Cart = ({data}) => {
    const navigate = useNavigate();

    const goToInfoPage = () => {
       navigate('/info'); 

  return (
    <section className='flex flex-col m-10 p-3 gap-2 items-center bg-secondaria shadow-md bg-terzo'>
    <h1 className='text-2xl font-semibold'>
      Luoghi da visitare 
    </h1>
    <div className='flex flex-wrap justify-evenly space-x-3 gap-3'>
       {
        data.map(item=>(
          <section className='m-4 w-52
           bg-secondo shadow-md shadow-indigo-600
            transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110  duration-150 p-4 rounded  ' 
          key={item.id}>
            <div className='h-40 '>
              <img src={item.Immagine} className=' rounded'/>
            </div>
            <div className='box '>
              <h6 className=' object-fill '>{item.Nome}</h6>
              <p className=''>Detagli del luogo</p>
              <button type='button' 
                className=' bg-primaria hover:bg-gradient-to-b from-slate-900 to-slate-600
               text-terzo text-lg'
               onClick={goToInfoPage}>
               
                info
              </button>
            </div>
           
          </section>
        ))
       }
    </div>
  </section>             
  )
}
}
