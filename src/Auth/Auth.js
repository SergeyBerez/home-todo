import React, { useState, useEffect, useContext } from "react"
import { authFirebase } from "../Firebase/firebaseConfig"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Popover from "@material-ui/core/Popover"
import { _Context } from "../Context/Context.js"

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: "0.7rem",
        color: "red",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        padding: 2,

        [theme.breakpoints.up("xs")]: {
            flexWrap: "wrap",
        },
        [theme.breakpoints.up("sm")]: {},
        [theme.breakpoints.up("md")]: { flexWrap: "nowrap" },
    },
    input: {
        [theme.breakpoints.up("xs")]: {
            width: "100%",
            "& input": {
                padding: "13px 10px",
                // fontSize: "0.5rem",
            },
        },
        [theme.breakpoints.up("sm")]: {
            width: "100%",
            "& input": {
                padding: "13px 15px",
            },
        },
        [theme.breakpoints.up("md")]: {
            width: "30%",
            "& input": {
                padding: "13px 15px",
            },
        },
    },
}))

const AuthUser = () => {
    const classes = useStyles()
    const { auth, authisLogged, authIsExit } = useContext(_Context)
    const [messageFirebase, SetmessageFirebase] = useState("")
    const [valueInputs, SetvalutInputs] = useState({ email: "", password: "" })
    const onHandleInputs = (e) => {
        SetvalutInputs({
            ...valueInputs,
            [e.target.type]: e.target.value,
        })
    }
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined
    useEffect(() => {}, [])
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
    const authExit = () => {
        authIsExit()
        SetmessageFirebase("")
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
                    <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                        Enter/Register
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}>
                        <form className={classes.form}>
                            <fieldset>
                                Register
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
                                <Button type="submit" value="login" color="inherit" onClick={onLogInAuthHandle}>
                                    Login
                                </Button>
                                <Button type="submit" value="signIn" color="inherit" onClick={createUserInFirebase}>
                                    Sign&nbsp;Up
                                </Button>
                            </fieldset>
                        </form>
                    </Popover>
                </div>
            )}
        </div>
    )
}
export default AuthUser
