import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import "./Register.css";

const Register = () =>{
    const navigate = useNavigate();

    const handleSignup = () => {
        // Navigate to employees page after signup
        navigate('/employees');
    };

    return(
     <div className ="Signup_container">
        <h1>Signup</h1>
    <div className ="Signup_input">
        <p>Name</p>
        <input type ="Name" placeholder="Name"/>
        <p>Email</p>
        <input type ="Email" placeholder="Email"/>
        <p>Password</p>
        <input type ="Password" placeholder="password"/>
        <p>Confirm Password</p>
        <input type ="Confirm password" placeholder="confirm password"/>

        <button className = "Signup" onClick={handleSignup}>Signup</button>

        <p>Continue with google</p>
        <button className ="Google">Google</button>
    </div>

        <div className="Login-now">If you have an account <Link to="/login">Login now.</Link></div>
     </div>
    )
}
export default Register;