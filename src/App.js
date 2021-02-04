import React, { useState, useEffect, useContext } from "react"

import { Context } from "./Context/Context"

import { Route, Switch, Redirect } from "react-router-dom"
import Container from "@material-ui/core/Container"

import "./App.css"
import MiniDrawer from "./LinksDrowerHeader/Drower"

import Home from "./pages/Home"
import Users from "./pages/Users/Users"
import UserPersonalTasks from "./pages/UsersTask/UserPersonalTasks"
import About from "./pages/About"
import { makeStyles } from "@material-ui/core/styles"
import { database } from "./Firebase/firebaseConfig.js"

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
}))

function App() {
    const classes = useStyles()
    const { auth } = useContext(Context)
    // console.log(auth)
    const USERS_LOCAL_STORAGE = JSON.parse(localStorage.getItem("users")) || []
    const message = [
        "приложение для создания пользователей и записей заметок",
        "At First You need to LOGIN or Register",
    ]
    const [stateUsers, setUsers] = useState(USERS_LOCAL_STORAGE)
    const [valueUser, setValueUser] = useState({ value: "" })
    const [valueTodo, setValueTodor] = useState({ value: "" })

    //===get user from firebase ======
    useEffect(() => {
        const getUsersFromFirebase = (params) => {
            let users = [...stateUsers]

            database.ref().on("value", (elem) => {
                if (elem.val()) {
                    let newArrUser = Object.values(elem.val()).reduce((arr, obj) => {
                        for (const iterator in obj) {
                            arr.push(obj[iterator])
                        }
                        return arr
                    }, [])

                    let usersTogether = users.concat(newArrUser)

                    let uniqeArray = Array.from(new Set(usersTogether.map(JSON.stringify))).map(JSON.parse)
                    // let uniqeArray = newArrUser.filter((item, index, self) => {
                    //     console.log(item, index, self)
                    //     return (
                    //         index ===
                    //         self.findIndex((obj) => {
                    //             return item.id_user === obj.id_user
                    //         })
                    //     )
                    // })

                    localStorage.setItem("users", JSON.stringify(uniqeArray))
                    setUsers(uniqeArray)
                }
            })

            // call our function get user from firebase
        }
        getUsersFromFirebase()
    }, [])

    // ===post data to firebase===
    const postUsertoFirebase = (user) => {
        database
            .ref("users/" + user.id_user)
            .set(user)
            .then((user) => {})
    }
    // =========remove  data from firebase====
    const removeUserFromFirebase = (userId) => {
        const user = database.ref("users").child(userId)
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
            console.log(users)
            localStorage.setItem("users", JSON.stringify(users))
            setUsers(users)
            setValueUser({ value: "" })
            postUsertoFirebase(newUser)
        } else {
            console.log("change title")
        }
    }

    // === handle input when we clicked on button in field
    const changeTitleUserTask = (value) => {
        setValueUser({ value })
    }

    const changeTitlebyModal = (value) => {
        setValueTodor({ value })
    }

    // ===handle input when we clicked on key enter ===
    const keyHandle = (e) => {
        if (e.keyCode === 13 && valueUser.value.length > 2) {
            addUser()
        }
    }
    const keyHandleInputTask = (e, id_user, count_task) => {
        if (e.keyCode === 13 && valueUser.value.length > 2) {
            addTodoTaskUser(id_user, count_task)
        }
    }

    const addTodoTaskUser = (id_user, count_task) => {
        console.log(id_user, count_task);
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
             console.log(updateUser.completed)
console.log(updateUser.tasks);
            updateUser.tasks = userTasks
             console.log("ddTodoTaskUser",users)
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

    const deleteUser = (i, idUser) => {
        let users = [...stateUsers]
        console.log(users)
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
            return users.indexOf(user) === pos
        })
        postUsertoFirebase(user)
        setUsers(uniqueUsers)
        localStorage.setItem("users", JSON.stringify(uniqueUsers))
    }

    return (
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
                        path="/todo-material-firebase/users"
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
                        path="/todo-material-firebase/users"
                        render={() => {
                            return <About message={message[1]}></About>
                        }}
                    />
                )}

                {auth && (
                    <Route
                        path="/todo-material-firebase/users/:id"
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
                )}

                <Route
                    path="/about"
                    render={() => {
                        return <About message={message[0]}></About>
                    }}
                />
                <Redirect to="/todo-material-firebase"></Redirect>
                {/* <Route
                        render={() => {
                            return <h1 style={{ color: "red" }}> 404 not found page...</h1>
                        }}
                    /> */}
            </Switch>
        </Container>
    )
}

export default App
