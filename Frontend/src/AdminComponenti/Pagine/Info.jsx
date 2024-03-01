import { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../Pagine/PagineCss/Info.css'

export class Info extends Component{


    constructor(props){
      super(props)
      this.state = {
          post : []
        }
    }
  componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/Markers/','')
      .then(response=> {
          console.log(respose)
          this.setState({postsL : response.data})
      })
      .catch(error=>{
          console.log(error)
          this.setState({erroeMsg : 'error retreiving data'})
    })

  }
  render (){
      const { post } = this.state
  
      return(
        <div>
          {
            post.map(item => (
            <div className="parent">
               <div className="listaluoghi" key={item.id}>
                  <ul className='listaluoghiul'>
                  <li className='luoghidettaglio'>{item.Titolo}</li>
                  </ul> 
                </div>
                <div className="lineadiseparazione"> </div>
               <div className="primapartedestra">
                  <h1>{item.Titolo}</h1>
                  <img src="" alt="Immagine prova" />
                  <p>descrizione</p>
               </div>
               <div className="secondapartedestra">
                  <h2>Indirizzo</h2>
                  <p>indirizzo</p>
                  <h3>Contatti</h3>
                  <p>Telefono e Email</p>
                  </div>
            </div>
               ))
            }
             </div>
        
      )
  }
}

