import { useState } from 'react'
import axios from 'axios'
import '../Pagine/PagineCss/Info.css'
import { SearchBar } from './SearchBar';
import { NavbarInfo } from './NavbarInfo';

export const Info = () => {

  const [input, setInput] = useState("");

    const fetchData = (value) => (
        pass 
        /*QUI METTERE RIFERIMENTO ALL'API DEL BACKEND
        STESS LAOVRO CHE VA FATTO NELLA LISTA
    TODO */
    );


    /*Ho commentato questa roba senza cancellarla perché non so se potrebbe servire a qualcosa */
    /*constructor(props){
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

  }*/
    return(
        <div className="parent">
          <div className="sezcol">
            {/*barra input che dovrebbe aiutare a far cercare un
             luogo specifico. Vorrei che l'input comparisse come compare
             in Genshindle, che suppongo usi una elastic search*/}
            <div className='searchbarluoghi'>
              <SearchBar></SearchBar>
            </div>
            <NavbarInfo></NavbarInfo>
          </div>
          <div className="titolo">
            <div>
            <h1>Ghirlandina</h1>
            </div>
          </div>
          <div className="descrizioneluoghi">
            <div>
              <img src="" alt="ciao" />
              <h2>Descrizione</h2>
              <p>Descne descescriozone</p>
            </div>
          </div>
          
          <div className="contattiluoghi">
            <div>
            <h3>Contatti</h3>
            <p>placeholder per i contatti</p>
               <h4>Orari di apertura</h4>
               <p>?</p>
            </div>
          </div>
          
</div> 
      )
  
}

