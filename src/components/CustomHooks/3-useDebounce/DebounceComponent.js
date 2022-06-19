import {useState} from 'react'
import useDebounce from './useDebounce'

export default function DebounceComponent() {
    const [count, setCount] = useState(5);
useDebounce(()=> alert(count), 2000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
