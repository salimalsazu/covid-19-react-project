import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';


import('./Cart.css');

const Cart = () => {
    const [informations, setInformations] = useState([]);
    // console.log(informations);

    useEffect(() => {
        fetch('https://coronavirus.m.pipedream.net/')
            .then(res => res.json())
            .then(data => setInformations(data.rawData));
        // .then(data => console.log(data.rawData));
    }, [])
    return (
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 border-spacing-2 gap-2 shadow-slate-700 px-20 mt-10" >
            {
                informations.map(info => <SingleCart info={info}  ></SingleCart>)
            }
        </div>
    );
};

export default Cart;