import { useState } from 'react';
import { login } from '../../store/reducers/userSlice'
import { useDispatch } from 'react-redux';
import apiService from '../../services/apiService';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiService.login({ email: inputUsername, password });
            dispatch(login({ username: inputUsername, body: response.body }));
            // console.log('Login successful:', response);
            navigate('/profile');
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login;