import { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../Pagine/PagineCss/Info.css'

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
            <div className='primocontenitore'>
               <div className="primaparte">
               <ul className='elencoluoghi'>
                  <li className='elementoluoghi'>Elemento 1</li>
               </ul>                   
              </div>
               <div className='secondaparte'>
              <img src="" alt="Immagine prova" />
              <p>descrizione</p>
              </div>
            </div>
        </div>
      )
  }
}

