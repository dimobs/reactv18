import {ACTIONS} from './MainUseReducer2';
//rfc


export default function Todo({x, dispatch}) {

    return(
        <div>
           <span style={{color: x.complete 
           ? '#AAA'
           : '#000'
        }}>{x.name}</span> 
<button onClick={() => dispatch({
    type:  ACTIONS.TOGGLE_TODO, 
    payload: {id: x.id}
})}
>TOGGLE_TODO</button>
<button onClick={() => dispatch({
    type:  ACTIONS.DELETE_TODO, 
    payload: {id: x.id}
})}
>DELETE_TODO</button>
        </div>

    )
}