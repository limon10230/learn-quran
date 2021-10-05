import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() =>
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setCart(data))
        , [])
    return (
        <div>
            {
                cart.slice(0, 5).map(cart => <Cart
                    key={cart.id}
                    cart={cart}

                >

                </Cart>)
            }
        </div>
    );
};

export default Cart;