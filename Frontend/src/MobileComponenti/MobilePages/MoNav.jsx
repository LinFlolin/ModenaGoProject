import {Link,NavLink,} from 'react-router-dom'
import React,{useState} from 'react';

export const MoNav = () => {
    const[menuOpen,setMenuOpen]= useState(false)
    return(
        <nav>
            <div className='menu' onClick={()=> {setMenuOpen(!menuOpen);}}
            >
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={menuOpen ? "open":""}>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>                
                <li>
                    <NavLink to="/map">Map</NavLink>
                </li>
                <li>
                    <NavLink to="/Info">Info</NavLink>
                </li>                
            </ul>
        </nav>
    )
}
