import {useState} from 'react'
import useTimeout from './useTimeout'

export default function TimeoutComponent() {
const [count, setCount] = useState(5);
const {clear, reset} = useTimeout(() => setCount(0), 3000);

  return (
    <div>
      Welcome timeout
      <div>{count}</div>
    <button onClick={() => setCount(c => c + 1)}>Increment</button>
    <button onClick={clear}>Clear Timeout</button>
    <button onClick={reset}>Reset Timeout</button>
    <button onClick={() => window.location.reload()}>Refresh</button>;
    </div>
  )
}
