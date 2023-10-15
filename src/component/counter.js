
import {useRef, useState, memo,useCallback,useMemo} from "react";
import { flushSync } from "react-dom";



const Counter = memo(function Counter(){
    console.log('render')

let num = useRef(0)
let [number, setNumber]= useState(10)

    function handlecheck(e){
        e.stopPropagation();
        

      flushSync(()=>{
        setNumber(number+1)
      })
     
      console.log(number)

        // console.log(number)
      num.current++
        console.log(num.current)
     
     
      
    }


  
    const fibuse= useCallback(function fib(n){
        if(n===1||n===2){
    return 1
        }
    
      return fib(n-1)+fib(n-2);
    
     },[])

   


    

 const fibmemo= useMemo(()=> fibuse(number),[number,fibuse])

    return (
     <div className="counter">
    <h1>{number}</h1>
  <button onClick={handlecheck}>counter useref</button>
  <>

<h2>{fibmemo}</h2>
</>
  
     </div>
    )
})

export default Counter;