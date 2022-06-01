import { useContext } from "react";
import { AuthContex } from "../../contexs/AuthContex";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContex);

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email')
        let password = formData.get('password')
      
        login(email, password)
        navigate('/');

    }


    return (
        <form id="login-form" onSubmit={onLoginHandler} method="POST">
            <fieldset>
                <legend>Login Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </span>
                </p>
                <input className="button submit" type="submit" value="Login" />
            </fieldset>
        </form>
    )
}


export default Login;
