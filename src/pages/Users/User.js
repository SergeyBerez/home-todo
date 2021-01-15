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
}))

function User({ users, deleteUser }) {
    console.log(users)
    const classes = useStyles()

    return users.map((user, i) => {
        return (
            <div key={i}>
                <ListItem button key={i}>
                    <NavLink className="nav-link" to={"/users/" + parseInt(user.id_user)}>
                        <ListItemText className={classes.item} primary={i + 1} />
                        <PersonOutlineTwoToneIcon className={classes.icon} />
                        <ListItemText primary={user.user_name} />
                        <ListItemText primary={user.time} />
                        <ListItemText primary={user.countTask} />
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
