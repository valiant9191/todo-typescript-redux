import { useState } from 'react'
import {Link} from 'react-router-dom'
import { store } from '../../store/store'
import './navbar.scss'

const Navbar = () => {
    const [number,setNumber] = useState(store.getState().todo.length)

    store.subscribe(()=>setNumber(store.getState().todo.length))

    return (
        <nav className='navbar-wrapper' >
            <ul >
                <Link className='navbar-link'  to='/'><div>Add task page</div></Link>
                <Link className='navbar-link' to='/List'><div>List of Tasks to be done<br /> { !!number && `tasks: ${number}` } </div></Link>
            </ul>
        </nav>
    )
}

export default Navbar;