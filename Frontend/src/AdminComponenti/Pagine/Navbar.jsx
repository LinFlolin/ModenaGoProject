import {Link,NavLink,} from 'react-router-dom'
import React,{useState} from 'react';
import '../AdminCss/Navbar.css'

export const Navbar = ()=>{
    const[menuOpen,setMenuOpen]= useState(false)
    return(
        <nav>
            <Link to="/" className='title'>ModenaGo</Link>
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
                    <NavLink to="/map">Mappa</NavLink>
                </li>                
                <li>
                    <NavLink to="/luoghi">Luoghi</NavLink>
                </li>
                <li>
                    <NavLink to="/sfide">Sfide</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                
            </ul>
        </nav>
    );
};