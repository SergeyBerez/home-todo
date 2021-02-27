import React, { useContext, useState } from "react"
const Context = React.createContext()
export const useValue = (param) => {
    return useContext(Context)
}
function ContextValue({ children }) {
    const [valueInput, setValue] = useState({ value: "", validate: false, touched: false })
    const [valueInputTask, setValueInputTask] = useState({ value: "", validate: false, touched: false })
    const [valueTodo, setValueTodor] = useState({ value: "", showModal: false, validate: false })
    const [errorMessage, setErrorMessage] = useState("")
    const handleUserInput = (e) => {
        const value = e.target.value.trim()

        const validate = /^[A-Z0-9]+[A-Z]{2,4}$/i.test(value)

        setValue((prevstate) => {
            if (validate) {
                setErrorMessage("")
                return {
                    value,
                    validate,
                    touched: false,
                }
            } else {
                setErrorMessage("введите имя пользвателя больше 3 букв")
                return {
                    value,
                    validate,
                    touched: true,
                }
            }
        })
    }
    const handleUserInputTask = (e) => {
        const value = e.target.value

        const validate = /^[A-Z0-9]+[A-Z]{2,4}$/i.test(value)

        setValueInputTask((prevstate) => {
            if (validate) {
                console.log("11111111111111111", validate)
                setErrorMessage("")
                return {
                    value,
                    validate,
                    touched: false,
                }
            } else {
                setErrorMessage("введите задачу пользвателя больше 3 букв")
                return {
                    value,
                    validate,
                    touched: true,
                }
            }
        })
    }

    const changeTitlebyModal = (e, textInput) => {
        const value = e.target.value.trim()
        console.log(textInput.current)
        const validate = /^[A-Z0-9]+[A-Z]{2,4}$/i.test(value)

        if (validate) {
            setValueTodor({ ...valueTodo, value: value, validate, showModal: true })
        } else {
            setValueTodor({ ...valueTodo, value: value, validate, showModal: true })
        }
    }

    return (
        <Context.Provider
            value={{
                valueInput,
                valueInputTask,
                valueTodo,
                handleUserInput,
                handleUserInputTask,
                setValue,
                setValueInputTask,
                setValueTodor,
                changeTitlebyModal,
                errorMessage,
                setErrorMessage,
            }}>
            {children}
        </Context.Provider>
    )
}

export default ContextValue
