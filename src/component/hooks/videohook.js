import { useContext, useDebugValue } from "react";
import VideoContext from "../context/videocontext";



function useVideo(){

    useDebugValue(useContext(VideoContext).length===4? "offline":'online')
    return useContext(VideoContext);
}


export default useVideo;