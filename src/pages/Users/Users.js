import React from "react";
// import { NavLink } from "react-router-dom";
import User from "./User";
import { useValue } from "../../Context/ContextValue";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Alert from "@material-ui/lab/Alert";

import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";

const useStyles = makeStyles((theme) => ({
  Alert: {
    marginTop: 70,
    "& div": {
      display: "flex",

      alignItems: "center",
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
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      margin: 8,
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
      margin: 8,
    },
  },
  button: {
    [theme.breakpoints.up("xs")]: {
      fontSize: ".7rem",
      margin: 4,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.7rem",
      margin: theme.spacing(1),
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      margin: theme.spacing(1),
    },
  },
  error: {
    "&& label": { color: "red" },
  },
}));

const Users = (props) => {
  const { valueInput, handleUserInput, errorMessage } = useValue();
  const classes = useStyles();
  const cls = [classes.textField];

  // props.value.length > 2? <h3>
  const message = errorMessage || "Enter user";

  if (!valueInput.validate && valueInput.touched) {
    cls.push(classes.error);
  } else {
    cls.push("");
  }

  return (
    <div className={classes.header}>
      <Alert icon={false} severity="info" className={classes.Alert}>
        <span>{Object.keys(props.users).length}</span>&#8195;
        <PeopleAltTwoToneIcon /> &#8195;
        {Object.keys(props.users).length !== 0 ? (
          <p> &#8195;ALL USERS&#8195;</p>
        ) : (
          <>
            &#8195;<span>NOT USER</span>&#8195;
          </>
        )}
        {valueInput.value.length > 3 ? (
          <span>User name&#8195;{valueInput.value}</span>
        ) : (
          <span>Enter name more 3 letters</span>
        )}
      </Alert>

      <div className={classes.root}>
        <TextField
          // value={props.value}

          value={valueInput.value}
          // onChange={props.handleUserInput}
          onChange={handleUserInput}
          onKeyUp={props.keyHandle}
          id="standard-full-width"
          label={message}
          className={cls.join(" ")}
          placeholder="name user"
          helperText=""
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
        />
        <Button
          onClick={props.addNewUser}
          variant="contained"
          className={classes.button}
        >
          ADD&nbsp;USER
        </Button>
      </div>
      <List>
        <User users={props.users} deleteUser={props.deleteUser}></User>
      </List>
    </div>
  );
};
export default Users;
