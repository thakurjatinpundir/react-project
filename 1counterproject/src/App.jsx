import { useState } from 'react'

import './App.css'

function App() {

  let [Counter, setCounder ] = useState(5)
  // let counter = 5      


const addvalue = () =>{
  // console.log("value add" , Math.random());
  Counter = Counter + 1;
  setCounder(Counter)
}

const removevalue = () => {
  Counter = Counter - 1;
  setCounder(Counter)
}

  return (
    <>
      <h1>This is my first project </h1>
      <h2>counter value {Counter}</h2>
      <button
      onClick={addvalue}
      >Add value {Counter}</button>
      <br /> <br />
      <button
       onClick={removevalue}
      >Remove valu {Counter}</button>
    </>
  )
}

export default App
