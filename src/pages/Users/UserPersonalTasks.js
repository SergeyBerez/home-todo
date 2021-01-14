import React from "react"
import List from "./list"
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
    width: "85%",
    margin: 8,
  },
  button: {
    margin: theme.spacing(1),
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
        <List
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
      {/* <div className="input-group col-lg-6">
        <div className="input-group-append">
          <button
            onClick={() => {
              props.addTodoTaskUser(parseInt(props.history.match.params.id), user.tasks.length)
            }}
            disabled={props.users.length === 0}
            className="btn btn-secondary"
            type="button">
            add task
          </button>
        </div>
      </div> */}
      <div>
        <ul className="list-group list-group-flush">{RenderUserTask} </ul>
        {/* {user.tasks.length === 0 ? <p>добавьте user</p> : null} */}
      </div>
    </div>
  )
}
export default UserPersonalTasks
