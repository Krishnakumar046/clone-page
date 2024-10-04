import React, { useEffect, useState } from 'react'


function Useeffects() {
    const [first, setFirst] = useState([]);

    useEffect(() => {

        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            //.then((data) => console.log(data))
            .then((data) => setFirst([data]));
    }, [])
    return (
        <div>
            {
                first.map((item, index) => {
                    return (
                        <>
                            <div class="card" style={{ width: "18rem" }} key={index}>
                                <img src={item.images} class="card-img-top " alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <a href="#" class="btn btn-primary">button</a>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Useeffects