
// import Video from "./component/index";
import  './App.css';
import  arr from './data/data'
// import Button from "./component/button"
import Counter from "./component/counter";
// import { useState } from "react";
import Event  from "./component/objectevent";
import Videolisten from './component/videolisten';
// import World from './component/new';
import { Suspense, lazy, useReducer, useRef, useState, useTransition } from 'react';
import Theme from './component/context/usecontext';
import VideoContext from './component/context/videocontext';
import DispatchContext from './component/context/dispatch';
import Refhook from './component/useref';
import Apicontext from './component/context/apicontest';
import { Router } from 'express';
const Dummy = lazy(()=>
  import('./component/dummy')
)
// import Effect from './component/useeffect';






function App(){



 
console.log("app componnet render")


  function reducer(videos, action){   

    switch(action.type){
      
      case 'add':
      return[...videos,{...action.payload, id: videos.length+1}]

case'delete':
return videos.filter((item)=>item.id!==action.payload)

// const data = videos.findIndex((item)=>{
//        return  item.id === action.id
// })
// return videos.splice(data,1)

case 'apivideo':
  return action.payload;

      default:
        return videos;

    }
    

  }
  let[videos,dispatch] = useReducer(reducer, arr);
 
//  function getvideo(video){
       
//       dispatch({type:"add", payload:video})
//  }
    
    // function deletevideoname(id){
    //   dispatch({type:'delete', payload: id})
     
    // }



  
   
    

    function editvideoname(id){
        // 
    }
    let[mode, setMode] = useState('dark')

    const inputref = useRef();

function clikced(){
  inputref.current.focus();
  inputref.current.iref();
  


}
const [Show,setShow] =  useState(false)

function lazy(){
   setShow(true)
}

  
  return (
   <Theme.Provider value={mode}>
   <VideoContext.Provider value={videos}>
    <DispatchContext.Provider value={dispatch}>
      <Apicontext.Provider value={dispatch}>
   <div className= {`parent ${mode}`}>

   <div className="helo">
<Event ref={inputref} h="add video"></Event>
<button onClick={clikced}>focus</button>
<button className='modechanger' onClick={()=>{setMode(mode==='dark' ? 'lightmode': 'dark')}}> modechmager</button>
 
   </div>
   <div className="video">
   <Videolisten editvideo={editvideoname} ></Videolisten>
 </div>

<button onClick={lazy}>lazycode</button>

<Counter></Counter>
<Refhook name="click"></Refhook>
{/* <Effect></Effect> */}
<Suspense fallback={<>loading.....</>}>
  {Show&&<Dummy />}
</Suspense>



 </div>
 </Apicontext.Provider>
 </DispatchContext.Provider>
 </VideoContext.Provider>
 </Theme.Provider>
 )
}



export default App;   