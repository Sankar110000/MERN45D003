import { createContext, useContext } from "react";

export const NameContext = createContext();

export const useName = () => {
    return useContext(NameContext)
}

export const NameProvider = ({children}) => {
    const name = "sankar"
    return (
        <NameContext.Provider value={name}>
            {children}
        </NameContext.Provider>
    )
}