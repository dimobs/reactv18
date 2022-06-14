import React from 'react'
import {ACTIONS} from './MainUseReducer3'

export default function Todo({x, dispatch}) {

    return (
    <div>
     <span style={{color: x.complete 
     ? '#AAA'
     : '#000' 
     }}>{x.name}</span> 
     <button onClick={() => dispatch({
        type: ACTIONS.TOGGLE_TODO, 
        payload: {id: x.id}
     })}>ToggleTodo</button>
         <button onClick={() => dispatch({
        type: ACTIONS.DELETE_TODO, 
        payload: {id: x.id}
     })}>DELETE</button>
    </div>
  )
}
