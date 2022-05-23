import { useState, useEffect } from 'react'
import Counter from './Count'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(5);
  const [info, setInfo] = useState({
    name: 'Dimo',
    age: 41,
    hobbies: ['first', 'secound', 'third']
  });

  //ComponentDidMount
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
    <div className="App">
      <h2>Name: {!name ? 'Loading...' : name}</h2>
      <h3>{info.age}  {info.name}   {info.hobbies[1]}</h3>
     {count < 10
      ? <Counter value={count } />
    : null  
    }
      <button onClick={() => setCount(x => x + 1)}>increase</button>
    </div>
  );
}

export default App;
