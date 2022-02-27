import { useEffect, useState } from "react";
import ItemList from "./ItemList"; 
import { getProducts } from "./asyncmock";

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])

    useEffect ((categoryId)=>{
        
        getProducts().then(products=>{
            setProducts(products)
        })
    },[])

    console.log('HOY',products)
    
    return(
        <div className="ItemListContainer">
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;



/*const ItemListContainer =() => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            console.log(products)
            setProducts(products)
        })
    }, [])


    console.log(products)

    return(
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )
} 

import { getProducts } from "./asyncmock"*/