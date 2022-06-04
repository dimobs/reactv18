import React, {useState, useEffect} from "react";

export default function PracticUseEffect() {
const [resourceType, setResourceType] = useState('')
const [item, setItem] = useState([]);
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const handleResize = () => {
    setWindowWidth(window.innerWidth)
}

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItem(json))
   
},[resourceType])

useEffect(() => {
    window.addEventListener('resize', handleResize)
   
    return () => {
window.removeEventListener('resize', handleResize)
    }
},[])

    return (
        <>
        <h1>Hello, useEffect</h1>
        <button onClick={()=>setResourceType('posts')}>Post</button>
        <button onClick={()=>setResourceType('users')}>Users</button>
        <button onClick={()=>setResourceType('comments')}>Comments</button>
       <h2>You Choose: {resourceType}</h2>
       {item.map(x =>{
           return <pre>{JSON.stringify(item)}</pre>
       })}
       {windowWidth}
        </>
    )
}