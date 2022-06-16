import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'

export default function UseLayoutEffect() {
const [show, setShow] = useState(false);
const popup = useRef();
const button = useRef();
useEffect(() => {
    if(popup.current == null || button.current == null) return
    const {button} = button.current.getBoudingClientReact()
    popup.current.style.top = `${bottom + 25}px`
},[show]);

  return (
    <div>
      <h2>Welcome use lay out effect</h2>
    <button ref={button} onClick={() => setShow(prev => !prev)}>
        Click Here
    </button>
    </div>
  )
}
