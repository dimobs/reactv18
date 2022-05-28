import useFetch from "../hooks/useFetch";
// import { useContext } from "react";
// import AuthContex from '../contexs/AuthContex';


const CharacterList = () => {
    // const count = useContext(AuthContex);
    const { state: characters } = useFetch('https://swapi.dev/api/people')

    return (
        <>
        <ul>
            {characters.map(x => <li key={x.name}>{x.name}</li>)}
        </ul>
        {/* <h3>{count}</h3> */}
        </>
    );
};

export default CharacterList;