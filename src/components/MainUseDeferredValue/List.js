import {useMemo} from 'react';

export default function List({input}) {
const LIST_SIZE = 20000;
const list = useMemo(() => {
const l = [];

for (let i = 0; i < LIST_SIZE; i++) {
    l.push(<div key={i}>{input}</div>)
}
return l
}, [input])
    return list
}
