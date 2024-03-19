import {React,Component} from 'react'
import { useNavigate } from 'react-router-dom';


export const HomePage = ({data})=>{
  const navigate = useNavigate();

  const goToInfoPage = () => {
     navigate('/info'); 
  };
  
    return (  
      
      <div className=' relatives flex flex-col' >  
      
        <div className=' flex flex-col gap-6 ' > 

          <section className=' flex flex-row-reverse h-60 justify-evenly gap-3
            lg:
            '>
              <div className=' relative w-9/12 ml 
                  md:hidden
                  lg:object-cover             
                  '>
                <img src='https://media.istockphoto.com/id/1298644676/it/foto/edificio-del-municipio-al-crepuscolo-di-modena-italia.jpg?s=612x612&w=0&k=20&c=yPL14qUAVnZNnpnYsCk2iegkxEZgeUm6xV60zRMDGBI='
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

          <section className=' flex flex-row h-60 justify-evenly mt-1  '>
              <div className='w-9/12 mr-8'>
                <img className='w-full h-full rounded-r-full '
                  src='https://media.istockphoto.com/id/643365230/it/foto/modena-piazza-grande-duomo-e-torre-ghirlandina.jpg?s=612x612&w=0&k=20&c=NyRFLidfqeJx_zi0GgE7XIGVb4YqoCXrjmzvuaKseLA='/>
              </div>
              <div className=' bg-gray-400 m-10 pt-5'>
                <h1>Obiettivo del sito</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus recusandae eligendi eos, inventore accusantium expedita numquam explicabo assumenda illum. Voluptas cum perspiciatis animi et, illum sunt vero expedita atque!</p>
              </div>                         
          </section>   <section className=' flex flex-row-reverse h-60 justify-evenly gap-3
            lg:
            '>
              <div className=' relative w-9/12 ml 
                  md:hidden
                  lg:object-cover             
                  '>
                <img src='https://blog.vantagecircle.com/content/images/2023/07/Featured-Image-Light-1.png'
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


        
        </div> 

        <section className='flex flex-col m-10 p-3 gap-2 items-center '>
          <h3 className='text-2xl font-semibold'>
            Obbiettivo del Sito
            </h3>
          <p className='text-pretty '>
          Il progetto prevede la realizzazione di un’applicazione web per la valorizzazione del patrimonio culturale e artistico del territorio del comune di Modena. L’applicazione web mira a valorizzare il patrimonio culturale e artistico offrendo all’utente la possibilità di seguire dei percorsi costituiti da punti di interesse all’interno del territorio del comune di Modena.
          </p>
        </section>



        <section className='flex flex-col m-10 p-3 gap-2 items-center bg-secondaria shadow-md bg-terzo m- '>
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
                    
      </div>
    )

  // }
  
  

 }
  
