import React, { useState, useReducer } from "react";

// function countInitial() {
//     console.log('run Fn');
//     return 4;
// }

const reducer = (state, action) =>{ 
    switch (action.type) {
        case "increment":
            return  {count: state.count +1 ,theme: state.showText = false}
        case "decrement":
            return  {count: state.count +1 ,theme: state.showText = true}

            default:
          return state;
    }

}
const CountTwo = () => {
    //const [state, setState] = useState({ count: 4, theme: 'Grand Flor(0/5)' }) 
    const [state, setState] = useReducer(reducer, {count: 3, theme:true})


// function CountTwo() {
//     const [state, setState] = useState({ count: 4, theme: 'blue' })
    // const count = state.count;
    // const theme = state.theme;

    //function incremet() {
        // setState(prevState => {
        //     return { ...prevState, count: prevState.count + 1, theme: prevState.theme= 'You are going - Up0/5)'}
        // })
    //}

    // function decrement() {
    //     setState(prevState => {
    //     return {...prevState, count: prevState.count - 1, theme: prevState.theme= 'You are going - Dwon0/5)'}
    //     })
    //}

    return (
        <>
            <button onClick={() => {
                setState({ type: 'increment'}) 
            }}>+</button>
            <div>

            <h1>{state.count}</h1>
           {state.theme && <span>floor of bulding</span>}
            {/* <button onClick={decrement}>+</button> */}
            </div>
            <button onClick={() => {
                setState({ type: 'decrement'})
               
            }}>-</button>

        </>
    )
}

export default CountTwo;


