import React, { useState } from 'react'

function Function1({ click }) {
    const [count, setCount] = useState(0)

    console.log("child get render")
    return (
        <div>
            <h1>child : {count}</h1>
            <button onClick={click}> clicked</button>
            <button onClick={() => setCount(count + 1)}>  ++clicked</button>

        </div>
    )
}

export default React.memo(Function1);