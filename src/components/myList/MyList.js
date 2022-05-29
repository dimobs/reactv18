import { useState, useEffect } from "react";
import {isAuth} from '../../hoc/IsAuth';

const MyList = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(res => res.json())
            .then(res => {
                setDogs(res.message);
            });
    }, []);

    return (
        <>
            {dogs.map(x => (<img className="d-block w-5" src={x} alt="Third slide" />))}
        </>
    )
}

const EnhancedComponent = isAuth(MyList)

export default EnhancedComponent;


