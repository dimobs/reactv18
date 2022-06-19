import { useEffect, useRef } from 'react';

export default function useUpdateEffect(callback, dependencies) {//alert(count), [count]=5
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return callback()
    }, dependencies)
}