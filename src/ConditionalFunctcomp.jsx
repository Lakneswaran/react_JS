import React, { useEffect, useState } from "react";


export default function ConditionalFunctcomp() {
    // State in Functional component

    const [target, setTarget] = useState("Silver_Gold");
    const [members, setMembers ] = useState(99);



    const clicked = e => {
        setMembers(members + 1)
    };

    useEffect(() => {
        console.log("Members Increased");
    }, [members]);

    return (
    <>  
        <div>
         <p>Target {target}</p>   
         <p>Member: { (members < 100) ? 'Silver' : 'Gold'}</p>   
         <button className="border-orange-500 border bg-orange-300 hover:bg-orange-800" onClick={clicked}>Click me</button> 
        </div>
        
         
    </> 
    );
}