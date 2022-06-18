import {useState} from 'react'

export default function useToggle1(defaultValue) {//defautValue=value
const [value, setValue] = useState(defaultValue)

function toggleFn(value){
    setValue(currentValue => typeof value ==='boolean'
    ? value
    : !currentValue
    )
}

return [value, toggleFn]
}
