
// import { useContext } from "react"
import "./index.css"
// import Theme from "./context/usecontext"
// import DispatchContext from "./context/dispatch"
// import Button from "./button"

import usevideodispatch from "./hooks/dispatchhook";
import { memo, useCallback, useId, useLayoutEffect, useRef } from "react";
// import { useEffect } from "react";


const Video = memo(function Video({tittle,time,view, verify, id, children, editvideo,editname}){
    //  let verified = verify
    //  const theme = useContext(Theme)
//   const dispatch =  useContext(DispatchContext)
console.log("video", id)


const dispatch = usevideodispatch();


// use a custom hook//



    function editclick(){
        editvideo(id)
    }

   const buttonclick =  useCallback(()=>{
        //   deletevideo(id)
        dispatch({type:'delete', payload:id})
    },[dispatch,id])
    

//     useEffect(()=>{
//    const idx = setInterval(() => {
//         console.log("video playing",id)
//     }, 1000);

// return(()=>{
//     clearInterval(idx)
// })

    // },[id])


    const ref= useRef();
    useLayoutEffect(()=>{
        const height = ref.current.getBoundingClientRect();
        // console.log(height)
    })

    const uid = useId()
  
    return(
        <div className="container" ref={ref} id={uid}>
            <button className="edit" onClick={editclick}>{editname}</button>
            <button className="cut" onClick={buttonclick}>delete</button>
        <div className="image">
        <img src={`https://picsum.photos/seed/picsum/100/100`} alt="HELLO" ></img>
        </div>
        <div className={`tittle`}>{tittle}</div>
        <div className="channel">Coderdost {verify && "✅"}</div>

     <div className="views">
        <div className="view">{view} <span>.</span><span className="time">{time}</span></div>
     </div>;
     
     <div>
        {/* <Button  msg="play" onplay={()=>console.log('play hii', tittle)} onPause={()=>console.log("pause hii", tittle)}>play</Button> */}
        {children}
        </div> 
      <>
     
      </>
        </div>
        
    )
})

export default Video;