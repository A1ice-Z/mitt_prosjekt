import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './slices/auth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    const history = useNavigate();

    console.log("Is autheticated: ", isAuthenticated);

    const handleSubmit = (e) => {

        console.log("funker"); //sjekker om den funker

        e.preventDefault();
        dispatch(loginUser({ username, password }));
    };

    useEffect(() => {
        console.log("now usereffect is called");
        if (isAuthenticated) {
            history('/Logout', { replace: true, relative: true });
        }
    }, [isAuthenticated]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Log in</button>
        </form>
    );
};

export default Login;