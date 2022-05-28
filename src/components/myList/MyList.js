import { useState, useEffect } from "react";

const MyList = () => {
const [dogs, setDogs] = useState([]);

useEffect(() =>{
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(res => res.json())
    .then(res => {
        setDogs(res.message);
    });
}, []);
console.log(dogs);
    return (
        <>
        {dogs.map(x =>(<img className="d-block w-5" src={x} alt="Third slide" />))}
        </>
    )
}

export default MyList;


