import { useState, useEffect} from 'react'

function getSavedValue(key, initialValue) { //'name', ''
    const saveValue = JSON.parse(localStorage.getItem(key))
    if (saveValue) return saveValue;
  
    if (initialValue instanceof Function) return initialValue() //Fn useState()
        return initialValue;
}

export default function useLocaleStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
return getSavedValue(key, initialValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}