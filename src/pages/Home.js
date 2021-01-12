import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: { marginTop: 70 },
}));
export default function Home() {
  const classes = useStyles();
  return <h1 className={classes.root}>home page</h1>;
}
