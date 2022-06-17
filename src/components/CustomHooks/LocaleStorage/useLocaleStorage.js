import {useState} from 'react'

export default function useLocaleStorage(initialValue) {
const [value, setValue] = useState(initialValue);

return [value, setValue]


}