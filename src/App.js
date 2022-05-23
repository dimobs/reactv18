import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setName('Pesho')
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h2>Name: {!name ? 'Loading...' : name}</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(x => x + 1)}>increase</button>
    </div>
  );
}

export default App;
