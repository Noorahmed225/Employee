import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Header from "../../Layouts/Header/Header.jsx";
import "./veiw.css";

const Veiw = () => {
  
    return(
    <div> 
    <Header/>
    
    <div className="veiw-container">
        <h1>Employee name</h1>
        <p>'This page contains detailed information about the selected employee.
             Here you can find their full profile, contact information, job role, and other
              relevant details.'</p>


        <Link to = "/employees">
            <button class="back-btn">Back</button>
        </Link>
    </div>
    </div>
    )
}
export default Veiw;