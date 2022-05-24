import useFetch from "../hooks/useFetch";


const CharacterList = () => {
    const { state: characters, isLoading, error } = useFetch('https://swapi.dev/api/people')

    return (
        <ul>
            {characters.map(x => <li key={x.name}>{x.name}</li>)}
        </ul>
    );
};

export default CharacterList;