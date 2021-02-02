import React, { useState, useEffect, useContext } from "react"
import firebase, { authFirebase } from "../Firebase/firebaseConfig"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { Context } from "../Context/Context.js"
import GoogleButton from "react-google-button"
import FacebookIcon from "@material-ui/icons/Facebook"
import CloseIcon from "@material-ui/icons/Close"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
const useStyles = makeStyles((theme) => ({
    // [theme.breakpoints.up("xs")]: {},
    // [theme.breakpoints.up("sm")]: {},
    // [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("xs")]: {
        input: {
            width: "100%",
            "& input": {
                padding: "13px 10px",
            },
        },

        dialog: {
            textAlign: "center",

            "& form": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            },
        },
    },
    [theme.breakpoints.up("sm")]: {
        input: {
            width: "100%",
            "& input": {
                padding: "13px 15px",
            },
        },
    },
    [theme.breakpoints.up("md")]: {
        input: {
            width: "100%",
            "& input": {
                padding: "15px 15px",
            },
        },
    },
    typography: {
        marginBottom: 5,
        fontSize: "0.8rem",
        textOverflow: "ellipsis",
    },
    icon: {
        marginLeft: "auto",
    },

    blockButton: {
        textAlign: "center",
        width: "100%",
    },
    button: {
        margin: "5px",
    },
}))

const AuthUser = () => {
    const classes = useStyles()
    const { auth, authisLogged, authIsExit } = useContext(Context)
    const [messageFirebase, SetmessageFirebase] = useState("")
    const [valueInputs, SetvalutInputs] = useState({ email: "", password: "" })
    const onHandleInputs = (e) => {
        SetvalutInputs({
            ...valueInputs,
            [e.target.type]: e.target.value,
        })
    }

    const createUserInFirebase = (e) => {
        e.preventDefault()
        const { email, password } = valueInputs
        console.log(valueInputs)
        authFirebase
            .createUserWithEmailAndPassword(email, password)
            .then((data) => {
                authisLogged(true)
                console.log("login user", data.user)
                SetvalutInputs({
                    email: "",
                    password: "",
                })
                localStorage.setItem(
                    "LOGIN_USER",
                    JSON.stringify({
                        id: data.user.uid,
                        localId: data.user.l,
                        email: data.user.email,
                    })
                )
                SetmessageFirebase(data.user.email)
            })
            .catch((error) => {
                var messageFirebase = error.message
                console.log(messageFirebase)
                SetmessageFirebase(messageFirebase)
            })
    }
    const onLogInAuthHandle = (e) => {
        e.preventDefault()
        const { email, password } = valueInputs

        authFirebase
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                authisLogged()
                SetvalutInputs({
                    email: "",
                    password: "",
                })

                SetmessageFirebase(data.user.email)
                localStorage.setItem(
                    "LOGIN_USER",
                    JSON.stringify({
                        id: data.user.uid,
                        localId: data.user.l,
                        email: data.user.email,
                    })
                )
            })
            .catch((error) => {
                var messageFirebase = error.message
                SetmessageFirebase(messageFirebase)
            })
    }

    const AuthWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken
                // The signed-in user info.
                var user = result.user
                console.log(user, token, credential)

                authisLogged()
                SetvalutInputs({
                    email: "",
                    password: "",
                })

                SetmessageFirebase(user.email, user.displayName)
                localStorage.setItem(
                    "LOGIN_USER",
                    JSON.stringify({
                        id: user.uid,
                        localId: user.l,
                        email: user.email,
                        token,
                    })
                )
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code
                var errorMessage = error.message
                // The email of the user's account used.
                var email = error.email
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential
                // ...
            })

        console.log("auth with gogle")
    }

    const authWithFaceBook = (e) => {
        e.preventDefault()
        console.log("auth with facebook")
        var provider = new firebase.auth.FacebookAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential

                // The signed-in user info.
                var user = result.user
                console.log(user)
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code
                var errorMessage = error.message
                // The email of the user's account used.
                var email = error.email
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential

                // ...
            })
      
    }
    const authExit = () => {
        authIsExit()
        SetmessageFirebase("")
    }
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false)
    }

    return (
        <div>
            {auth ? (
                <div>
                    <Typography className={classes.typography}>{messageFirebase}</Typography>

                    <Button value="exit" color="inherit" onClick={authExit}>
                        exit
                    </Button>
                </div>
            ) : (
                <div>
                    {" "}
                    <div>
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>
                            Enter/Register
                        </Button>
                    </div>
                    <Dialog
                        className={classes.dialog}
                        onClose={handleClose}
                        aria-labelledby="simple-dialog-title"
                        open={open}>
                        {" "}
                        <CloseIcon className={classes.icon} onClick={handleClose}></CloseIcon>
                        <DialogTitle id="simple-dialog-title"> Register</DialogTitle>
                        <form className={classes.form}>
                            <Typography className={classes.typography}>{messageFirebase}</Typography>
                            <TextField
                                className={classes.input}
                                id="outlined-Email-input"
                                label="email"
                                value={valueInputs.email}
                                type="Email"
                                autoComplete="current-password"
                                variant="outlined"
                                onChange={onHandleInputs}
                                color="secondary"
                            />
                            <TextField
                                className={classes.input}
                                id="outlined-password-input"
                                label="password"
                                value={valueInputs.password}
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                onChange={onHandleInputs}
                                color="secondary"
                            />
                            <div className={classes.blockButton}>
                                {" "}
                                <Button
                                    className={classes.button}
                                    type="submit"
                                    value="login"
                                    variant="contained"
                                    color="primary"
                                    onClick={onLogInAuthHandle}>
                                    Login
                                </Button>
                                <Button
                                    className={classes.button}
                                    type="submit"
                                    value="signIn"
                                    variant="contained"
                                    color="primary"
                                    onClick={createUserInFirebase}>
                                    Sign&nbsp;Up
                                </Button>
                            </div>

                            <Button
                                className={classes.button}
                                type="submit"
                                value="signIn"
                                variant="contained"
                                color="primary"
                                onClick={authWithFaceBook}>
                                <FacebookIcon></FacebookIcon>
                                &nbsp; Enter&nbsp;Facebook
                            </Button>
                            <GoogleButton
                                className={classes.button}
                                onClick={() => {
                                    AuthWithGoogle()
                                    console.log("Google button clicked")
                                }}
                            />
                        </form>
                    </Dialog>
                </div>
            )}
        </div>
    )
}
export default AuthUser
