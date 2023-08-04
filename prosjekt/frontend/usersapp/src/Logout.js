import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from './slices/auth';


const Logout = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        history('/login', { replace: true })
    };

    return (
        <div>
            <h1>Logout Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Logout;
