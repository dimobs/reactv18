import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'

export default function UseLayoutEffect() {
const [show, setShow] = useState(false);
const popup = useRef();
const button = useRef();
useLayoutEffect(() => { //за разликата от useEffect, ще предтврати поп-ъп показването, което понякога е в идимо за потребителят
    if(popup.current == null || button.current == null) return
    const {bottom} = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px`
},[show]);

  return (
    <div>
      <h2>Welcome use lay out effect</h2>
    <button ref={button} onClick={() => setShow(prev => !prev)}>
        Click Here
    </button>
    {show && (
        <div style={{position: 'absolute'}} ref={popup}>
            This is a popup </div>
    )}
    </div>
  )
}
