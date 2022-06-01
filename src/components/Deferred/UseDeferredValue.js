import { useMemo, useDeferredValue } from "react";

function List({ input }) {
    const LIST_SIZE = 200;
    
    //отложено
    const deferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    }, [deferredInput])

    return list;
}

export default List;