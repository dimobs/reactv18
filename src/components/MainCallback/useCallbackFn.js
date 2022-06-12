import React, {useState, useCallback} from 'react';
import List from './List';


export default function useCallbackFn () {
const [number, setNumber] = useState(5);
const [dark, setDark] = useState(false);

//разликата с useMemo e, че не връща стойст, 
//а позволява да се презполва ф-цията в друг модул.
//useCallback се използва при рефиреншън иклолити
const getItems = useCallback((incrementor) => {
    return [number + incrementor, number + 1+ incrementor, number + 2+ incrementor];
}, [number])

const theme = {
    backgroundColor: dark 
    ? '#333'
    : '#fff',
    color: dark
    ? '#fff'
    : '#333'
}


    return (
        <>
        <p>This is CallBack Page</p>
        <div style={theme}>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(x => !x)}>Toggle Theme</button>
        <List getItems={getItems} />
        </div>
        </>
    )
}
 