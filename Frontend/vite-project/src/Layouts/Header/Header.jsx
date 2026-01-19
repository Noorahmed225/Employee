import React, { useState } from 'react';
import "./Header.css";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="nav-left">
                    <p className="portal-title">📊 Employee Management Portal</p>
                </div>
                <ul className="nav-links">
                    <li><Link to="/employees" className="nav-link">👥 Employees</Link></li>
                    <li><Link to="/attendance" className="nav-link">📋 Attendance</Link></li>
                    <li><Link to="/reports" className="nav-link">📈 Reports</Link></li>
                    <li><Link to="/dashboards" className="nav-link">📊 Dashboard</Link></li>
                </ul>
                <div className="nav-right">
                    {isLoggedIn && (
                        <button className="logout-btn" onClick={handleLogout}>🔓 Logout</button>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Header;