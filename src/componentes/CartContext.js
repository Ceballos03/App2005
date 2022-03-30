import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad, price) => {
        if (isInCart(item.id)) {
            sumarCantidad(item.id, cantidad);
            getTotal(item.id, price, cantidad);
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
    };


    const isInCart = (id) => {
        const validacion = cart.some((producto) => producto.id === id)
        return validacion;
    };

     const sumarCantidad = (id, cantidad) => {
        cart.map(
            (producto) => producto.id === id && (producto.cantidad += cantidad)
        );
    }; 


    const removeItem = ( id ) => {
        const itemsFiltrados = cart.filter((prod)=>prod.id !== id)
        setCart(itemsFiltrados) 
    };


    const getQuantity = ( cantidad ) => { //fallido
        //const quantity = cart.map((producto) => producto.cantidad += cantidad)
        const quantity = cart.map((producto) => producto.cantidad + cantidad)
        return quantity;
    };


    const getTotal = ( producto ) =>{
        console.log('sss', producto)
        let total = 0
        (producto).forEach(prod => {
            total = total+prod.price * prod.cantidad
        })
        return
    };









    console.log('holiwis', cart);
    return(
        <CartContext.Provider value={{ cart, addToCart, removeItem, getQuantity }}>
            {children}
        </CartContext.Provider>
    )
};