import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Navigate to employees page after login
        navigate('/employees');
    };

    return(
        <div className = "Login_container">
            <h1>Login</h1>
        <div className = "Login_input">
            <p>Email</p>
            <input type ="Email" placeholder="Email"/>
            <p>Password</p>
            <input type ="Password" placeholder="password"/>

            <div className="forgot"><a href ="#">Forgot password?</a></div>

            <button className="Login-btn" onClick={handleLogin}>Login</button>
            
            <div className="paragraph"><p>Continue with google</p></div>
            <button className ="Google-btn">google</button>

            <div className ="Signup-now">if you dont have an account <Link to="/register"> Signup now.</Link></div>
        </div>
        </div>
    )
}

export default Login;