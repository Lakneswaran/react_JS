import React, { useContext } from "react";
import { Context } from "./FunctionalContext";

export default function FunctionalContextChild() {

    const val = useContext(Context);
    return (
        <>
            <div>
                <h6>Child {val}</h6>
            </div>
        
        </>
    )
}