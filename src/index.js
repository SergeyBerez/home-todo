import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB-hPQZWluKy43wUjA7Zi6k5MpDR4ap7RY",
  authDomain: "react-quize-46f17.firebaseapp.com",
  databaseURL: "https://react-quize-46f17.firebaseio.com",
  projectId: "react-quize-46f17",
  storageBucket: "react-quize-46f17.appspot.com",
  messagingSenderId: "822369206100",
  appId: "1:822369206100:web:eb939cd61dc1e529cbd2c1",
};
firebase.initializeApp(firebaseConfig);
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
