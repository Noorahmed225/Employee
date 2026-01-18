import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./Pages/Login/Login.jsx";
import Register from"./Pages/Register/Register.jsx";
import Employees from"./Pages/Home/Employees.jsx"; 
import Attendance from"./Pages/Attendance/Attendance.jsx";
import Reports from"./Pages/Reports/Reports.jsx";
import Dashboards from"./Pages/Dashboards/Dashboards.jsx";
import Veiw from"./Components/Commonn/Veiw.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/veiw" element={<Veiw/>}/>
            <Route path="/attendance" element={<Attendance/>}/>
            <Route path="/reports" element={<Reports/>}/>
            <Route path="/dashboards" element={<Dashboards/>}/>
        </Routes>
    )
}

export default App;
