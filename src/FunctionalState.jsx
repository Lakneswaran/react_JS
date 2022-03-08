import React, { useState } from "react";


export default function FunctionalState(){

    const [count, setCount] = useState(10);
    function updateCount() {
        setCount((prevCount) => prevCount +1 );
        setCount((prevCount) => prevCount +1 );
    }

    const [arr, setArr] = useState(() => {
        console.log('Initializing Array');
        let arr = [];
        for (let i = 0; i < 1000; i++) {
            arr.push(i);
         }
         return arr
    })

    const [obj, setObj] = useState({ a:1, b:2 });
    function modifyObj () {
        setObj(prevObj => {
            return { ...obj, a: prevObj.a + 1 };
        });
    }

    return (
        <>
            <p class="text-slate-400 hover:text-sky-400" onClick={updateCount}>{count}</p>
            <p class="text-slate-400 hover:text-red-400" onClick={() =>setArr( [...arr, 1] )}>{arr.length}</p>
            <p class="text-slate-400 hover:text-green-400" onClick={modifyObj}>{obj.a}</p>
            <h2 class="text-2xl text-black-800">{ obj.b }</h2>
        </>
    )

}