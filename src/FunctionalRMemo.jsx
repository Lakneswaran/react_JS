import React, { useState } from "react";
import FunctionalRMemoBro from "./FunctionalRMemoBro";
import FunctionalRMemoSis from "./FunctionalRMemoSis";


export default function FunctionalRMemo(){

    const [broVal, setBroVal] = useState(5)
    const [sisVal, setSisVal] = useState(10)

    function changeBro(){
        setBroVal(broVal + 1);
    }
    function changeSis(){
        setSisVal(sisVal + 1);
    }

    return (

        <>
          <div class="mt-20  flex space-x-4">
            <h3>Learning React.meme()</h3>
            <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={changeBro}>Incr Bro</button>
            <button className="border-green-500 border bg-green-300 hover:bg-green-800" onClick={changeSis}>Incr Sis</button>
            <FunctionalRMemoBro val={broVal} />
            <FunctionalRMemoSis val={sisVal} />
          </div>      
        </>
    )
}