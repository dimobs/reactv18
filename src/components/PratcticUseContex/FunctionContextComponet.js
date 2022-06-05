import React from 'react';
import {useTheme, useThemeUdate} from './ThemeContex';

export default function FunctionContextComponet() {
 const toggleTheme = useThemeUdate();
 const darkTheme = useTheme();
 const themeStyle ={
    backgroundColor: darkTheme 
    ? '#333' 
    : '#ccc',
    color: darkTheme 
    ? '#ccc'
    : '#333',
    padding: '2rem',
    margin: '2rem'
}

 return (
     <>
 <button onClick={toggleTheme}>Toggle Theme</button>
 <div style={themeStyle}>Function Theme</div>
     </>
    )
}