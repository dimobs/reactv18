import { useEffect, useRef } from 'react';

export default function useUpdateEffect(callback, [count]) {//alert(count), [count]=5
    const firstRenderRef = useRef(false);
console.log(firstRenderRef);
    useEffect(() => {
           if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return callback()
    }, [count])
}