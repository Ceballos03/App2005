
const ItemDetail = ({products})=>{
    console.log('SOY',products)
    return (
        <div>
             <header>
                <h2>
                    {products.title}
                </h2>
            </header>
            <picture>
                <img src={products.thumbnail} alt={products.title}/>
            </picture>
            <section>
                <p>
                    Precio: ${products.price}
                </p>
                <p>
                    Stock: {products.sold_quantity}
                </p>
                <p>
                    Condicion: {products.condition}
                </p>
                <button>Comprar</button>
            </section>
        </div>
    )
}

export default ItemDetail;