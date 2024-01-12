import {Link,NavLink} from 'react-router-dom'
import './Navbar.css'
export const Navbar = ()=>{
    return(
        <nav>
            <Link to="/home" className='title'>Website</Link>
                <ul>
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