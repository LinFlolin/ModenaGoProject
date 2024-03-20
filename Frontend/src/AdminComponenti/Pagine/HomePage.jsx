import {React} from 'react'
import { useNavigate } from 'react-router-dom';
import {  Primosessione, Secondosessione, Terzosessione} from './home/index'

export const HomePage = ({data})=>{
  const navigate = useNavigate();

  const goToInfoPage = () => {
     navigate('/info'); 
  };
  
    return (  
      
      <div className=' relatives flex flex-col' >  
      
        <div className=' flex flex-col gap-6  text-slate-900 ' > 
          <Primosessione/>
          <Secondosessione/>
          <Terzosessione/>

        
        </div> 

        <section className='flex flex-col m-10 p-3 gap-2 items-center bg-secondaria shadow-md bg-terzo m- '>
          <h1 className='text-2xl font-semibold'>
            Luoghi da visitare 
          </h1>
          <div className='flex flex-wrap justify-evenly space-x-3 gap-3'>
              {
              data.slice(0,10).map(item=>(
                <section className='m-4 w-52 text-slate-300
                  bg-secondo shadow-md shadow-indigo-600
                  transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110  duration-150 p-4 rounded  ' 
                key={item.id}>
                  <div className='h-40 '>
                    <img src={item.Immagine} className=' rounded'/>
                  </div>
                  <div className= ' flex flex-col gap-2 justify-center'>
                    <h6 className=' object-fill '>{item.Nome}</h6>
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
      </div>
    )

  // }
  
  

 }
