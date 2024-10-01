import React, { useContext } from 'react'
import { context } from './Usecontext'

export default function Usestate() {

    const { state, dispatch } = useContext(context)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

        </div>
    )
}
