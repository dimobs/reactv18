import React, {useState, useEffect} from 'react';

function List({getItems}) {
const [x, setX] = useState([])

useEffect(() => {
    setX(getItems(7))
    console.log('Updating item')
},[getItems])

    return x.map(n => <div key={n}>{n}</div>)
    }
export default List;