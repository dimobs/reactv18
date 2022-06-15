import {useState} from 'react'
import List from './List'

function DeferredValueFn() {
  const [input, setInput] = useState('');

function handlerSubmit(e) {
  setInput(e.target.value);
}

  return (
    <>
    Welcome!
    <div>
    <input type='text' value={input} onChange={handlerSubmit} />
    <List input={input} />
    </div>
    </>
  )
}

export default DeferredValueFn;
