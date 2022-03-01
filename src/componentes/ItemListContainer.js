import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"; 
import { getProducts } from "./asyncmock";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        getProducts(idCategory).then(item => {
            setProducts(item)
        }).catch(err => {
            console.log(err)
        })

        return (()=>{
            setProducts()
            console.log('SOY PRODUCTS', setProducts)
        })
    },[idCategory])
    
    
    return(
        <div className="ItemListContainer">
            <ItemList products={products} />
        </div>
    )
    
}

export default ItemListContainer;


    //console.log('san', idCategory)
    //console.log('bia', setProducts) 

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

/* useEffect (()=>{
        getProducts().then(products=>{
            setProducts(products)
        })
    },[]) */