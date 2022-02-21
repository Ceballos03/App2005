import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting = "Hola"})=> {
    const [products, setProducts] = useState([])


    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=games')
            .then(response => {
                return response.json()
            }).then(res=> {
                setProducts(res.results)
            })
    }, [])


   // console.log(products)
    
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;

