import {useState, useRef, useEffect} from 'react'
import List from './List'

function DeferredValueFn() {
  const [input, setInput] = useState('');
  const startingPoint = useRef();

useEffect(() => {
  startingPoint.current.focus();
  console.log('useefect');
}, [])

function handlerSubmit(e) {
  setInput(e.target.value);
}

  return (
    <>
    Welcome!
    <div>
    <input ref={startingPoint} type='text' value={input} onChange={handlerSubmit} />
    <List input={input} />
    </div>
    </>
  )
}

export default DeferredValueFn;
