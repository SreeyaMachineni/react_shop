import { createContext, useState } from "react";

export const UserContext = createContext({
    setCurrentuser: ()=> null,
    currentUser:null
})

export const UserContextProvider = ({children})=>{

    const [currentUser, setCurrentuser] = useState(null)
    const value = {currentUser,setCurrentuser}
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
