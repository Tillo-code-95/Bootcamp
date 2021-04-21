import { useState } from 'react'

export default function Counter() {
    //const state = useState(0);// El 0 es valor inicial.

    // const count = state[0];
    // const setCount = state[1];
    
    const [count , setCount] = useState(0);

    const handleClick = function (evento) {
        setCount(count + 1)
    };

    const emptyCount = function (){
        setCount(0)
    };



    return (

       

         <div>
            
            <p>Has hecho click {count} veces.</p>
            <button onClick = {handleClick}>Haz click</button>
            <button onClick = {()=>count > 0 && setCount(count - 1)}>Bajar</button>
            <button onClick = {() => setCount(0)}>reset</button>
            <button onClick = {emptyCount}>reset1</button>
        </div>
    )
}
