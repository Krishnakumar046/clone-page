import React, { useEffect, useState } from 'react'

export default function Usecallback1() {
    const [name, setName] = useState('');

    const [count, setCount] = useState([name]);
    useEffect(() => {
        console.log(count)
    }, [name])

    // const handleCount = () => {
    //     setCount(count + 1);
    // }

    return (
        <div>
            <h1>useCallback Hook</h1>
            <h1>count : {count}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>{name}</h1>
            {/* <button onClick={handleCount}>increment</button> */}
            {/* {
                count.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))
            } */}

        </div>
    )
}
