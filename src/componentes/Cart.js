import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cart } = useContext(CartContext);
    return(
        <>
            {cart.map((prod) => (
                <li key={prod.id}>{prod.cantidad}</li>
            ))}
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