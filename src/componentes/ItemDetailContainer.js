import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProduct } from "./asyncmock";
import { useParams } from "react-router-dom";


const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const { productId } = useParams()
    console.log("h", productId)

    useEffect(() => {
        getProduct(productId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts()
            console.log('jol' ,setProducts)
        })
    }, [productId])


    return(
        <div className="ItemListContainer">
            <ItemDetail products={products}/>
        </div> 
    )
} 

export default ItemDetailContainer;


/*const ItemDetailContainer = ({id})=> {
    const [products, setProducts] = useState([])


    useEffect(() =>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=games/')
            .then(response => {
                return response.json()
            }).then(res=> {
                setProducts(res.results.params)
            })
    }, [id])

    console.log("ACA:", products)

    return(
        <div className="ItemDetailContainer">
           <ItemDetail products={products.params.id} />
        </div>
    )
}*/


/*const ItemDetailContainer = ({ id }) => {
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