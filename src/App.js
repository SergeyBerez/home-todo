import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useAuth } from "./Context/Context";
import { useValue } from "./Context/ContextValue.js";
import { Route, Switch, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import MiniDrawer from "./LinksDrowerHeader/Drower";

import Home from "./pages/Home";
import Users from "./pages/Users/Users";

import UserPersonalTasks from "./pages/UsersTask/UserPersonalTasks";
import About from "./pages/About";
import Admin from "./Admin/Admin.js";
import { makeStyles } from "@material-ui/core/styles";
import { database } from "./Firebase/firebaseConfig.js";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "400px",
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: " 600px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: " 960px",
    },
  },
  h3: {
    marginTop: 150,
    marginLeft: 30,
  },
}));

function App() {
  const UID = "ar2szFVDDUZ4vEKla7r0lQqxve13";
  const classes = useStyles();
  const { authInfo } = useAuth();
  const {
    valueInput,
    valueInputTask,
    valueTodo,
    setValue,
    setValueInputTask,
    setValueTodor,
    setErrorMessage,
  } = useValue();

  const USERS_LOCAL_STORAGE = JSON.parse(localStorage.getItem("users")) || [];

  const message = [
    "приложение для создания пользователей и записей заметок",
    "At First You need to LOGIN or Register",
  ];
  const [stateUsers, setUsers] = useState(USERS_LOCAL_STORAGE);
  // const [userNameFromValue, setUserNameFromValue] = useState({ value: "", validate: false, touched: false })

  //===get user from firebase ======

  useEffect(() => {
    console.log("app useEffect", authInfo);
    const getTasksUsersFromFirebase = (params) => {
      let users = [...stateUsers];
      database.ref().on("value", (elem) => {
        if (elem.val()) {
          let newArrUser = Object.values(elem.val()).reduce((arr, obj) => {
            for (const iterator in obj) {
              arr.push(obj[iterator]);
            }
            return arr;
          }, []);
          if (authInfo.displayName) {
            let newUser = {
              id_user: authInfo.uid,
              time: new Date().toString().split("G")[0],
              user_name: authInfo.displayName,
              completed: false,
              tasks: [],
              countTask: 0,
            };
            newArrUser.push(newUser);
          }
          let usersTogether = users.concat(newArrUser);
          const uniqueArray = usersTogether.filter((obj, index, self) => {
            return (
              index ===
              self.findIndex((obj2) => {
                return obj2.id_user === obj.id_user;
              })
            );
          });
          console.log(uniqueArray);
          localStorage.setItem("users", JSON.stringify(uniqueArray));
          setUsers(uniqueArray);
        } else if (authInfo) {
          let users = [...stateUsers];
          let newUser = {
            id_user: authInfo.uid,
            time: new Date().toString().split("G")[0],
            user_name: authInfo.displayName,
            completed: false,
            tasks: [],
            countTask: 0,
          };
          users.push(newUser);
          const uniqueArray = users.filter((obj, index, self) => {
            return (
              index ===
              self.findIndex((obj2) => {
                return obj2.id_user === obj.id_user;
              })
            );
          });
          localStorage.setItem("users", JSON.stringify(uniqueArray));
          setUsers(uniqueArray);
        }
      });
    };
    getTasksUsersFromFirebase();
  }, [authInfo]);

  // ===post data to firebase===
  const CreateUserTaskInFirebase = (user) => {
    database
      .ref("users/" + user.id_user)
      .set(user)
      .then((user) => {});
  };
  // =========remove  data from firebase====
  const removeUserFromFirebase = (userId) => {
    console.log(userId);
    const user = database.ref("users").child(userId);
    user.remove();
  };
  //========== add user to firebase to local storage to state
  const addNewUser = () => {
    console.log(" function addNewUser");

    // validate || setErrorMessage("введите имя пользвателя больше 3 букв")
    if (valueInput.value.length > 3) {
      let newUser = {
        id_user: nanoid(),
        time: new Date().toString().split("G")[0],
        user_name: valueInput.value,
        completed: false,
        tasks: [],
        countTask: 0,
      };

      let users = [...stateUsers];
      users.push(newUser);
      const uniqueArray = users.filter((obj, index, self) => {
        return (
          index ===
          self.findIndex((obj2) => {
            return obj2.id_user === obj.id_user;
          })
        );
      });

      localStorage.setItem("users", JSON.stringify(uniqueArray));
      setUsers(uniqueArray);
      setValue({ ...valueInput, value: "" });

      CreateUserTaskInFirebase(newUser);

      setErrorMessage("");
    }
  };

  // === handle input when we clicked on button in field

  // ===handle input when we clicked on key enter ===
  const keyHandle = (e) => {
    if (e.keyCode === 13) {
      addNewUser();
    }
  };
  const keyHandleInputTask = (e, id_user, count_task) => {
    if (e.keyCode === 13) {
      addTodoTaskUser(id_user, count_task);
    }
  };

  const addTodoTaskUser = (id_user, count_task) => {
    console.log(valueInputTask.value.length > 3);
    if (valueInputTask.value.length > 3) {
      let users = [...stateUsers];
      let clone = Object.assign([], stateUsers);
      let updateUser = clone.find((user, i) => {
        return user.id_user === id_user;
      });

      updateUser.countTask = count_task + 1;
      const userTasks = [...updateUser.tasks];

      const date = new Date();
      userTasks.push({
        id_task: new Date().getTime() + 1,
        title: valueInputTask.value,
        time_task: `${new Date().toLocaleDateString()} :${date.getHours()}:${date.getMinutes()}`,
      });

      updateUser.tasks = userTasks;
      clone.push(updateUser);

      const uniqueArray = clone.filter((obj, index, self) => {
        return (
          index ===
          self.findIndex((obj2) => {
            return obj2.id_user === obj.id_user;
          })
        );
      });

      setUsers(uniqueArray);
      localStorage.setItem("users", JSON.stringify(uniqueArray));
      setValueInputTask({ ...valueInputTask, value: "" });
      setErrorMessage("");
      CreateUserTaskInFirebase(updateUser);
    } else {
      setErrorMessage("веедите заметку больше 3 символов");
    }
  };
  const editTask = (id_user, id_task) => {
    console.log(valueTodo.showModal);
    if (valueTodo.validate) {
      let users = [...stateUsers];
      let user = users.find((params) => {
        return params.id_user === id_user;
      });
      let userTasks = [...user.tasks];

      userTasks.map((item) => {
        if (item.id_task === id_task) {
          item.title = valueTodo.value;
        }
        return item;
      });
      user.tasks = userTasks;
      users.map((params) => {
        if (id_user === params.id_user) {
          params = user;
        }
        return params;
      });

      setUsers(users);
      localStorage.setItem("users", JSON.stringify(users));

      setValueTodor({ value: "", validate: false, showModal: false });
      CreateUserTaskInFirebase(user);
    }
  };

  const deleteUser = (i, idUser) => {
    let users = [...stateUsers];
    users.splice(i, 1);
    localStorage.setItem("users", JSON.stringify(users));

    removeUserFromFirebase(idUser);
    setUsers(users);
  };
  const deleteTask = (idUser, idTask, id) => {
    let users = [...stateUsers];
    let user = users.find((user) => {
      return user.id_user === idUser;
    });
    user.tasks.splice(id, 1);

    users.push(user);
    console.log(users);
    let uniqueUsers = users.filter((user, pos) => {
      return users.indexOf(user) === pos;
    });

    CreateUserTaskInFirebase(user);
    setUsers(uniqueUsers);
    localStorage.setItem("users", JSON.stringify(uniqueUsers));
  };
  console.log(stateUsers);
  return (
    <Container className={classes.root}>
      <MiniDrawer />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home users={stateUsers} />;
          }}
        />
        {authInfo.uid === UID ? (
          <Route
            path="/admin"
            render={() => {
              return <Admin></Admin>;
            }}
          />
        ) : null}
        <Route
          exact
          path="/users"
          render={() => (
            <Users
              addNewUser={addNewUser}
              keyHandle={keyHandle}
              // handleUserInput={handleUserInput}
              users={stateUsers}
              // errorMessage={errorMessage}
              // validate={userNameFromValue.validate}
              // value={userNameFromValue.value}
              // touched={userNameFromValue.touched}
              deleteUser={deleteUser}
              props={stateUsers}
            />
          )}
        />
        <Route
          path="/users/:id"
          render={(e) => (
            <UserPersonalTasks
              // userNameFromValue={userNameFromValue.value}
              valueTodo={valueTodo.value}
              history={e}
              users={stateUsers}
              keyHandle={keyHandleInputTask}
              addTodoTaskUser={addTodoTaskUser}
              editTask={editTask}
              // handleUserInput={handleUserInput}
              // changeTitlebyModal={changeTitlebyModal}
              deleteTask={deleteTask}
            />
          )}
        />
        <Route
          path="/about"
          render={() => {
            return <About message={message[0]}></About>;
          }}
        />
        <Redirect to="/"></Redirect>
        {/* <Route
                        render={() => {
                            return <h1 style={{ color: "red" }}> 404 not found page...</h1>
                        }}
                    /> */}
      </Switch>
    </Container>
  );
}

export default App;
