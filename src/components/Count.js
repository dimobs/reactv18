import { useState, useEffect } from 'react'


const Count = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(5);
    const [info, setInfo] = useState({
      name: 'Dimo',
      age: 41,
      hobbies: ['first', 'secound', 'third']
    });

    useEffect(() => {
        setTimeout(() => {
          setName('Pesho');
          setInfo(oldState => ({
            ...oldState,
            //използват се само немутиращи 
            hobbies: [...oldState.hobbies, 'fourth'],
            age: 42,
          }))
        }, 2000);
      }, []);

 return (
<>
     <div className="App">
<h2>Name: {!name ? 'Loading...' : name}</h2>
<h3>{info.age}  {info.name}   {info.hobbies[1]}</h3>
{count < 10
? {count} 
: null  
}
<button onClick={() => setCount(x => x + 1)}>increase</button>
</div>
</>
)   
}