import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cart, removeItem, getTotal } = useContext(CartContext);
    
    
    console.log('hoi',removeItem, cart, getTotal)
    if(cart.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }
    return(
        <>
            <h1>Tu Carrito:</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h3>{prod.name}</h3>
                            <h3>Cantidad: {prod.cantidad}</h3>
                            <button onClick={() => removeItem(prod.id)}>X</button>

                            <div>
                                <h3>Precio Total: {() => getTotal()}</h3>
                            </div>
                        </div>
                    )
            })}
        </>
    )
}
export default Cart;





/* 
    import React, { useContext, useState } from "react";
    import CartContext from "./CartContext";
    import { writeBatch, getDoc, doc, addDoc, collection } from "firebase/firestore";
    import { firestoreDb } from './firebase';
    import { useNotificationServices } from './services/notification/useNotificationServices'; 
*/


/* 
    const [setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })
    const { cart, removeItem } = useContext(CartContext);
    console.log('hoi',removeItem)

    const setNotification = useNotificationServices()

    const objOrder = {
        buyer: {
            name: 'Sebastian',
            phone: '126323239',
            address: 'Mi direccion 231'
        },
        //items: products,
        //total: getTotal(),
        date: new Date()
    }

    const batch = writeBatch(firestoreDb)
    const outOfStock = []

    objOrder.items.forEach(prod => {
        getDoc(doc(firestoreDb, 'products'))
            .then(response.data().stock >= prod.quantity) 
                .then(response =>{
                    if(batch.update(doc(firestoreDb, 'products', response.id))){
                        response.stock; response.data().stock - prod.quantity
                    } else {
                        outOfStock.push({id: response.id, ...response.data()})
                    }
                })
            }


            ,then(response => {
                if(outOfStock.length === 0).then(response => {
                    (collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                        batch.commit().then(() => {
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    }).catch(error => {
                        setNotification('error', error)
                    }).finally(() => {
                        setProcessingOrder(false)
                    })
                } else {
                    outOfStock.push({ id: response.id, ...response.data()})
                }
            )}
        ) */


/*         ,then(outOfStock.length === 0).then(response => {
            (collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
        } , {
            outOfStock.push({ id: response.id, ...response.data()})
        }
    ) */


/*         .then(outOfStock.length === 0)
        .then(response => {
            addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                batch.commit().then(() => {
                    setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                })
            }).catch(error => {
                setNotification('error', error)
            }).finally(() => {
                setProcessingOrder(false)
            })
        } ,else {
            outOfStock.push({ id: response.id, ...response.data()})
        }
    ) */


/*             if(outOfStock.length === 0) {
                addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            } else {
                outOfStock.push({ id: response.id, ...response.data()})
            } */

/*
    console.log(objOrder)

    getDocs(collection(firestoreDb, 'orders')).then(response => {
        const orders = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        updateDoc(doc(firestoreDb, 'orders', orders[0].id), objOrder).then(response => {
            console.log('jajHajajja', response)
        })
    })
*/

/* 
export default function Cart (){
    return(
        <div>
            <h1>Cart</h1>
        </div>
    )
} */


/*
const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    const [ contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: '',
    })
    const { products, clearCart, getTotal } = useContext(CartContext)
    const contactFormRef = useRef()

    const confirmOrder = () => {
        setProcessingOrder(true)
    
        const objOrder = {
            buyer: {
                name: 'Sebastian',
                phone: '123456789',
                address: 'Mi direccion 123'
            },
            items: products,
            total: getTotal(),
            date: new Date()
        }
    
        console.log(objOrder)
        
        updateDoc(doc(firestoreDb, 'orders', 'LVGHV6eR0PpAcwT7GQ7A'), objOrder).then(response => {
            console.log('jajHajajja', response)
        })
    }

    if(setProcessingOrder) {
        return <h1>Se esta procesando su orden</h1>
    } 

    if(products.length === 0) {
        return (
            <h1>Cart</h1>
            <h2>No hay productos en el carrito</h2>
        )
    }  

    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
    
*/