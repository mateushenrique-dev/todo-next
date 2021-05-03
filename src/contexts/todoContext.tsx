import React, { useState } from 'react'
import 'array.prototype.move'

const todoContext = React.createContext(null)

export function TodoContextProvider(props) {

    console.log(props)

    const [todos, setTodos] = useState([
        {text: 'Complete online Javascript course', checked: false},
        {text: 'Jag around the park 3x', checked: false},
        {text: '10 minutes meditation', checked: false},
        {text: 'Read for 1 hour', checked: false},
        {text: 'Pick up groceries', checked: false},
        {text: 'Complete Todo App on Front end Mentor', checked: true},
    ])
    const [tempTodos, setTempTodos] = useState([])

    function handleCreateNewTodo(e) {
        if(e.key === 'Enter') {
            if(e.target.value != '') {
                setTodos(todos => [...todos, {text: e.target.value, checked: false}])
            }          
        }
    }

    function handleCheck(index) {
        const newTodo = [...todos]
        newTodo[index].checked = !newTodo[index].checked
        setTodos(newTodo)
    }

    function handleRemove(index) {
        const filteredTodos = todos.filter(todo => todo !== todos[index]);
        setTodos(filteredTodos);
    }

    function handleShowAll(e) {
        removeAndAddActiveClass(e)
        setTempTodos([])
    }

    function handleShowActive(e) {
        const activeTodos = todos.filter(todo => todo.checked === false)
        removeAndAddActiveClass(e)
        setTempTodos(activeTodos)
    }

    function handleShowCompleted(e) {
        const activeTodos = todos.filter(todo => todo.checked === true)
        removeAndAddActiveClass(e)
        setTempTodos(activeTodos)
    }

    function handleClearCompleted(e) {
        const activeTodos = todos.filter(todo => todo.checked === false)
        setTodos(activeTodos)
    }

    function removeAndAddActiveClass(e) {
        const buttonsAtivos = document.querySelectorAll('.active')
        buttonsAtivos.forEach((button) => {
            button.classList.remove('active')
        })
        e.target.classList.add('active')
    }


    return (
        <todoContext.Provider value={
            {
                handleCreateNewTodo,
                handleRemove,
                handleShowActive,
                handleShowCompleted,
                handleClearCompleted,
                handleShowAll,
                handleCheck,
                todos,
                tempTodos
            }
        }>
            {props.children}
        </todoContext.Provider>
    )
}

export function useTodoContext() {
    return React.useContext(todoContext)
}