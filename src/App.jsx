import React from 'react';
import Functionalcomp from './Functionalcomp';
import Newcomponent from './Newcomponent';


export default function App() {
  const name = "Lakneswaran"
  return(
    <div>
      <Newcomponent name={name + " Krish"} title="passing prop" />
      {/* <h1>Hello World!</h1>
      <Functionalcomp name={name}/>
      <p>First app</p> */}
    </div>
  );
}
