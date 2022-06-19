import React from 'react'
import { Link } from "react-router-dom";
import useLocaleStorage from './useLocaleStorage';
import useUpdateLogger from './useUpdateLogger';

export default function UseLocaleStorage() {
const [name, setName] = useLocaleStorage('name', '')
useUpdateLogger(name)

  return (
    <div>
      <span>Welcome LocaleStrorage</span>
      <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    </div>
    <ol>
<li><Link to="/toggle1" className="site-title">use Toggle</Link></li>
<li><Link to="/timeout" className="site-title">use Timeout Fn</Link></li>
<li><Link to="/debounce" className="site-title">use Debounce Fn</Link></li>
<li><Link to="/updateEffect" className="site-title">use updateEffect Fn</Link></li>

</ol>
    </div>
  )
}
