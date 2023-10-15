import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {createPortal} from 'react-dom'

import useVideodispatch from "./hooks/dispatchhook";
// import DispatchContext from "./context/dispatch";





const Event = forwardRef(function Event({h},ref){

    const [Video, setVideo]= useState({
        
        time: "1 month ago",
        verify:  false,
        
        
       
    });
    // const [Video, setVideo]= useState(addvideo);
    //   const dispatch= useContext(DispatchContext)
    const dispatch = useVideodispatch()

    
    function handlesubmit(){
    //   addvideo(Video);
    dispatch({type:'add', payload: Video})
     
    }

    function handlecheck(e){
        setVideo({...Video, [e.target.name] : e.target.value})
       
       
        
    }

const iref= useRef();

    useImperativeHandle(ref,()=>{
      return{
        focus(){
            iref.current.focus()
        },
        iref(){
           iref.current.value = "100k"
        }
      }
            
        
    },[])
    
    return(
        <div>
        <input type="text" name="tittle" placeholder="tittle" onChange={handlecheck} ref={iref}></input>
        <input type="text" name="view" placeholder="views" onChange={handlecheck} ></input>
        

        <button onClick={handlesubmit}>{h}</button>

    {createPortal(
        <p>helo root1 and how are you</p>,
        document.getElementById("root1")
    )
    
    }
        </div>
    )
})

export default Event;