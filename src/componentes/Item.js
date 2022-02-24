import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product})=>{
    return (
        <div className="d">
            <div>
                <header>
                    <h2 className='titulo'>
                        {product.title}
                    </h2>
                </header>

                <picture>
                    <img className='imagen' src={product.thumbnail} alt={product.title}/>
                </picture>

                <section className='cuerpo'>
                    <p>
                        Precio: ${product.price}
                    </p>
                </section>

                <footer>
                    <Link to={'/detail'}>
                    <button className='Option'>Ver Detalle</button>
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default Item