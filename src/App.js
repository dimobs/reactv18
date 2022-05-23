import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
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
        age: 42,
      }))
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h2>Name: {!name ? 'Loading...' : name}</h2>
      <h3>{info.age}  {info.name}   {info.hobbies[1]}</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount(x => x + 1)}>increase</button>
    </div>
  );
}

export default App;
