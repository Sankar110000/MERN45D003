import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children})=> {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}