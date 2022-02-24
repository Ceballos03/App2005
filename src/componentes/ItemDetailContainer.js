import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ()=> {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=games/')
            .then(response => {
                return response.json()
            }).then(res=> {
                setProducts(res.results[1])
            })
    }, [])

    console.log("ACA:", products)

    return(
        <div className="ItemDetailContainer">
           <ItemDetail products={products} />
        </div>
    )
}

export default ItemDetailContainer;







/*
const ItemDetailContainer = ({ id }) => {
    const [product, setProducts] = useState()

    useEffect(() => {
        getProducts(id).then(time => {
            setProducts(time)
        }).catch(err => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })

    }, [])

    
    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product} />
        </div>
    )
}*/