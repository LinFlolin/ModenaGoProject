import {Link,NavLink,useNavigate} from 'react-router-dom'
import React,{useState} from 'react';
import '../AdminCss/Navbar.css'  

export const Navbar = ()=>{
    const[menuOpen,setMenuOpen]= useState(true)
    const history = useNavigate();

    const closeMenu=()=>{
        setMenuOpen(false);
    }
    const navigateAndCloseMenu = (path) => {
        history.push(path);
        closeMenu();
    };
    return(
        <nav>
            <Link to="/" className='title'>ModenaGo</Link>
            <div className='menu' onClick={()=> {setMenuOpen(!menuOpen);navigateAndCloseMenu('/')}}
            >
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={!menuOpen ? "open":""}>
                <li>
                    <NavLink to="/info" onClick={() => navigateAndCloseMenu('/info')}>Info</NavLink>
                </li>
                <li>
                    <NavLink to="/map" onClick={() => navigateAndCloseMenu('/map')}>Mappa</NavLink>
                </li>                
                <li>
                    <NavLink to="/login" onClick={() => navigateAndCloseMenu('/login')}>Login</NavLink>
                </li>
                
            </ul>
        </nav>
    );
};