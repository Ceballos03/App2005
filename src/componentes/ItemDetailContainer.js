import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({greeting = "Detalle"})=> {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=games')
            .then(response => {
                return response.json()
            }).then(res=> {
                setProducts(res.results[0])
            })
    }, [])

    console.log("ACA:", products)


    return(
        <div>
            <h1>{greeting}</h1>
           <ItemDetail products={products} />
        </div>
    )
}

export default ItemDetailContainer;