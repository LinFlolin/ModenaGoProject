import React, { useState,useEffect } from 'react';
import '../Pagine/PagineCss/Info.css';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';

export const Info  = ({data}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState(data);

  const handleItemClick = (item) => {
     setSelectedItem(item);
  };
  
 const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
    let filteredData = data.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredResults(filteredData);
  };
  useEffect(() => {
  if (searchInput === '') {
    setFilteredResults(data);
  }
  }, [searchInput, data]);

    return(
      <div className="parent mt-14 ">
        <div className="sezcol">
          <div className='searchbarluoghi'>
            <input
              className=' mt-14 '
              type="search"
              id="luoghi-search"
              name="q"
              placeholder='Cosa scoprirai di Modena oggi?'
              onChange={handleSearchChange}
            />
            {/* <button className='iconaricerca'>
              <CIcon icon={cilSearch} size="xs" className='iconacore' />
            </button> */}
          </div>            

          <ul className='dettaglioluoghi'>
            {
              filteredResults.map(item => (
                <li key={item.id} onClick={() => handleItemClick(item)}>
                  <p className='text-slate-200'>
                  {item.Nome}
                  </p>
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
                  <img
                    className=' max-h-64' 
                    src={selectedItem.Immagine}/>
                  <p>{selectedItem.Descrizione}</p>
                </div>
              )}
          </div>
        </div>
    </div> 
    )
            
}


