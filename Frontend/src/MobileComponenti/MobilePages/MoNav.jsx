import {Link,NavLink,} from 'react-router-dom'
import React,{useState} from 'react';
import '../MoCss/MoNav.css'

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
                    <NavLink to="/">Home</NavLink>
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
