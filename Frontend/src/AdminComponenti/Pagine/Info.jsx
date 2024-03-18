import React, { useState,useEffect } from 'react';
import '../Pagine/PagineCss/Info.css';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { Link } from 'react-router-dom';

export const Info = ({ data }) => {
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

 return (
    <div className="parent">
      <div className="listaluoghi">
        <div className='searchbarluoghi'>     
          <input
            type="search"
            id="luoghi-search"
            name="q"
            placeholder='Cosa scoprirai di Modena oggi?'
            onChange={handleSearchChange}
          />
          <button className='iconaricerca'>
            <CIcon icon={cilSearch} size="lg" className='iconacore' />
          </button>
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
        
        <div className="descrizioneluoghi">
          {selectedItem && (
            <div>
              <h2>{selectedItem.Nome}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
 );
};
