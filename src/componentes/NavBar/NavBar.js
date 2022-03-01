import './NavBar.css'
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getCategories } from '../asyncmock';

const Navbar = () => {
    const [categories, setCategories] = useState([])
    console.log("aa",categories)

    useEffect(() => {
        getCategories().then(categories =>{
            setCategories(categories)
        })
    }, [])

    return(
        <nav>
            <div className='Brand'>
                <Link to={'/'}>
                    <p className='Titulo'>GAMES-SHOPE</p>
                </Link>
                <CartWidget />
            </div>

            <div className='Menu'>
                {categories.map(cat => 
                <NavLink key={cat.id} to={`/category/${cat.id}`} className='Accion'>
                    {cat.description}
                </NavLink>)}                    
            </div>
        </nav>
    );
}

export default Navbar;




/*{<NavLink className='Accion' to={'/category/consola'}>
        Consolas
    </NavLink>
                
    <NavLink className='Aventura' to={'/category/juego'}>
        Videojuegos
    </NavLink>} */