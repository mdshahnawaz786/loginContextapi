import { createContext, useState } from "react";

export const myContext = createContext();

function CustomProvider({children}){
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [input, setInput] = useState("")
    return(
        <myContext.Provider value={{isLoggedIn, setisLoggedIn,input,setInput}}>{children}</myContext.Provider>
    );
}

export default CustomProvider