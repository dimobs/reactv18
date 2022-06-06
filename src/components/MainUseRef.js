import React, {useState, useEffect, useRef} from "react";

export default function MainUseRef () {
const [name, setName] = useState('');
const inputRef = useRef();//setva => <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
const startHere = useRef();
//{current: 0}
// const renderCount = useRef(0);

// useEffect(() => {
    // renderCount.current = renderCount.current + 1
    // })
    useEffect(() => {
        startHere.current.focus()
    },[])

useEffect(() => {
    inputRef.current = name
},[name])

// function focus() {
//     inputRef.current.focus();
// }

    return (
        <>
        <span>Welcome to Ref Page</span>
        <div>
        <label>Secound field</label>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>
                <label>First field</label>
        <input ref={startHere} />
            </div>
        <p>Your name is: {name} 
        Here you can see previous letter: <span>{inputRef.current}</span></p>
        </div>
        </>
    )
}