import { Component } from 'react'
import axios from 'axios'
import '../AdminCss/Info.css'

export class Info extends Component{

    constructor(props){
      super(props)
      this.state = {
          postsL : []
        }
    }
  componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/LuoghiAtrazioni/','')
      .then(response=> {
          console.log(response)
          this.setState({postsL : response.data})
      })
      .catch(error=>{
          console.log(error)
          this.setState({erroeMsg : 'error retreiving data'})
    })

  }
  render (){
      const { postsL } = this.state
      return(
        <div>
          {
            <div className='contenitoregrosso'>
                {postsL.map(item =>(
                    <div className="container" key={item.id}>
                        <h1>{item.Titolo}</h1>         
                        <p>{item.Descrizione}</p>
                        <h2>Sfida:</h2>
                        <p>{item.Sfida}</p>  
                        <img src={item.immagine}/>                   
                    </div>             
                ))}
            </div>
          }
        </div>
      )
  }
}

