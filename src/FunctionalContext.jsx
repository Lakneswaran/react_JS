import React from "react";
import FunctionalContextChild from "./FunctionalContextChild";

// 1. Creating context (x)
// 2. Creating provider (x)
// 3. Consume

export const Context = React.createContext();
export default function FunctionalContext() {
    
    
    return (

        <>
            <div class="... ring-2 ring-blue-500 mt-6">
                <Context.Provider value={'Books'}>
                    <h3>App Learn context api</h3>
                    <div>
                        <FunctionalContextChild />
                    </div>
                </Context.Provider>
            </div>
            

        </>

    )
}