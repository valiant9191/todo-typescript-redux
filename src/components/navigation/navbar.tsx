import {Link} from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {

    return (
        <nav className='navbar-wrapper' >
            <ul >
                <Link className='navbar-link'  to='/'><div>Add task page</div></Link>
                <Link className='navbar-link' to='/List'><div>List of Todos</div></Link>
            </ul>
        </nav>
    )
}

export default Navbar;