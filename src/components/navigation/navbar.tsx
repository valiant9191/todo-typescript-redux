import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <nav >
            <ul style={{display:'flex',justifyContent:'space-around', backgroundColor:'greenyellow'}}>
                <li><Link to='/'>Add task page</Link></li>
                <li><Link to='/List'>List of Todos</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;