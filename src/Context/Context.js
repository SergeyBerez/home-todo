import React, { useState } from "react"

export const Context = React.createContext()
export const ContextProvider = ({ children }) => {
    // ----fuck use context   pass data through the componen
    const [auth, setAuth] = useState(false)
    const authisLogged = () => {
        setAuth(true)
    }
    const authIsExit = () => {
        setAuth(false)
    }
    return <Context.Provider value={{ auth, authIsExit, authisLogged }}>{children}</Context.Provider>
}
