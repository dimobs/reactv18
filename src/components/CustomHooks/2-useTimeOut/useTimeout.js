import {useCallback, useEffect, useRef} from 'react';

export default function useTimeout(callback, delay) {
const callBackRef = useRef();
const timeoutRef = useRef();

useEffect(() => {
    callBackRef.current = callback //setCount(0)
}, [callback]);

const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callBackRef.current(), delay)
}, [delay])

const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
},[]);

useEffect(() => {
    set();
    return clear
}, [delay, set, clear]);

const reset = useCallback(() => {
    clear();
    set()
}, [clear, set])

  return {reset, clear}
}
