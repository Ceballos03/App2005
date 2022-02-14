import { useState } from "react"

const FunctionCounter = (props) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
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