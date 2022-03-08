import './ItemDetail.css';
import '../componentes/FunctionCounter/FunctionCounter';
import FunctionCounter from '../componentes/FunctionCounter/FunctionCounter';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';
import { useNotificationServices } from './NotificationServices';

const ItemDetail = ({products})=>{
    //console.log('SOY',products)

    const [qty, setQty] = useState(0);
    const {addToCart} = useContext(CartContext)

    const setNotification = useNotificationServices()

    const onAdd = (cantidad) => {
        setQty(cantidad);
        addToCart(products, cantidad)
        setNotification('success', `Se agrego ${products.name} al carrito`)
    };


    return (
        <div>
            <div className="h">
                <header>
                    <h2 className='n'>
                        {products.name}
                    </h2>
                </header>

                <picture>
                    <img className='pictur' src={products.img} alt={products.name}/>
                </picture>

                <section className='s'>
                    <p>Precio: ${products.price}</p>
                    <p>Stock: {products.sold_quantity}</p>
                    <p>Condicion: {products.condition}</p>
                    <p>Categoria: {products.category}</p>
                    <section>
                        {
                            qty === 0 ? (
                                <FunctionCounter stock={products.sold_quantity} onAdd={onAdd} />
                            ) : (
                                <>
                                    <Link to="/cart">
                                        Ir al carrito
                                    </Link>
                                </>
                            )
                        }
                    </section>
                </section>
            </div>
        </div>
    )
}

export default ItemDetail;