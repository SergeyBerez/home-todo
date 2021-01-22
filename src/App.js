import React, { useState, useEffect } from "react"
// import firebase from "./Firebase/firebaseConfig"
import Context from "./Context/Context"
import { Route, Switch, Redirect } from "react-router-dom"
import Container from "@material-ui/core/Container"

import "./App.css"
import MiniDrawer from "./Links/Drower"

import Home from "./pages/Home"
import Users from "./pages/Users/Users"
import UserPersonalTasks from "./pages/Users/UserPersonalTasks"
import About from "./pages/About"
import { makeStyles } from "@material-ui/core/styles"
import firebase from "./Firebase/firebaseConfig.js"

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
        marginTop: 70,
    },
}))

function App() {
    const classes = useStyles()

    const USERS_LOCAL_STORAGE = JSON.parse(localStorage.getItem("users")) || []

    const [stateUsers, setUsers] = useState(USERS_LOCAL_STORAGE)
    const [valueUser, setValueUser] = useState({ value: "" })
    const [valueTodo, setValueTodor] = useState({ value: "" })

    useEffect(() => {
        getUsersFromFairbase()
    }, [])
    const [auth, setAuth] = useState(false)
    const authisLogged = () => {
        setAuth(true)
    }
    const authIsExit = () => {
        setAuth(false)
    }
    const getUsersFromFairbase = async (params) => {
        let users = [...stateUsers]
        const db = firebase.database()
        const value = db.ref("users")
        value.on("value", (elem) => {
            if (elem.val()) {
                let newArrUser = users.concat(Object.values(elem.val()))
                let uniqeArray = newArrUser.filter((item, index, self) => {
                    return (
                        index ===
                        self.findIndex((obj) => {
                            return item.id_user === obj.id_user
                        })
                    )
                })

                localStorage.setItem("users", JSON.stringify(uniqeArray))
                setUsers(uniqeArray)
            }
        })

        // let response = await fetch("https://react-quize-46f17.firebaseio.com/users.json")

        // console.log(users)
        // // let newUsers = [];
        // if (response.ok) {
        //     let json = await response.json()
        //     console.log("getUsersFromFairbase", json)
        //     if (json !== null) {
        //         Object.values(json).forEach((objFirestore) => {
        //             users.push(objFirestore)
        //         })
        //     }
        // }
    }
    const postUsertoFirebase = (user) => {
        const db = firebase.database()
        db.ref("users/" + user.id_user)
            .set(user)
            .then((user) => {
                console.log(user)
            })
    }

    const removeUserFromFirebase = (userId) => {
        const db = firebase.database()
        const user = db.ref("users").child(userId)
        user.remove()
    }
    const addUser = () => {
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
            console.log("change title")
        }
    }
    const changeTitleUserTask = (value) => {
        setValueUser({ value })
    }

    const changeTitlebyModal = (value) => {
        setValueTodor({ value })
    }
    const keyHandle = (e) => {
        if (e.keyCode === 13 && valueUser.value.length > 2) {
            addUser()
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
            let updateUser = users.find((user, i) => {
                return user.id_user === id_user
            })

            updateUser.countTask = count_task + 1
            const userTasks = [...updateUser.tasks]
            const date = new Date()
            userTasks.push({
                id_task: new Date().getTime() + 1,
                title: valueUser.value,
                time_task: `${new Date().toLocaleDateString()} :${date.getHours()}:${date.getMinutes()}`,
            })
            updateUser.tasks = userTasks
            setUsers(users)
            localStorage.setItem("users", JSON.stringify(users))
            setValueUser({ value: "" })
            postUsertoFirebase(updateUser)
        }
    }
    const editTask = (id_user, id_task) => {
        let users = [...stateUsers]
        let user = users.find((params) => {
            return params.id_user === id_user
        })
        let userTasks = [...user.tasks]

        userTasks.map((item) => {
            if (item.id_task === id_task) {
                item.title = valueTodo.value
            }
            return item
        })
        user.tasks = userTasks
        users.map((params) => {
            if (id_user === params.id_user) {
                params = user
            }
            return params
        })

        setUsers(users)
        localStorage.setItem("users", JSON.stringify(users))
        setValueTodor({ value: "" })
        postUsertoFirebase(user)
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
    const deleteUser = (i, idUser) => {
        let users = [...stateUsers]
        users.splice(i, 1)
        setUsers(users)
        removeUserFromFirebase(idUser)
        localStorage.setItem("users", JSON.stringify(users))
    }
    const deleteTask = (idUser, idTask, id) => {
        console.log(id)
        let users = [...stateUsers]
        let user = users.find((user) => {
            return user.id_user === idUser
        })
        user.tasks.splice(id, 1)

        users.push(user)
        console.log(users)
        let uniqueUsers = users.filter((user, pos) => {
            console.log(user, pos)
            console.log("users indexOf", users.indexOf(user))
            return users.indexOf(user) === pos
        })
        postUsertoFirebase(user)
        setUsers(uniqueUsers)
        localStorage.setItem("users", JSON.stringify(uniqueUsers))
    }

    return (
        <Context.Provider value={{ auth, authisLogged, authIsExit }}>
            <Container className={classes.root}>
                <MiniDrawer />
                <Switch>
                    <Route
                        exact
                        path="/todo-material-firebase"
                        render={() => {
                            return <Home users={stateUsers} />
                        }}
                    />
                    {auth ? (
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
                            )}
                        />
                    ) : (
                        <Route
                            exact
                            path="/users"
                            render={() => <h3 className={classes.h3}>At First You need to LOGIN or Register</h3>}
                        />
                    )}

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
                    <Route path="/about" component={About} />
                    <Redirect to="/todo-material-firebase"></Redirect>
                    <Route
                        render={() => {
                            return <h1 style={{ color: "red" }}> 404 not found page...</h1>
                        }}
                    />
                </Switch>
            </Container>
        </Context.Provider>
    )
}

export default App
