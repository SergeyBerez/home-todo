import React from "react"
import ListUserTaskMycomponent from "./list"
import List from "@material-ui/core/List"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Alert from "@material-ui/lab/Alert"
import { NavLink } from "react-router-dom"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
    navLink: {
        // display: "flex",
        // flexGrow: 1,
        // justifyContent: "space-between",
        // textAlign: "center",
        // textDecoration: " none",
    },
    Alert: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 70,
        "& div": {
            display: "flex",
            width: "50%",
            alignItems: "center",
            justifyContent: "space-between",
        },
    },
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },

    textField: {
        [theme.breakpoints.up("xs")]: {
            width: "100%",
            margin: 8,
        },

        [theme.breakpoints.up("md")]: {
            width: "85%",
            margin: 8,
        },
    },
    button: {
        [theme.breakpoints.up("xs")]: {
            fontSize: ".7rem",
        },

        [theme.breakpoints.up("md")]: {
            fontSize: "1rem",
            margin: theme.spacing(1),
        },
    },
}))

const UserPersonalTasks = (props) => {
    
    const tasks = []
    const classes = useStyles()

    console.log("==============UserPersonalTasks render user tasks", props)
    let RenderUserTask
    let user
    if (props.users.length) {
        user = props.users.find((user) => {
            return user.id_user === parseInt(props.history.match.params.id)
        })

        if (user.tasks === undefined) {
            user.tasks = tasks
        }

        RenderUserTask = user.tasks.map((task, i) => {
            return (
                <ListUserTaskMycomponent
                    key={i}
                    id={i}
                    id_user={parseInt(props.history.match.params.id)}
                    id_task={task.id_task}
                    value={props.valueTodo}
                    title={task.title}
                    time={task.time_task}
                    editTask={props.editTask}
                    changeTitlebyModal={props.changeTitlebyModal}
                    deleteTask={props.deleteTask}

                    // showModal={item.showModal}
                />
            )
        })
    }
    // ==============UserPersonalTasks render user tasks
    return (
        <div className={classes.header}>
            <Alert icon={false} severity="info" className={classes.Alert}>
                <NavLink className={classes.navLink} to={"/users/"}>
                    <IconButton>
                        <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
                    </IconButton>
                </NavLink>
                {RenderUserTask === undefined ? (
                    <p1>at firs add user</p1>
                ) : (
                    <>
                        <p>{user.user_name}</p>
                        &nbsp;
                        <p>tasks &nbsp;{user.tasks.length}</p>
                    </>
                )}
            </Alert>
            <div className={classes.root}>
                <TextField
                    id="standard-full-width"
                    label="Enter task"
                    className={classes.textField}
                    placeholder="name task"
                    helperText=""
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="text"
                    value={props.valueUser}
                    onKeyUp={(e) => {
                        props.keyHandle(e, parseInt(props.history.match.params.id), user.tasks.length)
                    }}
                    onChange={(e) => {
                        props.changeTitleUserTask(e.target.value)
                    }}
                    type="text"></TextField>
                <Button
                    onClick={() => {
                        props.addTodoTaskUser(parseInt(props.history.match.params.id), user.tasks.length)
                    }}
                    disabled={props.users.length === 0}
                    variant="contained"
                    className={classes.button}>
                    ADD&nbsp;TASK
                </Button>
            </div>
            <List>{RenderUserTask} </List>
        </div>
    )
}
export default UserPersonalTasks
