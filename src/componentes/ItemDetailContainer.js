import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "./firebase";


const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const { productId } = useParams()
    console.log("h", productId)

    useEffect(() => {
        
        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            setProducts(product)
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