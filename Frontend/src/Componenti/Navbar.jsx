import {Link} from 'react-router-dom'
import './Navbar.css'
export const Navbar = ()=>{
    return(
        <nav>
            <Link to="/home" className='title'>Website</Link>
            <ul>
                <li>
                    <Link to="/info">Info</Link>
                </li>
                <li>
                    <Link to="/sfide">Sfide</Link>
                </li>
                <li>
                    <Link to="/luoghi">Luoghi</Link>
                </li>
            </ul>
        </nav>
    );
};