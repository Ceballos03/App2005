import Carrito from '../imagenes/carrito.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <Link to={'/cart'} className="CartWidget">
            <img src={Carrito} alt="logo" width="100px" height ="100px"/>
                {getQuantity()}
        </Link>
    );
}

export default CartWidget;