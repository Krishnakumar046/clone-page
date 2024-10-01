import React, { useCallback, useState } from 'react'
import Usecallbackfun from './Usecallbackfun';

export default function Usecallback() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    const Increment = useCallback(() => {
        return [number + 1, number + 2, number + 3];
    }, [number])
    return (
        <div style={theme}>
            <h1>{number}</h1>
            <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark((curr) => !curr)}> Toggle</button >
            <Usecallbackfun increment={Increment} />
        </div >
    )
}
