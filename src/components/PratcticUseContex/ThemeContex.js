import React, {useState, useContext} from 'react';


const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}) {
const [darkTheme, setDarkTheme] = useState(true);

function toggleTheme() {
    // setDarkTheme(prevDarkTheme => !prevDarkTheme)
    setDarkTheme(x => !x)
}
return (
    //  Логика за визоализиране и сетване на стейта
    <ThemeContext.Provider value={darkTheme}> 

    {/* // Логика за обръщане на логиката стейта */}
    <ThemeUpdateContext.Provider value={toggleTheme}>

    {/* Компоненти, в който ще се шерва стейта */}
     {children} 
    </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
)
}