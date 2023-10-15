import { useEffect, useRef } from "react";




function Refhook(props){


const inputref = useRef()
let button = useRef()
 

function buttonclick(){
//    inputref.current.style.color="yellow"
// inputref.current.value= "1000k"
// inputref.current.focus();
  inputref.current.placeholder = ""
const str = "type here";
str.split('').forEach((item,i)=>{
     setTimeout(()=>{
     inputref.current.placeholder = inputref.current.placeholder +item
     },100*i)

     button.current.style.color= "yellow"
})

}

useEffect(()=>{
    inputref.current.focus()
},[])


    return (
<div>

    <input type="text" placeholder="username" ref={inputref} onFocus={buttonclick}></input>
    <button ref={button}>{props.name}</button>
</div>
    )
}

export default Refhook;