import { useState } from "react"
import React from 'react'


const Count = () => {
    const [increment,setIncrement] = useState(0) ///initiatstate , setstate
    console.log(increment);

    const Increment = () => {
        if(increment<10){
        setIncrement(increment + 1);
        }else{
          alert ("you can't increment")
        }
    }
    const Decrement = () => { 
        if(increment>0){
        setIncrement(increment - 1);
    }else{
        alert("you can't decrement")
    }
    }

  return (
    <div>
      <h1>{increment}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  )
}

export default Count
