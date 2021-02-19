import React, { useState, useEffect, useContext } from "react"
import { authFirebase } from "../Firebase/firebaseConfig"
const Context = React.createContext()
export function useAuth() {
    return useContext(Context)
}
export const ContextProvider = ({ children }) => {
    // ----fuck use context   pass data through the componen

    const LOGIN_USER_LOCAL_STORAGE = JSON.parse(localStorage.getItem("LOGIN_USER")) || false

    const [currentUser, setCurrentUser] = useState(false)

    const [authInfo, setAuthInfo] = useState(LOGIN_USER_LOCAL_STORAGE)

    useEffect(() => {
        authFirebase.onAuthStateChanged((user) => {
            if (user) {
                setAuthInfo(user)
                setCurrentUser(true)
                localStorage.setItem(
                    "LOGIN_USER",
                    JSON.stringify({
                        name: user.displayName || "",
                        id: user.uid,
                        localId: user.l,
                        email: user.email,
                    })
                )
            }
        })
    }, [])
    const authisLogged = () => {
        console.log("setCurrentUser(true)")
        setCurrentUser(true)
    }
    const authIsExit = () => {
        localStorage.removeItem("LOGIN_USER")
        authFirebase.signOut()
        setCurrentUser(false)
    }

    function signUp(email, password) {
        return authFirebase.createUserWithEmailAndPassword(email, password)
    }
    function signIn(email, password) {
        return authFirebase.signInWithEmailAndPassword(email, password)
    }
    return (
        <Context.Provider value={{ currentUser, setCurrentUser, signUp, signIn, authIsExit, authisLogged, authInfo }}>
            {children}
        </Context.Provider>
    )
}
