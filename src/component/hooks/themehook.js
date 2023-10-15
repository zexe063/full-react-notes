import { useContext } from "react";
import Theme from "../context/usecontext";



function useTheme(){
    return useContext(Theme)
}

export default  useTheme;