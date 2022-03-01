import './ItemDetail.css';
import '../componentes/FunctionCounter/FunctionCounter';
import FunctionCounter from '../componentes/FunctionCounter/FunctionCounter';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const ItemDetail = ({products})=>{
    //console.log('SOY',products)

    const [qty, setQty] = useState(0);

    const onAdd = (cantidad) => {
        setQty(cantidad);
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