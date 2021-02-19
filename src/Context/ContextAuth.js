import React, { useContext, useState, useEffect } from "react"
import { authFirebase } from "../Firebase/firebaseConfig"
const Context = React.createContext()
function UseAuth() {
    return useContext(Context)
}

function ContextAuthProvider({ children }) {
    const [CurrentUserAuth, setAuth] = useState("")
    const [CurrentUser, setUser] = useState("")

    useEffect(() => {
        authFirebase.onAuthStateChanged((user) => {
            // setCurrentUser(user)
            console.log("context did mount")
            setUser(user)
            setAuth(user)
            // localStorage.setItem(
            //     "LOGIN_USER",
            //     JSON.stringify({
            //         name: user.displayName,
            //         id: user.uid,
            //         localId: user.l,
            //         email: user.email,
            //     })
            // )
        })
    }, [])
    return <Context.Provider value={{ CurrentUser, CurrentUserAuth }}>{children}</Context.Provider>
}

export { ContextAuthProvider, UseAuth }
