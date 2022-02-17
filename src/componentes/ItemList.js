import getProduct from "./Item";
import { useEffect, useState } from "react"


export default function ItemList (){
    
    const [products, setProducts] = useState([])


    useEffect(() =>{
        getProduct().then(products => {
            console.log(products)
            setProducts(products)
        })
    }, [])

    console.log(products)

    return(
        <div>
           
            <ul>
                {products.map(product =>{
                    return <li key={product.id}>{product.name}</li>
                })}
            </ul>
        </div>
    )
}