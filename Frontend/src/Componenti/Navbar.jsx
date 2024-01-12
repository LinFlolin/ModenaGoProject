import {Link,NavLink, createRoutesFromElements} from 'react-router-dom'
import React,{useState} from 'react';
import './Navbar.css'
export const Navbar = ()=>{
    const[menuOpen,setMenuOpen]= useState(false)
    return(
        <nav>
            <Link to="/home" className='title'>Website</Link>
            <div className='menu' onClick={()=> {setMenuOpen(!menuOpen);}}
            >
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={menuOpen ? "open":""}>
                <li>
                    <NavLink to="/info">Info</NavLink>
                </li>
                <li>
                    <NavLink to="/sfide">Sfide</NavLink>
                </li>
                <li>
                    <NavLink to="/luoghi">Luoghi</NavLink>
                </li>
            </ul>
        </nav>
    );
};