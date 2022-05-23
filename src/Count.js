import{useEffect} from 'react';

const Counter = ({
    value
}) => {
useEffect(() =>{
    console.log(value);

    return () =>{
        console.log('Unmount');
    }
}, [])

return (
    <h3>{value}</h3>
);
}

export default Counter;