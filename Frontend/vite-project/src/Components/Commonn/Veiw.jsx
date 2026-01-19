import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Header from "../../Layouts/Header/Header.jsx";
import "./veiw.css";

const Veiw = () => {
    const location = useLocation();
    const { title, description, img } = location.state || {};

    if (!title) {
        return (
            <div>
                <Header/>
                <div className="veiw-container">
                    <p className="no-data-message">No employee data found. Please select an employee.</p>
                    <Link to="/employees">
                        <button className="back-btn">Back</button>
                    </Link>
                </div>
            </div>
        );
    }
  
    return(
    <div> 
    <Header/>
    
    <div className="veiw-container">
        <div className="profile-image">
            {img && <img src={img} alt={title} />}
        </div>
        <div className="profile-details">
            <h1>{title}</h1>
            <div className="detail-section">
                <h3>Position</h3>
                <p>{description}</p>
            </div>
            <div className="detail-section">
                <h3>Employee Information</h3>
                <p><strong>Name:</strong> {title}</p>
                <p><strong>Role:</strong> {description}</p>
                <p><strong>Department:</strong> Engineering</p>
                <p><strong>Status:</strong> <span className="status-active">Active</span></p>
            </div>
            <div className="detail-section">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> {title.toLowerCase()}@company.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Location:</strong> San Francisco, CA</p>
            </div>
        </div>

        <Link to="/employees">
            <button className="back-btn">Back to Employees</button>
        </Link>
    </div>
    </div>
    )
}
export default Veiw;