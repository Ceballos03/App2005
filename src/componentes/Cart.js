import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    
    console.log('hoi',removeItem)

    if(cart.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    return(
        <>
            <h1>Cart</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h2>{prod.name}</h2>
                            <h2>Cantidad: {prod.cantidad}</h2>
                            <button onClick={() => removeItem(prod.id)}>X</button>
                        </div>
                    )
            })}
        </>
    )
}

export default Cart;

/* 
export default function Cart (){
    return(
        <div>
            <h1>Cart</h1>
        </div>
    )
} */