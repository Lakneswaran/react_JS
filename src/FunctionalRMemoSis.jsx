import React, { memo } from "react";


    
        const FunctionalRMemoSis = ({val}) =>{
        console.log('Sis comp. is re-rendering');
        return (

            <>
                <div>
                    <h4>Sis {val}</h4>
                </div>
            </>
        )
    }


export default memo(FunctionalRMemoSis)