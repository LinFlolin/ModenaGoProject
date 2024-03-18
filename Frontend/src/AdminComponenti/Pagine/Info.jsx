import { useState } from 'react'
import '../Pagine/PagineCss/Info.css'
import { SearchBar } from './SearchBar';
import { Link} from 'react-router-dom'

export const Info  = ({data}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
     setSelectedItem(item);
  };

    return(

        <div className="parent">
          <div className="sezcol">
            {/*barra input che dovrebbe aiutare a far cercare un
             luogo specifico. Vorrei che l'input comparisse come compare
             in Genshindle, che suppongo usi una elastic search*/}
            <div className='searchbarluoghi'>
            <SearchBar></SearchBar>
            </div>
            <ul className='dettaglioluoghi'>
            {
              data.map(item => (
                <li key={item.id} onClick={() => handleItemClick(item)}>
                    <p> {item.Nome} </p>

                </li>
              ))
            }
            </ul> 
          </div>
          <div className="titolo">
            <div onClick={() => handleItemClick(item)} >
            {selectedItem && (
                  <div>
                    <h2>{selectedItem.Nome}</h2>
                  </div>
                )}
            </div>
          </div>
          <div className="descrizioneluoghi">
            <div onClick={() => handleItemClick(item)} >
              {selectedItem && (
                <div>
                  <h2>Descrizione</h2>
                  <p>{selectedItem.Descrizione}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="contattiluoghi">
            <div className='flexcontatti'>
            <h3>Contatti</h3>
            <p>placeholder per i contatti</p>
            </div>
            <div className='flexcontatti'>
            <h4>Orari di apertura</h4>
              <p>?</p>
            </div>
          </div> 
          
 
          
          
      </div> 
      )
             
}


