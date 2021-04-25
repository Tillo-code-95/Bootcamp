import {useEffect, useState} from "react";

export default function useEffectComponent(){
   
    const [count, setCount] = useState(0);
   
    

        

    console.log("Me ejecuto cada vez que cambia un componente");

    useEffect(() =>{
       
        console.log("Acabo de montarme");

    }, [])

    return (
        <div>
            <span>{count}</span>
            <button onClick = {() => setCount(count+1)}>+</button>
        </div>
    )

    
}