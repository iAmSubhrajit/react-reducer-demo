import React, { useReducer } from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import '../Counter/Counter.css'

const initialValue = {
    counter: 0,
    addNum: 1,
    subNum: 1
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE': return {
            ...state,
            counter: state.counter + +state.addNum
        }
        case 'DECREASE': return {
            ...state,
            counter: state.counter - +state.subNum
        }
        case 'SET_ADD_NUMBER': return {
            ...state,
            addNum: action.payload
        }
        case 'SET_SUB_NUMBER': return {
            ...state,
            subNum: action.payload
        }
    }
}
function Counter1() {
    const [state, dispatch] = useReducer(reducer, initialValue)
    // const inputRef = useRef()
    return (
        <div>
            <h1 >counter: {state.counter}</h1>
            <input type="text" value={state.subNum} onChange={(e) => dispatch({ type: 'SET_SUB_NUMBER', payload: e.target.value })} />
            <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
            <input type="text" value={state.addNum} onChange={(e) => dispatch({ type: 'SET_ADD_NUMBER', payload: e.target.value })} />
            <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
        </div>
    )
}

export default Counter1