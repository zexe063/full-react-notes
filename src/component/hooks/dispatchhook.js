import { useContext } from "react";
import DispatchContext from "../context/dispatch";



function useVideodispatch(){
    return useContext(DispatchContext)
}

export default useVideodispatch;