import Modal from "../../components/modalEdit"
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import DeleteIcon from "@material-ui/icons/Delete"
import Divider from "@material-ui/core/Divider"
import EditIcon from "@material-ui/icons/Edit"
import Typography from "@material-ui/core/Typography"
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
    header: {
        marginTop: 70,
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
    button: {
        [theme.breakpoints.up("xs")]: {
            margin: 8,
            fontSize: ".7rem",
        },
        [theme.breakpoints.up("sm")]: {
            margin: 8,
        },
        margin: theme.spacing(1),
    },
}))

export default function List(props) {
    const classes = useStyles()
    const [state, setState] = useState(false)
    const toggleModal = () => {
        setState(!state)
    }

    // console.log("======render list", props);
    return (
        <>
            <ListItem className={classes.root}>
                <Typography className={classes.textField}>{props.id + 1}</Typography>

                <Typography className={classes.textField}>{props.title}</Typography>

                <Typography className={classes.textField}>{props.time}</Typography>
                <div>
                    <Button
                        onClick={toggleModal}
                        variant="contained"
                        className={classes.button}
                        startIcon={<EditIcon />}>
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
                {/* {state ? (
                    <Modal
                        id_user={props.id_user}
                        id_task={props.id_task}
                        title={props.title}
                        value={props.value}
                        editTask={props.editTask}
                        changeTitlebyModal={props.changeTitlebyModal}
                        toggleModal={toggleModal}
                    />
                ) : null} */}
            </ListItem>
            <Divider />
        </>
    )
}

// export default function list({ nameTask, id }) {
//   const [modal, showModal] = useState(true);
//   function toggleModal() {
//     showModal(!modal);
//   }
//   return (
//     <li className="list-group-item  userTasksLi">
//       <div className="">
//         <i className="fas fa-thumbtack"></i>
//         <span>
//           {nameTask} {id}
//         </span>
//       </div>
//       <div>
//         <Modal nameTask={nameTask} />

//         <button
//           toggleModal={toggleModal}
//           type="button"
//           className="btn btn-outline-warning"
//         >
//           <i className="fas fa-edit"></i>
//         </button>

//         <button type="button" className="btn btn-outline-danger">
//           <i className="fas fa-trash-alt"></i>
//         </button>
//       </div>
//     </li>
//   );
// }
