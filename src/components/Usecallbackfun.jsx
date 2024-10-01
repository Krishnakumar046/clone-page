import React, { useEffect, useState } from 'react'

export default function Usecallbackfun({ increment }) {
    const [effect, setEffect] = useState([]);
    useEffect(() => {
        setEffect(increment());
        console.log("the callback value")
    }, [increment]);
    return (
        <div>
            {
                effect.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div>
    )
}
