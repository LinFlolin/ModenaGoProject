import React, {useState} from 'react';
import { Component } from 'react';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import '../Pagine/PagineCss/Searchbar.css'

export const SearchBar = ({data}) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState(data);
    
        return(
            <div className='searchbarluoghi'>
            <input 
            type="search" 
            id="luoghi-search" 
            name="q" 
            placeholder='Cosa scoprirai di Modena oggi?' 
            value={input} 
            onChange={(e) => setInput(e.target.value)}/>
            <button className='iconaricerca'>
              <CIcon icon={cilSearch} size="lg" className='iconacore' /></button>
            </div>
        )
    }
