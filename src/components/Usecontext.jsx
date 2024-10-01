import React, { createContext, useReducer } from 'react'
import App from '../App';


export const context = createContext();
function Usecontext({ children }) {

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 1 })
    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    )
}

export default Usecontext