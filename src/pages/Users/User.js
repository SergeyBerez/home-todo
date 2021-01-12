import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 8,
  },
  li: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
}));

function User({ users, deleteUser }) {
  const classes = useStyles();
  console.log(users);
  return users.map((user, i) => {
    return (
      <li className={classes.li} key={i}>
        <ListItem button className={classes.li}>
          <NavLink className="nav-link" to={"/users/" + parseInt(user.id_user)}>
            <span>{i + 1}</span> &nbsp;
            <PersonOutlineTwoToneIcon />
            <ListItemText primary={user.user_name} />
            <ListItemText primary={user.time} />
            <span> you have &nbsp;{user.countTask} tasks</span>
          </NavLink>
        </ListItem>

        {/* <div>
            {" "}
            <i className="fas fa-user i"></i>
            <span>{user.user_name}</span>()
          </div> */}

        {/* <span>{user.time}</span>
          <span> you have &nbsp;{user.countTask} tasks</span> */}

        <Button
          onClick={() => {
            deleteUser(i);
          }}
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        {/* <button
          onClick={() => {
            deleteUser(i);
          }}
          type="button"
          className="btn btn-outline-danger"
        >
          <i className="fas fa-trash-alt"></i>
        </button> */}
      </li>
    );
  });
}

export default User;
