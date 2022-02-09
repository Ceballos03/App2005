import './NavBar.css'
import CartWidget from '../CartWidget';

const Navbar = () => {
    return(
        //desarrolla el navbar
        <nav>
            <div className='Brand'>
                <p className='Titulo'>GAMES-SHOPE</p>
                <CartWidget />
            </div>
            
            <div className='Menu'>
                <button className='Accion'>Accion</button>
                <button className='Aventura'>Aventura</button>
                <button className='Terror'>Terror</button>
                <button className='Carreras'>Carreras</button>
            </div>
        </nav>
    );
}

export default Navbar;





