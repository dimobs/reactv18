import { useState, useEffect } from "react";
import { useAuth } from '../../contexs/AuthContex';
import { Navigate } from 'react-router-dom';

const MyList = () => {
    const {user} = useAuth();
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(res => res.json())
            .then(res => {
                setDogs(res.message);
            });
    }, []);

    if (!user.email) {
        return <Navigate to='/login' />
    }

    return (
        <>
            {dogs.map(x => (<img className="d-block w-5" src={x} alt="Third slide" />))}
        </>
    )
}

export default MyList;


