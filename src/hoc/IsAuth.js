import { useAuth } from "../contexs/AuthContex"; 
import {useNavigate} from 'react-router-dom'

export const isAuth = (Component) => { //вътрешен компонент

    const WrapperComponent = (props) => { //външен компонент
        const navigate = useNavigate();
const {isAuthenticated} = useAuth();

if(!isAuthenticated){
navigate('/login')
return null;
}
        return <Component {...props} />;
    }
    return WrapperComponent;
}