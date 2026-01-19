import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "./Reports.css";
import Header from "../../Layouts/Header/Header.jsx";


const Reports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/attendance');
            if (!response.ok) {
                throw new Error('Failed to fetch reports');
            }
            const data = await response.json();
            // Sort by date (latest first)
            const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setReports(sortedData);
            setError(null);
        } catch (err) {
            setError(err.message);
            setReports([]);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div>
            <Header/>
            <div className="reports-container">
                <h2>Latest Attendance Reports</h2>
                {loading && <p className="loading">Loading reports...</p>}
                {error && <p className="error">Error: {error}</p>}
                {!loading && reports.length === 0 && <p className="no-data">No reports available</p>}
                {!loading && reports.length > 0 && (
                    <table className="reports-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Employee Name</th>
                                <th>Employee ID</th>
                                <th>Date</th>
                                <th>Attendance</th>
                                <th>Recorded At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr key={report.id}>
                                    <td>{report.id}</td>
                                    <td>{report.name}</td>
                                    <td>{report.employee_id}</td>
                                    <td>{report.date}</td>
                                    <td className={`attendance-${report.attendance.toLowerCase()}`}>
                                        {report.attendance}
                                    </td>
                                    <td>{new Date(report.created_at).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
export default Reports;