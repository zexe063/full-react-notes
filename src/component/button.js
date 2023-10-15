
import { memo, useState} from "react";


import "./button.css"
// import useTheme from "./hooks/themehook";
// import Theme from "./context/usecontext";


const Button = memo(function Button({children, msg, onplay, onPause}){


console.log("button render")

let [playing, setPlaying] = useState(false)
// const theme = useTheme()

    function  handleclick(e){
      e.stopPropagation();
      playing ? onPause() : onplay();
      setPlaying(playing = !playing);
    }
    return(
        <>
        <button className="theme" onClick={handleclick}> {playing ? 'pause': 'play'} </button>
       
        </>
    )
})

export default Button