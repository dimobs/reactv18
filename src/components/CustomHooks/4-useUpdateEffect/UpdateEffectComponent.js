import { useState, useEffect, useRef } from 'react';
import useUpdateEffect from './useUpdateEffect';

export default function UpdateEffectComponent() {
    const [count, setCount] = useState(5);
    // useUpdateEffect(() => alert(count), [count]);
    const firstRenderRef = useRef(true);

    useEffect(()=> {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }else {
            alert(count)
        }

    }, [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
    )
}

