import React, { useState, useEffect, useMemo } from 'react';

function MainUseMemo() {
    const [number, setNumber] = useState(2);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
         return slowFn(number);
}, [number])
    const themeStyle = useMemo(() =>{
        return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'red'
}},[dark])

    useEffect(() => {
       console.log('Theme change'); 

    },[themeStyle])

    return (
        <>
            <h2>Use Memo Efect</h2>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(truFals => !truFals)}>Change Dark</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    )

    function slowFn(x) {
        for (let i = 0; i <= 1000000000; i++) {}
        return x * 2
    }
}

export default MainUseMemo;