import { Link } from 'react-router-dom'
import './Item.css'

export  default function Item ({product}){
    return (
        <div className="d">
            <div>
                <header>
                    <h2 className='titulo'>
                        {product.name}
                    </h2>
                </header>

                <picture>
                    <img className='imagen' src={product.img} alt={product.name}/>
                </picture>

                <section className='cuerpo'>
                    <p>
                        Precio: ${product.price}
                    </p>
                </section>

                <footer>
                        <Link to={`/detail/${product.id}`}>Ver detalle</Link>
                </footer>
            </div>
        </div>
    )
}