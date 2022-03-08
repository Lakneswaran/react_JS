import React from 'react';
import Functionalcomp from './Functionalcomp';
import Newcomponent from './Newcomponent';
import ConditionalFunctcomp from './ConditionalFunctcomp';
import FormHandling from './FormHandling';
import FunctionalState from './FunctionalState';
import FunctionalEffect from './FunctionalEffect';
import FunctionalMemo from './FunctionalMemo';



export default function App() {
  const name = "Lakneswaran"
  return(
    <div>
      {/* <Newcomponent name={name + " Krish"} title="passing prop" />
      <h1>Hello World!</h1>
      <Functionalcomp name={name}/>
      <p>First app</p>
      <ConditionalFunctcomp />
      <FormHandling /> */}
      <FunctionalState /> 
      {/* <FunctionalEffect />  */}
      <FunctionalMemo />

    </div>
  );
}
