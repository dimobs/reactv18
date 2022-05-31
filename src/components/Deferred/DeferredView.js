import {useState} from 'react';
import List from './UseDeferredValue';

function DeferredView (){
const [input, setInput] = useState('');

function handleChange(e) {
setInput(e.target.value)
}

return(
    <>
    <h2>Welcome DeferredView</h2>
    <input type="test" value={input} onChange={handleChange} />
    <List input={input}  />
    </>
)

}

export default DeferredView;