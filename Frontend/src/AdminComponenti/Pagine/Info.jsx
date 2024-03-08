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
        <div className="parent">
          <div className="listaluoghi">
            <ul className='dettaglioluoghi'>
            <li>modena</li>
            <li>modena</li>
            <li>modena</li>
            <li>modena</li>
            <li>modena</li>  
            </ul>  
          </div>
          <div className="contenitoreimmagine">
            <h1>Titolo luogo</h1>
            <img src="#" alt="ziopera" />
          </div>
          <div className="descrizioneluoghi">
            <h2>Descrizione</h2>
            <p>Descne descescriozone</p>
          </div>
          
          <div className="div4">
            <h3>Contatti</h3>  
          </div>
          <div className="div5">
          <h4>Contatt 5</h4>   
           </div>
</div> 
      )
  }
}

