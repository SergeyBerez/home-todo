import React, { useState, useEffect } from "react"
// import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Alert from "@material-ui/lab/Alert"
import User from "./User"

import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
    header: {
        marginTop: 70,
    },
    textField: {
        width: "85%",
        margin: 8,
    },
    button: {
        margin: theme.spacing(1),
    },
}))

function Users(props) {
    const classes = useStyles()
    // props.value.length > 2? <h3>
    console.log("================render ===== users", props)
    return (
        <div className={classes.header}>
            <Alert icon={false} severity="info" className={classes.root}>
                <PeopleAltTwoToneIcon /> &nbsp;
                {Object.keys(props.users).length !== 0 ? (
                    <>
                        &nbsp; <p>all users</p> &nbsp; &nbsp;
                        <span>{Object.keys(props.users).length}</span>
                    </>
                ) : (
                    <>
                        <span>not users add user</span>
                    </>
                )}
            </Alert>

            <div className={classes.root}>
                <TextField
                    value={props.value}
                    onChange={(e) => {
                        props.changeTitle(e.target.value)
                    }}
                    onKeyUp={props.keyHandle}
                    id="standard-full-width"
                    label="Enter user"
                    className={classes.textField}
                    placeholder="name user"
                    helperText=""
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="text"
                />
                <Button onClick={props.addUser} variant="contained" className={classes.button}>
                    ADD USER
                </Button>
            </div>
            <List>
                <User users={props.users} deleteUser={props.deleteUser}></User>
            
            </List>
        </div>
    )
}
export default Users
