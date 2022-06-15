import {useMemo, useDeferredValue, useEffect} from 'react';

export default function List({input}) {
  const deferredInput = useDeferredValue(input); //low priority

const LIST_SIZE = 20000;
const list = useMemo(() => {
const l = [];

for (let i = 0; i < LIST_SIZE; i++) {
    l.push(<div key={i}>{deferredInput}</div>)
}
return l
}, [deferredInput])

useEffect(() => {
    console.log(`Input: ${input}\nDeferred: ${deferredInput}`);
},[input, deferredInput])

    return list
}
