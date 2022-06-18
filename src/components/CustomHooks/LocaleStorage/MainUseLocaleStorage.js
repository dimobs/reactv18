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

</ol>
    </div>
  )
}
