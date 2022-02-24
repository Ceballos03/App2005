import { useEffect, useState } from "react";
import ItemList from "./ItemList"

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])


    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=games')
            .then(response => {
                return response.json()
            }).then(res=> {
                setProducts(res.results.slice(0,3))
            })
    }, [])


    //console.log('HOY',products)
    
    return(
        <div className="ItemListContainer">
            
            <ItemList products={products}/>
            
        </div>
    )
}

export default ItemListContainer;

