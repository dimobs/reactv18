import React, {useState} from 'react'

export default function UseLocaleStorage() {
const [name, setName] = useState('')

  return (
    <div>
      <span>Welcome LocaleStrorage</span>
      <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    </div>
    </div>
  )
}
