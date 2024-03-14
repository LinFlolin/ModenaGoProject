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
  
      <div className=' '>
        
            <section className='flex flex-col m-10 p-3 gap-2 items-center  '>
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
              <div className='flex flex-wrap justify-evenly space-x-3 gap-4 pb-3 m-4'>
                 {
                  post.map(item=>(
                    <section className='m-4 w-52  bg-orange-50 shadow-md shadow-indigo-500/40 transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-b from-orange-200 to-orange-100 duration-150 ' 
                    key={item.id}>
                      <div className='h-40 hover:'>
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
  
