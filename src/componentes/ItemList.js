import Item from "./Item"

export default function ItemList ({products}){
    
    return(
        <div>
            <ul>
                {products.map(product =>
                    <Item key={product.id} product={product} />
                    )}
            </ul>
        </div>
    )
}

