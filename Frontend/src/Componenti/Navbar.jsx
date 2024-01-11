import {Link} from 'react-router-dom'
export const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <Link to="/home">Website</Link>
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