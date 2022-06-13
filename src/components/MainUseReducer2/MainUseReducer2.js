import React, { useState, useReducer, useRef, useEffect } from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
switch (action.type) {
    case ACTIONS.ADD_TODO:
                
        return ([...todos, newTodo(action.paypload.name)])

    default:
        break;
}
}

function newTodo(name) {


}
export default function MainUseReducer2() {
    const  startType = useRef();
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        startType.current.focus()
    },[])

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO,
            paypload: {name: name}
        })
        setName('');

    }

    return (
        <>
            <h2>Welcome!</h2>
            <form onSubmit={handlerSubmit}>
                <input ref={startType} type='text' value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(x => {
                <Todo />
            })}
        </>
    )
}