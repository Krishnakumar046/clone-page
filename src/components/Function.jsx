import React, { useCallback, useState } from 'react'
import Function1 from './Function1';

function Function() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const reset = useCallback(() => {
        setCount(0);
    }, []);
    console.log("parent gets render");

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increment</button>
            <Function1 click={reset} />
        </div>
    )
}

export default Function