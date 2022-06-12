import React, { useReducer, useState } from 'react';
import Todo from './Todo';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return 'DAS';
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

export default function MainUseReducer() {
    const [name, setName] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }})
        setName('')
    }
    console.log(todos);

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </>
    )
}