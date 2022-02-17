import { useState } from "react"

const FunctionCounter = ({min=0, max=20}) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > min) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < max) {
            setCount(count + 1)
        }
    }

    return(
        <>
            <h3>Seleccione una cantidad</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default FunctionCounter