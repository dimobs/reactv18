import React, {useState} from 'react'
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
    </div>
  )
}
