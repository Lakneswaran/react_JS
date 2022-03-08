import React, { useEffect, useRef, useState } from "react";


export default function FunctionalRef() {

    console.log('Re-render');
    const [val, setVal] = useState('');
    const inputRef = useRef();
    const count = useRef(1);

    function showDom() {
        console.log(inputRef.current);
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    useEffect(() => {
        count.current += 1;
    })


    return (
        <>
           <div class="mt-20  flex space-x-4">
            <input type="text" placeholder="useRef demo!"
            value={val} onChange={(e) => setVal(e.target.value)}
            ref={inputRef} />
            <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={showDom}>Show Dom</button>
            <p>{count.current}</p>
            <p>{val}</p>
          </div>  
        </>
    )

}