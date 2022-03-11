import React, { useHistory } from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import DeleteIcon from "@material-ui/icons/Delete";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  navLink: {
    display: "flex",
    flexGrow: 1,
    justifyContent: " space - between",
    textAlign: "center",
    textDecoration: " none",
  },
  button: {
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
  divMedia: {
    [theme.breakpoints.up("xs")]: {
      margin: 8,
      fontSize: ".7rem",
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      margin: 8,
      width: "20%",
      fontSize: ".9rem",
      textAlign: "right",
    },
    [theme.breakpoints.up("md")]: {
      margin: 8,
      fontSize: "1rem",
    },
  },

  icon: {
    fontSize: "2rem",
  },
  item: {
    flex: "0 auto",
  },
  ListItemText: {
    marginLeft: "auto",
    "& span": {
      [theme.breakpoints.up("xs")]: {
        margin: 8,
        fontSize: ".5rem",
      },
      [theme.breakpoints.up("sm")]: {
        margin: 8,
        fontSize: ".7rem",
      },
      [theme.breakpoints.up("md")]: {
        margin: 8,
        fontSize: ".8rem",
      },
    },
  },
}));

function User({ users, deleteUser }) {
  const classes = useStyles();

  return users.map((user, i) => {
    return (
      <div key={nanoid()}>
        <ListItem button className={classes.root}>
          <NavLink className={classes.navLink} to={"/users/" + user.id_user}>
            <ListItemText className={classes.item} primary={i + 1} />
            &#8195;
            <PersonOutlineTwoToneIcon className={classes.icon} />
            &#8195;
            <ListItemText primary={user?.user_name} />
            <ListItemText primary={user?.tasks?.length} />
            <ListItemText
              className={classes.ListItemText}
              primary={user.time}
            />
          </NavLink>
          <div className={classes.divMedia}>
            <Button
              onClick={() => {
                deleteUser(i, user.id_user);
              }}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>
        </ListItem>
        <Divider />
      </div>
    );
  });
}

export default User;
