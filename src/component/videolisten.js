// import { useContext } from "react"

// import { useEffect } from "react";
import { memo, useCallback, useDeferredValue} from "react";
import Button from "./button"
import useVideodispatch from "./hooks/dispatchhook";
import useVideo from "./hooks/videohook"
import Video from './index'
// import VideoContext from "./context/videocontext"
// import axios from 'axios';
import longarr from "../data/defer";

const Videolisten = memo(function Videolisten({editvideo}){


//   const url = 'https://my.api.mockaroo.com/hacker.json?key=d457bae0'
// const videos = useContext(VideoContext)
const videos = useVideo();
const dispatch = useVideodispatch()

// let [Videos,setVideo] = useState(videos);

// const [ispending, startTransition] = useTransition();



async function getvideo(){


    // const res = await (await axios.get(url)).data
    // console.log(res)
  
   
dispatch({type:"apivideo", payload:longarr})

// startTransition(()=>{
//     setVideo([...Videos, ...longarr])
// })


}

const defred= useDeferredValue(videos)







const onplay = useCallback(()=>{
    console.log("play")
},[])

const onPause = useCallback(()=>{
    console.log("pause hii")
},[])



    return(
        
       <>
       <button onClick={getvideo}>getvideo</button>
{ 

 
defred.map((item)=>{
 return <Video tittle={item.tittle} view= {item.view} time={item.time} verify={item.verify} children={item.children} key= {item.id} id={item.id} editvideo={editvideo} editname="edit" >
<>
<Button onplay={onplay} onPause={onPause}>ite.tittle</Button>

</>


 </Video>

  
})
}


        </>

       

    )
})


export default Videolisten;