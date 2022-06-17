import { useState, useEffect} from 'react'

function getSavedValue(key, initialValue) { //'name', ''
    const saveValue = JSON.parse(localStorage.getItem(key))
    console.log('savedValue', saveValue);
    if (saveValue) return saveValue;
  
    if (initialValue instanceof Function) return initialValue()
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