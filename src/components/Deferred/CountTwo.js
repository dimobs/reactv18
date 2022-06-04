import React, { useState } from "react";

// function countInitial() {
//     console.log('run Fn');
//     return 4;
// }

const CountTwo = () => {
    const [state, setState] = useState({ count: 4, theme: 'blue' }) 


// function CountTwo() {
//     const [state, setState] = useState({ count: 4, theme: 'blue' })
    const count = state.count;
    const theme = state.theme;

    function incremet() {
        setState(prevCount => {
            return { ...prevCount, count: prevCount.count + 1 }
        })
    }

    function decrement() {
        setState(prevCount => {
        return {...prevCount, count: prevCount.count - 1}
        })
    }

    return (
        <>
            <button onClick={incremet}>+</button>
            <h1>{count}</h1>
            <h2>{theme}</h2>
            <button onClick={decrement}>+</button>
        </>
    )
}

export default CountTwo;


