import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleLogin = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            navigate('/employees');
        } else {
            setErrors(newErrors);
        }
    };

    const handleGoogleLogin = () => {
        navigate('/employees');
    };

    return (
        <div className="login-wrapper">
            <div className="Login_container">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Enter any demo gmail & password to Login.</p>
                </div>
                <div className="Login_input">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={errors.password ? 'input-error' : ''}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <div className="forgot-password">
                        <Link to="#">Forgot password?</Link>
                    </div>

                    <button className="Login-btn" onClick={handleLogin}>Login</button>

                    <div className="divider">OR</div>

                    <button className="Google-btn" onClick={handleGoogleLogin}>🔵 Continue with Google</button>

                    <div className="Signup-now">
                        Don't have an account? <Link to="/register">Sign up now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;