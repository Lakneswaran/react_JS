import React from 'react';
import Newcomponent from './Newcomponent';


export default function App() {
  const name = "Lakneswaran"
  return(
    <div>
      <Newcomponent name={name + " Krish"} title="passing prop" />
      <h1>Hello World!</h1>
      <p>First app</p>
    </div>
  );
}
