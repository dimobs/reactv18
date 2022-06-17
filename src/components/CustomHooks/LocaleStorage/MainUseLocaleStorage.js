import React, {useState} from 'react'
import useLocaleStorage from './useLocaleStorage'

export default function UseLocaleStorage() {
const [name, setName] = useLocaleStorage('')

  return (
    <div>
      <span>Welcome LocaleStrorage</span>
      <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    </div>
    </div>
  )
}
