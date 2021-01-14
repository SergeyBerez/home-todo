import React, { useState, useEffect } from "react"
import firebase from "firebase"

import { Route, Switch, NavLink, Redirect } from "react-router-dom"
import Container from "@material-ui/core/Container"

import "./App.css"
import MiniDrawer from "./Links/Drower"

import Home from "./pages/Home"
import Users from "./pages/Users/Users"
import UserPersonalTasks from "./pages/Users/UserPersonalTasks"
import About from "./pages/About"

// import Home from "./components/pages/list";

function App() {
    // const classes = useStyles();
    // const [state, setState] = useState({ isShow: true });

    // const onLogin = () => {
    //   let isShow = !state.isShow;
    //   setState({ isShow });
    // };

    const USERS_LOCAL_STORAGE = JSON.parse(localStorage.getItem("users")) || []

    const [stateUsers, setUsers] = useState(USERS_LOCAL_STORAGE)
    const [valueUser, setValueUser] = useState({ value: "" })
    const [valueTodo, setValueTodor] = useState({ value: "" })
    // useEffect(() => {
    //   setUsers(store);
    // });
    useEffect(() => {
        console.log("use effect")
        getUsersFromFairbase()
    }, [])

    const getUsersFromFairbase = async (params) => {
        let response = await fetch("https://react-quize-46f17.firebaseio.com/users.json")
        let users = [...stateUsers]
        console.log(users)
        // let newUsers = [];
        if (response.ok) {
            let json = await response.json()
            console.log("getUsersFromFairbase", json)
            if (json !== null) {
                Object.values(json).forEach((objFirestore) => {
                    users.push(objFirestore)
                })
            }
        }
        let uniqeArray = Array.from(new Set(users.map(JSON.stringify))).map(JSON.parse)
        console.log(uniqeArray)

        localStorage.setItem("users", JSON.stringify(uniqeArray))
        setUsers(uniqeArray)
    }
    const postUsertoFirebase = (userParam) => {
        const db = firebase.database()
        db.ref("users/" + userParam.id_user).set(userParam)
    }

    const addUser = () => {
        console.log("adduser")
        let newUser = {
            id_user: Date.now() + 1,
            time: new Date().toString().split("G")[0],
            user_name: valueUser.value,
            completed: false,
            tasks: [],
            countTask: 0,
        }
        if (valueUser.value.length > 2) {
            let users = [...stateUsers]
            users.push(newUser)
            localStorage.setItem("users", JSON.stringify(users))
            setUsers(users)
            setValueUser({ value: "" })
            postUsertoFirebase(newUser)
        } else {
        }
    }
    const changeTitleUserTask = (value) => {
        console.log("vlaue", value)
        //let arr = {...stateUsers;}
        //  setUsers({ todos: arr,});
        setValueUser({ value })
    }
    const preventDefault = (e) => {
        console.log(e.target)
        e.preventDefault()
    }
    const changeTitlebyModal = (value) => {
        setValueTodor({ value })
    }
    const keyHandle = (e) => {
        console.log("keyHandle")
        if (e.keyCode === 13 && valueUser.value.length > 2) {
            addUser()
            // if (id_user) {
            //   addTodoTaskUser(id_user, count_task)
            // }
        }
    }
    const keyHandleInputTask = (e, id_user, count_task) => {
        console.log("keyHandleInputTask", id_user, count_task)
        if (e.keyCode === 13 && valueUser.value.length > 2) {
            addTodoTaskUser(id_user, count_task)
        }
    }

    const addTodoTaskUser = (id_user, count_task) => {
        console.log("ddTodoTaskUser")
        if (valueUser.value.length > 2) {
            let users = [...stateUsers]
            let user = users.find((user, i) => {
                return user.id_user === id_user
            })

            user.countTask = count_task + 1
            const userTasks = [...user.tasks]
            const date = new Date()
            userTasks.push({
                id_task: new Date().getTime() + 1,
                title: valueUser.value,
                time_task: `${new Date().toLocaleDateString()} :${date.getHours()}:${date.getMinutes()}`,
            })
            user.tasks = userTasks

            setUsers(users)
            localStorage.setItem("users", JSON.stringify(users))
            setValueUser({ value: "" })
            postUsertoFirebase(user)

            console.log("user===================", user)
            console.log("user===================", users)
        }
    }
    const editTask = (id_user, id_task) => {
        console.log(id_user, id_task)
        let users = [...stateUsers]
        let user = { ...users[id_user] }
        let userTasks = [...users[id_user].tasks]
        console.log(userTasks)

        let tasks = userTasks.map((item) => {
            if (item.id_task === id_task) {
                item.title = valueTodo.value
            }
            return item
        })
        userTasks = tasks
        user.tasks = userTasks
        users[id_user] = user

        setUsers({ ...users })
        localStorage.setItem("users", JSON.stringify({ ...users }))
        setValueTodor({ value: "" })
    }
    // const changeChecked = (e, i) => {
    //   let todos = [...stateUsers.todos];
    //   todos[i].completed = e.target.checked;

    //   setUsers({ todos, value: stateUsers.value });
    // };

    // const onShowUserTask = (id) => {
    //   let todos = [...stateUsers.todos].map((user) => {
    //     if (user.id === id) {
    //       user.completed = !user.completed;
    //     }
    //     return user;
    //   });

    //   console.log(stateUsers);
    //   setUsers({ todos, value: stateUsers.value });
    // };
    const deleteUser = (idUser) => {
        let users = [...stateUsers]
        users.splice(idUser, 1)
        setUsers(users)
        postUsertoFirebase(users)
        localStorage.setItem("users", JSON.stringify(users))
    }
    const deleteTask = (idUser, idTask, id) => {
        console.log(id)
        let users = [...stateUsers]
        let user = users.find((user) => {
            return user.id_user === idUser
        })
        user.tasks.splice(id, 1)
        // let userTasks = user.tasks.filter((task) => {
        //   return task.id_task !== idTask;
        // });

        // user.tasks = userTasks;
        users.push(user)
        let arrUsers = users.filter((user, pos) => {
            // console.log(users.indexOf(user), pos);
            return users.indexOf(user) === pos
        })
        console.log(users)
        console.log(user)
        // Object.assign(user, users);

        // let tasks = userTasks.filter((task) => {
        //   return task.id_task !== id_task;
        // });
        // user.tasks = tasks;
        // users[id_user] = user;
        postUsertoFirebase(arrUsers)
        setUsers(arrUsers)
        localStorage.setItem("users", JSON.stringify(arrUsers))
        // setValueUser({ value: "" });
    }

    return (
        <Container maxWidth="md">
            <MiniDrawer />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/users"
                    render={() => (
                        <Users
                            addUser={addUser}
                            keyHandle={keyHandle}
                            changeTitle={changeTitleUserTask}
                            users={stateUsers}
                            value={valueUser.value}
                            deleteUser={deleteUser}
                        />
                    )}></Route>
                <Route
                    path="/users/:id"
                    render={(e) => (
                        <UserPersonalTasks
                            valueUser={valueUser.value}
                            valueTodo={valueTodo.value}
                            history={e}
                            users={stateUsers}
                            keyHandle={keyHandleInputTask}
                            addTodoTaskUser={addTodoTaskUser}
                            editTask={editTask}
                            changeTitleUserTask={changeTitleUserTask}
                            changeTitlebyModal={changeTitlebyModal}
                            deleteTask={deleteTask}
                        />
                    )}
                />
                <Route path="/about" component={About}></Route>
                <Redirect to="/"></Redirect>
                <Route
                    render={() => {
                        return <h1 style={{ color: "red" }}> 404 not found page...</h1>
                    }}
                />
            </Switch>
        </Container>
    )
}

export default App
