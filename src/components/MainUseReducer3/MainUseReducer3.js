import React, { useRef, useReducer, useState, useEffect } from 'react'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function newTodos(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodos(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(x => {
                if (x.id === action.payload.id) {
                    return { ...x, complete: !x.complete }
                }
                return x
            })
            case ACTIONS.DELETE_TODO:
                return todos.filter(x => x.id !== action.payload.id)
        default:
            return todos
    }
}

export default function MainUseReducer3() {
    const [name, setName] = useState();
    const inputTyping = useRef();
    const [todos, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        inputTyping.current.focus();
    }, [])

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { name: name }
        })
        setName('')
    }

    return (
        <div>
            Welcome!
            <form onSubmit={handlerSubmit}>
                <input ref={inputTyping} type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </form>
            {todos.map(x => {
                return <Todo key={x.id} x={x} dispatch={dispatch} />
            })}
        </div>
    )
}
