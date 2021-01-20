// import Modal from "../../components/modalEdit"
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import ListItem from "@material-ui/core/ListItem"

import DeleteIcon from "@material-ui/icons/Delete"
import Divider from "@material-ui/core/Divider"
import EditIcon from "@material-ui/icons/Edit"
import Typography from "@material-ui/core/Typography"
import { ModalEdit } from "../../components/ModaForlEdit"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    header: {
        marginTop: 70,
    },
    typography: {
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
    boxButton: {
        [theme.breakpoints.up("xs")]: {
            margin: 8,
            fontSize: ".5rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
        [theme.breakpoints.up("sm")]: {
            margin: 8,
            fontSize: ".7rem",
            width: "100%",
            textAlign: "right",
        },
        [theme.breakpoints.up("md")]: {
            margin: 8,
            fontSize: "1rem",
            width: "25%",
            display: "flex",
            // justifyContent: "space-between",
        },
    },
    button: {
        [theme.breakpoints.up("xs")]: {
            fontSize: ".5rem",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: ".7rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1rem",
        },
    },
    form: {
        position: "fixed",
        width: "200px",
        height: "200px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        display: "flex",
        justifyContent: "space-between",
    },
}))

export default function List(props) {
    const classes = useStyles()
    const [openModal, setOpenModal] = useState(false)
    const showModal = () => {
        setOpenModal(true)
        console.log("coloseModal")
    }
    const closeModal = () => {
        console.log("showModal")
        setOpenModal(false)
    }
    console.log("======render list", { props })
    return (
        <>
            <ListItem className={classes.root}>
                <Typography className={classes.typography}>
                    {props.id + 1}&#8195;
                    {props.title}
                </Typography>

                <Typography className={classes.typography}>{props.time}</Typography>
                <div className={classes.boxButton}>
                    <Button onClick={showModal} variant="contained" className={classes.button} startIcon={<EditIcon />}>
                        edit
                    </Button>
                    <Button
                        onClick={() => {
                            props.deleteTask(props.id_user, props.id_task, props.id)
                        }}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        className={classes.button}>
                        {" "}
                        DELL
                    </Button>
                </div>
            </ListItem>
            <ModalEdit user={props} show={openModal} closeModal={closeModal}></ModalEdit>
            <Divider />
        </>
    )
}
