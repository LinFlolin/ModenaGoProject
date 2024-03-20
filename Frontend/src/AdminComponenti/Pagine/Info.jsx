import React, { useState,useEffect } from 'react';
import '../Pagine/PagineCss/Info.css';


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
      <div className="parent ">
        <div className="sezcol">
          <div className='searchbarluoghi p-10 pb-0'>
            <input
              className=' h-10 text-center'
              type="search"
              id="luoghi-search"
              name="q"
              placeholder='Cosa scoprirai di Modena oggi?'
              onChange={handleSearchChange}
            />
          </div>            

          <ul className='dettaglioluoghi'>
            {
              filteredResults.map(item => (
                <li className='' 
                  key={item.id} onClick={() => handleItemClick(item)}>
                  <p className=' text-secondo text-lg'>
                  {item.Nome}
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
        
      <div className="titolo  ">
          <div onClick={() => handleItemClick(item)} >
          {selectedItem && (
                <div className=' flex gap-5 bg-secondo p-11 text-gray-100 rounded-md m-9 '>
                  <h2>{selectedItem.Nome}</h2>
                  <img
                    className='max-h-64' 
                    src={selectedItem.Immagine}/>
                  <p className=' text-lg '
                  >{selectedItem.Descrizione}</p>
                </div>
              )}
          </div>
        </div>
    </div> 
    )
            
}


