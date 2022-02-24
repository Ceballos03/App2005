import Item from "./Item"
import './ItemList.css'

export default function ItemList ({products}){
    
    return(
        <div >
            <ul className='di'>
                {products.map(product =>
                    <Item key={product.id} product={product}/>
                    )}
            </ul>
        </div>
    )
}