import React from "react";


export default function Functionalcomp(props) {
    const clicked = e => {
        console.log(e);
        alert(1);
    };
    return <> 
        <div> Hello from Func comp</div>
         <button className="border-blue-500 border bg-blue-300 hover:bg-blue-800" onClick={clicked}>Click me</button> 
         </>
}