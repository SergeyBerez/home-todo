import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB-hPQZWluKy43wUjA7Zi6k5MpDR4ap7RY",
  authDomain: "react-quize-46f17.firebaseapp.com",
  databaseURL: "https://react-quize-46f17.firebaseio.com",
  projectId: "react-quize-46f17",
  storageBucket: "gs://react-quize-46f17.appspot.com",
  messagingSenderId: "822369206100",
  appId: "1:822369206100:web:eb939cd61dc1e529cbd2c1",
};
const app = firebase.initializeApp(firebaseConfig);
 export const database = app.database();

export const storage = firebase.storage()
// var storageRef = storage.ref()
export const authFirebase = app.auth()
export const firestore = app.firestore()

export default app;
