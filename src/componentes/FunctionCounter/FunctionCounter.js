import { useState } from "react"

const FunctionCounter = ({ stock, onAdd }) => {
    const [number, setNumber] = useState(0)


    const increment = () => {
        number < stock && setNumber(number + 1);
    };

    const decrement = () => {
        number > 0 && setNumber(number - 1);
    };


    return(
        <div>
            <div>
                <h3>Seleccione una cantidad</h3>
                <h3>{number}</h3>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button 
                    disabled={number === 0}
                    className={number === 0 ? 'disabled' : 'add'}
                    onClick={() => onAdd(number)}
                >Agregar al carrito</button>
            </div>
        </div>
    )
}


export default FunctionCounter