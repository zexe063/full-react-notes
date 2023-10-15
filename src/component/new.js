

// import { useState } from "react";
import { useReducer } from "react";

 export function Country({name}){

    return(
        <>
      <button>{name}</button>
        </>
    )
}



function World({buttonname,placeholder}){

 const reducer = (x, action) => {
        

  }

  let [x, dispatch] = useReducer(reducer, 0)



    return(
    
      <div>
           
       <h1>{x}</h1>
       <button onClick={()=>dispatch({type:"incremnet"})}>incremnet</button>
       <button onClick={()=>dispatch({type:"decremnet"})}>decrement</button>

       
      </div>


       
    )
}

 export default World;