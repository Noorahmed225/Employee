import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "./Attendance.css";
import Header from "../../Layouts/Header/Header.jsx";

const Attendance = () => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        date: '',
        attendance: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/attendance`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Attendance recorded successfully!');
                setFormData({ name: '', id: '', date: '', attendance: '' });
            } else {
                alert('Error saving attendance');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to connect to server');
        }
    };

    return(
        <div>
        <Header/>
        <div className = "attendance_container">
            <h1>Attendance page</h1>
            <form onSubmit={handleSubmit} className = "att_Input">
                <p>Name</p>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Employee name" required/>
                <p>ID number</p>
                <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="Id number" required/>
                <p>Date</p>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required/>
                <p>Attendance</p>
                <input type="text" name="attendance" value={formData.attendance} onChange={handleChange} placeholder="Attendance" required/>
                
                <button type="submit" className ="att-btn">Submit</button>

                <Link to = "/employees">
                    <button className="attt-btn">Back</button>
                </Link>
            </form>
        </div>
        </div>
    )
}
export default Attendance;