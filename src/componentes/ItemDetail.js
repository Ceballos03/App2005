import './ItemDetail.css'

const ItemDetail = ({products})=>{
    console.log('SOY',products)
    return (
        <div>
            <div className="h">
                <header>
                    <h2 className='n'>
                        {products.title}
                    </h2>
                </header>

                <picture className='p'>
                    <img src={products.thumbnail} alt={products.title}/>
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
                    <p className='pid'>
                        id: {products.id}
                    </p>
                    <button>Comprar</button>
                </section>
            </div>
        </div>
    )
}

export default ItemDetail;