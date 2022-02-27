import './ItemDetail.css'

const ItemDetail = ({products})=>{
    console.log('SOY',products)


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
                    <p>
                        Precio: ${products.price}
                    </p>
                    <p>
                        Stock: {products.sold_quantity}
                    </p>
                    <p>
                        Condicion: {products.condition}
                    </p>
                    <p>
                        Categoria: {products.category}
                    </p>
                    <button>Comprar</button>
                </section>
            </div>
        </div>
    )
}

export default ItemDetail;