import React, { memo } from "react";

 
    
        const FunctionalRMemoBro = ({val}) =>{
        console.log('Bro comp. is re-rendering');
        return (

            <>
                <div>
                    <h4>bro {val}</h4>
                </div>
            </>
        )
    }


export default memo(FunctionalRMemoBro)