import { useEffect, useState } from "react"



function Effect({murari,shubham}){

    let [Count,setCount] = useState(0);
    let [Data, setData] = useState(100)

    

useEffect(()=>{
   console.log(" count efect is run")
},[murari])
useEffect(()=>{
    console.log("data is run ")
},[shubham])
return(
    <div>
   <h3>{Count} : murari</h3>
   <h3>{Data} : shubham</h3>
   <button onClick={()=>setCount(Count+1)}>counttclick</button>
   <button onClick={()=>setData(Data+1)}>datclick</button>
      


    </div>
)
}


export default Effect;  