import { useAuth } from "../contexs/AuthContex";
import { Navigate } from 'react-router-dom'

export const isAuth = (Component) => { //вътрешен компонент

    const WrapperComponent = (props) => { //външен компонент
        const { isAuthenticated } = useAuth();

        return isAuthenticated 
        ? <Component {...props} /> 
        : <Navigate to='/login' />
    }
    return WrapperComponent;
}