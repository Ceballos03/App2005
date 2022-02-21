
const Item = ({product})=>{
    return (
        <div>
            <header>
                <h2>
                    {product.title}
                </h2>
            </header>
            <picture>
                <img src={product.thumbnail} alt={product.title}/>
            </picture>
            <section>
                <p>
                    Precio: ${product.price}
                </p>
            </section>
        </div>
    )
}

export default Item