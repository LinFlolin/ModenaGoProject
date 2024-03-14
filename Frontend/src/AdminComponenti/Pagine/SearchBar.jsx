import React from 'react';
import { Component } from 'react'
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import '../Pagine/PagineCss/Searchbar.css'

export class SearchBar extends Component {
    render(){
        return(
            <div className='searchbarluoghi'>
            <input type="search" id="luoghi-search" name="q" placeholder='Cosa scoprirai di Modena oggi?'/>
            <button className='iconaricerca'>
              <CIcon icon={cilSearch} size="lg" className='iconacore' /></button>
            </div>
        )
    }
}