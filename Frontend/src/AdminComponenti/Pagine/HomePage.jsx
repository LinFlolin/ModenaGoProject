import {React,Component} from 'react'
import axios from 'axios'
import'../AdminCss/HomePage.css'
export class HomePage extends Component{
  constructor(props){
    super(props)
    this.state = {
        post : []
    }
 }

 componentDidMount(){
  axios.get('http://127.0.0.1:8000/api/Marker/')
  .then(response=> {
      console.log(response)
      this.setState({post : response.data})
  })
  .catch(error=>{
      console.log(error)
      this.setState({erroeMsg : 'error retreiving data'})
  })

}
  render(){
    const { post } = this.state
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

          <section className=' flex flex-row h-60 justify-evenly mt-1 bg-red-400 '>
              <div className='w-9/12 mr-8'>
                <img className='w-full h-full rounded-r-full '
                  src='https://media.istockphoto.com/id/1362373123/it/foto/veduta-di-modena-in-italia.jpg?s=612x612&w=is&k=20&c=51hYfvNDZhudf1_Bjrc0nae5OCQHn9gnSWF44UUTetg='/>
              </div>
              <div className=' bg-gray-400 m-10 pt-5'>
                <h1>Obiettivo del sito</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus recusandae eligendi eos, inventore accusantium expedita numquam explicabo assumenda illum. Voluptas cum perspiciatis animi et, illum sunt vero expedita atque!</p>
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
            <section className='flex flex-col m-10 p-3 gap-2 items-center bg-secondaria shadow-md'>
              <h1 className='text-2xl font-semibold'>
                Luoghi da visitare 
              </h1>
              <div className='flex flex-wrap justify-evenly space-x-3 gap-3'>
                 {
                  post.map(item=>(
                    <section className='m-4 w-52 bg-orange-50 shadow-md shadow-indigo-500/40 transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-b from-orange-200 to-orange-100 duration-150 p-4 rounded  ' 
                    key={item.id}>
                      <div className='h-40 '>
                        <img src={item.Immagine} className=' rounded'/>
                      </div>
                      <div className='box '>
                        <h6 className=' object-fill '>{item.Nome}</h6>
                        <p className=''>Detagli del luogo</p>
                        <button type='button' className=' bg-gradient2 text-white'>info</button>
                      </div>
                     
                    </section>
                  ))
                 }
              </div>
            </section>             
      </div>
    )

  }
  
  

  }
  
