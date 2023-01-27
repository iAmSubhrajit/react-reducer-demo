import React, { useReducer } from "react";
import './Counter.css'

const initialState = { count: 0 }

const reducerFn = (state, action) => {
    if (action.type === 'INCREMENT') {
        return { count: state.count + 1}
    }
    else if (action.type === 'DECREMENT') {
        return { count: state.count - 1 }
    }
    else if (action.type === 'RESET') {
        return { count: 0 }
    }
    else {
        return { count: state.count }
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const handleReset = () => {
        dispatch({ type: 'RESET' })
    }
 
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter;