import '../Pagine/PagineCss/Info.css'
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import {Link} from 'react-router-dom';
import {useState } from 'react'
export const Info  = ({data}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
     setSelectedItem(item);
  };
  
  return(
    <div className="parent">
      <div className="listaluoghi">
        {/*barra input che dovrebbe aiutare a far cercare un
          luogo specifico. Vorrei che l'input comparisse come compare
          in Genshindle, che suppofngo usi una elastic search*/}
        <div className='searchbarluoghi'>
        <input type="search" id="luoghi-search" name="q" placeholder='Cosa scoprirai di Modena oggi?'/>
        <button className='iconaricerca'>
          <CIcon icon={cilSearch} size="lg" className='iconacore' /></button>
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
      </ul> 
        {selectedItem && (
        <div>
          {/* Render the details of the selected item here */}
          <h2>{selectedItem.Nome}</h2>
        </div>
      )}

      {/* </div>
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
        </div> */}
      </div> 
      
</div> 
  )
}


