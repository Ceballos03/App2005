import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item.id, cantidad);
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


    console.log('holiwis', cart);
    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )

}


/* 
    const removeItem = ( id ) =>{
        const itemsFiltrados = cart.filter((prod)=>prod.id !== id)
        setCart(itemsFiltrados) }
*/