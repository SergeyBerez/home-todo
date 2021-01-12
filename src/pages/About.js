import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: { marginTop: 70 },
}));
export default function About(params) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="info">
        <AlertTitle></AlertTitle>
        приложение для создания пользователей и записей заметок &nbsp; &nbsp;
        <strong>версия &nbsp;1.1.1</strong>
      </Alert>
    </div>
  );
}
