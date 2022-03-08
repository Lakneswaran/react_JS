import React, { useEffect, useState } from "react";

export default function FunctionalEffect() {

            const [val1, setVal1] = useState(10);
            const [val2, setVal2] = useState(10);
            console.log('Re-render');
            useEffect(() =>{
                console.log('UseEffect')
                setVal2(val1 * 2);
            }, [val1])
    return (
        <>
           <div class=" animate-pulse flex space-x-4">
            <p class="h-10 mt-6  bg-silver-700 rounde">This is componentDidUpdate when you click Toggle 1 :</p>
            <p> {val1} </p>
            <p> {val2} </p>
            <button className="border-orange-500 border bg-orange-300 hover:bg-orange-800" onClick={ () => setVal1(val1 + 1)}>Toggle 1</button>
            <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={ () => setVal2(val2 + 1)}>Toggle 2</button>
          </div>
        </>
    )

}