import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "./Dashboards.css";
import Header from "../../Layouts/Header/Header.jsx";

const Dashboards = () => {
    const [dashboardData, setDashboardData] = useState({
        total_tasks: 0,
        completed_tasks: 0,
        pending_tasks: 0,
        recent_tasks: [],
        attendance_present: 0,
        total_attendance: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [employeeId, setEmployeeId] = useState('1'); // Default employee ID

    useEffect(() => {
        fetchDashboardData();
    }, [employeeId]);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/dashboard/${employeeId}`;
            const response = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch dashboard data');
            }
            const data = await response.json();
            setDashboardData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div>
            <Header/>
            <div className="dashboard-container">
                <h1>Employee Dashboard</h1>
                
                {/* Employee Profile Section */}
                <div className="employee-profile">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <img src="https://via.placeholder.com/100" alt="Profile" />
                        </div>
                        <div className="profile-info">
                            <h2>Employee Profile</h2>
                            <p className="employee-id">ID: {employeeId}</p>
                            <p className="employee-department">Department: Management</p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="dashboard-stats">
                    <div className="stat-card completed">
                        <h3>Tasks Completed</h3>
                        <p className="stat-number">{dashboardData.completed_tasks}</p>
                        <p className="stat-label">Out of {dashboardData.total_tasks} tasks</p>
                    </div>
                    <div className="stat-card pending">
                        <h3>Pending Tasks</h3>
                        <p className="stat-number">{dashboardData.pending_tasks}</p>
                        <p className="stat-label">In progress</p>
                    </div>
                    <div className="stat-card attendance">
                        <h3>Attendance</h3>
                        <p className="stat-number">{dashboardData.attendance_present}</p>
                        <p className="stat-label">Days Present</p>
                    </div>
                    <div className="stat-card total">
                        <h3>Total Tasks</h3>
                        <p className="stat-number">{dashboardData.total_tasks}</p>
                        <p className="stat-label">All tasks</p>
                    </div>
                </div>

                {/* Recent Tasks Section */}
                <div className="recent-tasks-section">
                    <h2>Recent Working Tasks</h2>
                    {loading && <p className="loading">Loading tasks...</p>}
                    {error && <p className="error">Error: {error}</p>}
                    {!loading && dashboardData.recent_tasks.length === 0 && (
                        <p className="no-data">No tasks available</p>
                    )}
                    {!loading && dashboardData.recent_tasks.length > 0 && (
                        <div className="tasks-list">
                            {dashboardData.recent_tasks.map((task) => (
                                <div key={task.id} className="task-card">
                                    <div className="task-header">
                                        <h3>{task.title}</h3>
                                        <span className={`status-badge status-${task.status.toLowerCase().replace(' ', '-')}`}>
                                            {task.status}
                                        </span>
                                    </div>
                                    <p className="task-description">{task.description}</p>
                                    <div className="task-footer">
                                        <small>Created: {new Date(task.created_at).toLocaleDateString()}</small>
                                        {task.completed_at && (
                                            <small>Completed: {new Date(task.completed_at).toLocaleDateString()}</small>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Dashboards;