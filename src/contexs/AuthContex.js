import { createContext, useState, useContext } from "react";

export const AuthContex = createContext();

const initialState = {
    email: '',
}

//name export
export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState)

    const login = (email, password) => {
        console.log(email);
        setUser(({
            email
        }))
    }

    return (
        <AuthContex.Provider value={{ user, login, isAuthenticated: Boolean(user.email)}}>
            {children}
        </AuthContex.Provider>
    )

}

export const useAuth = () => {
    const authState = useContext(AuthContex);
    
    return authState;
}