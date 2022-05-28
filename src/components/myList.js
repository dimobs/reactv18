import { useState, useEffect } from 'react';

const myList = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breads/image/random/3')
            .then(res => res.json())
            .then(res => {
                setDogs(res.message)
    });
    }, []);


    return (
        <h1>dooogs</h1>
    )
}

export default myList;