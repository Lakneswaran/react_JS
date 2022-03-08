import React from "react";

const FunctionalCallbackProduct = React.memo(({ name, addToCart }) => {
    console.log(`${name} prod comp re-rendered`);
    return(
        <>
            <div>
                <h1>{name}</h1>
                <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={addToCart}>Add to Cart</button>
            </div>
        
        </>

    )
});

export default FunctionalCallbackProduct;