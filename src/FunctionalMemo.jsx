import React, { useMemo, useState } from "react";

export default function FunctionalMemo() {

    const [count, setCount] = useState(10);
    const [arr, setArr] = useState([1,2,3,5]);
    function showMax() {
        console.log('Changing max')
        return Math.max(...arr)
    }
    const memVal = useMemo(() => showMax(), [arr])

    return(

        <>
            <div class="mt-20  flex space-x-4">
                <button className="border-orange-500 border bg-orange-300 hover:bg-orange-800" onClick={() => setCount(count + 1)}>Add count</button>
                <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={() => setArr([...arr, Math.round(count * Math.random())])}>Add to arr</button>
                <p>{JSON.stringify(arr)}</p>
                <p>{memVal}</p>
                <p>{count}</p>
            </div>
        </>
    )

}