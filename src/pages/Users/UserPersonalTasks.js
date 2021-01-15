import React from "react"
import ListUser from "./list"
import List from "@material-ui/core/List"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Alert from "@material-ui/lab/Alert"

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
            width: "85%",
            margin: 8,
        },
        [theme.breakpoints.up("sm")]: {
            width: "85%",
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
        [theme.breakpoints.up("sm")]: {
            fontSize: "0.7rem",
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
                <ListUser
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

    return (
        <div className={classes.header}>
            <Alert icon={false} severity="info" className={classes.root}>
                {" "}
                {RenderUserTask === undefined ? (
                    <h1>at firs add user</h1>
                ) : (
                    <>
                        <h2>{user.user_name}</h2>
                        &nbsp;
                        <h3>tasks &nbsp;{user.tasks.length}</h3>
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
                    ADD TASK
                </Button>
            </div>
            <List>{RenderUserTask} </List>
            {/* {user.tasks.length === 0 ? <p>добавьте user</p> : null} */}
        </div>
    )
}
export default UserPersonalTasks
