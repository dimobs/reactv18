import React, {useState} from 'react';
import Login from './Login';

const LayOut = () => {
    const [id, setId] = useState();


    return(
        <>
        <p>Chat messenger</p>
        {id}
       <Login onIdSubmit={setId} />
        </>
    )

}
export default LayOut;