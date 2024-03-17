import { useState } from 'react'
import '../Pagine/PagineCss/Info.css'
import { SearchBar } from './SearchBar';
import { NavbarInfo } from './NavbarInfo';

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

            </div>
                
            <ul className='dettaglioluoghi'>
            {
              data.map(item => (
                <li key={item.id} onClick={() => handleItemClick(item)}>
                  <Link to={`/link/${item.id}`} className='text-slate-200'>
                    {item.Nome}
                  </Link>
                </li>
              ))
            }
             {selectedItem && (
              <div>
                {/* Render the details of the selected item here */}
                <h2>{selectedItem.Nome}</h2>
              </div>
            )}
          </ul> 
          </div>
          <div className="titolo">
            <div>
            <h1>Ghirlandina</h1>
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
               <h4>Orari di apertura</h4>
               <p>?</p>
            </div>
          </div>
          
      </div> 
      )
             
}


