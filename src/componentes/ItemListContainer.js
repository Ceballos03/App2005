import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"; 
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from "./firebase";


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'products')


        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
            console.log(doc)
            return { id: doc.id, ...doc.data()}
            })
            console.log(products)
            setProducts(products)
        })

        return (()=>{
            setProducts()
            console.log('SOY PRODUCTS', setProducts)
        })
    },[categoryId])


    return(
        <div className="ItemListContainer">
            <ItemList products={products} />
        </div>
    )
    
}

export default ItemListContainer;


/* 

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
*/