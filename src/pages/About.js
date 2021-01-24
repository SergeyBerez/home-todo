import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Alert, AlertTitle } from "@material-ui/lab"
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 130,
    },
    MuiAlertTitleRoot: {
        marginTop: 0,
    },
}))
export default function About({ message }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Alert severity="info">
                <AlertTitle className={classes.MuiAlertTitleRoot}> {message}</AlertTitle>
            </Alert>
        </div>
    )
}
