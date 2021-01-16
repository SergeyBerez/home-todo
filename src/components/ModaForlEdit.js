import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import TransitEnterexitIcon from "@material-ui/icons/TransitEnterexit"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        width: "300px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        borderRadius: "5px",
        border: "1px solid #a58e8eb5",
        boxShadow: "0px 1px 3px 0px",
        padding: "10px",
    },
    headerButton: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    hideModal: {
        display: "none",
    },
    textField: {
        width: "70%",
    },
}))
export const ModalEdit = ({ user, show, closeModal }) => {
    const classes = useStyles()

    console.log("=======render modal", user)
    return (
        <div className={show ? classes.root : classes.hideModal}>
            <div className={classes.headerButton}>
                <Typography className={classes.typography}>
                    {user.id + 1}new task:{user.value}
                </Typography>

                <IconButton aria-label="close" onClick={closeModal}>
                    <CloseIcon />
                </IconButton>
            </div>
            <Typography className={classes.typography}>old task:{user.title}</Typography>
            <form>
                <div className={classes.headerButton}>
                    <TextField
                        label={"user task"}
                        className={classes.textField}
                        placeholder="edit task"
                        helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="text"
                        value={user.value}
                        onChange={(e) => {
                            user.changeTitlebyModal(e.target.value)
                        }}>
                        {" "}
                    </TextField>
                    <IconButton
                        onClick={() => {
                            user.editTask(user.id_user, user.id_task)
                            closeModal()
                        }}
                        aria-label="enter">
                        <TransitEnterexitIcon />
                    </IconButton>
                </div>
            </form>
        </div>
    )
}
