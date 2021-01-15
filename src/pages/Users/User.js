import React, { useState, useEffect } from "react"

import { NavLink } from "react-router-dom"

import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Alert from "@material-ui/lab/Alert"
import DeleteIcon from "@material-ui/icons/Delete"
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone"

const useStyles = makeStyles((theme) => ({
    navLink: {
        display: "flex",
        flexGrow: 1,
        justifyContent: " space - between",
        textAlign: "center",
        textDecoration: " none",
       
    },
    button: {
        margin: 8,
    },
    li: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },
    icon: {
        fontSize: "2rem",
    },
    item: {
        flex: "0 auto",
    },
    textField: {
        [theme.breakpoints.up("xs")]: {
            margin: 8,
            fontSize: ".7rem",
        },
        [theme.breakpoints.up("sm")]: {
            margin: 8,
            fontSize: ".9rem",
        },
        [theme.breakpoints.up("md")]: {
            margin: 8,
            fontSize: "1rem",
        },
    },
}))

function User({ users, deleteUser }) {
    console.log(users)
    const classes = useStyles()

    return users.map((user, i) => {
        return (
            <div key={i}>
                <ListItem button key={i}>
                    <NavLink className={classes.navLink} to={"/users/" + parseInt(user.id_user)}>
                        <ListItemText className={classes.item} primary={i + 1} />
                        <PersonOutlineTwoToneIcon className={classes.icon} />
                        <ListItemText className={classes.textField} primary={user.user_name} />
                        <ListItemText className={classes.textField} primary={user.countTask} />
                        <ListItemText className={classes.textField} primary={user.time} />
                    </NavLink>

                    <Button
                        onClick={() => {
                            deleteUser(i)
                        }}
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </ListItem>
                <Divider />
            </div>
        )
    })
}

export default User
