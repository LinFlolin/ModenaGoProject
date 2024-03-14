import { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../Pagine/PagineCss/Info.css'
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { SearchBar } from './SearchBar';
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
            {/*barra input che dovrebbe aiutare a far cercare un
             luogo specifico. Vorrei che l'input comparisse come compare
             in Genshindle, che suppongo usi una elastic search*/}
            <div className='searchbarluoghi'><SearchBar></SearchBar></div>
            
            <ul className='dettaglioluoghi'>
            <li>modena</li>
            <li>modena</li>
            <li>modena</li>
            <li>modena</li> 
            </ul>  
          </div>
          <div className="contenitoreimmagine">
            <div>
            <h1>Titolo luogo</h1>
            <img src="src/assets/modenacalcio.png" alt="1ziopera" />
            </div>
          </div>
          <div className="descrizioneluoghi">
            <div>
              <h2>Descrizione</h2>
              <p>Descne descescriozone</p>
            </div>
          </div>
          
          <div className="contattiluoghi">
            <div>
            <h3>Contatti</h3>
            <p>placeholder per i contatti</p>
            </div>
          </div>

          <div className="oraridiapertura">
            <div>
               <h4>Orari di apertura</h4>
               <p>?</p>
            </div>
          </div> 
          
</div> 
      )
  }
}

