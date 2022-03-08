import React, { useCallback, useState } from "react";
import FunctionalCallbackProduct from "./FunctionalCallbackProduct";

export default function FunctionalCallback() {

    const [prods, setProd] = useState(["prod 1", "prod 2"]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const addToCart = useCallback(() =>{

        setCart(cart +1);
    }, [cart]);

    return (

        <>
            <div class="mt-20  flex space-x-4">
                <h3>Count: {count}</h3>
                <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={() => setCount(count + 1)}>Count</button>

                <h3>Cart : {cart}</h3>

                <div class="flex flex-wrap">
                    {prods.map((p, i) => { 
                    return <FunctionalCallbackProduct name={p} addToCart={addToCart} key={i} />
                    })}
                </div>
            </div>
            
        </>
    )
}