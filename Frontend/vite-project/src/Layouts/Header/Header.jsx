import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav><p>Wellcome to Employee management Portal</p>
                <ul>
                    <li><Link to ="/employees">Employees</Link></li>
                    <li><Link to ="/attendance">Attendance</Link></li>
                    <li><Link to ="/reports">Reports</Link></li>
                    <li><Link to ="/dashboards">Dashboards</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;