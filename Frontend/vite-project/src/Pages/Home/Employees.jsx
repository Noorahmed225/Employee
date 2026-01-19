import React from 'react';
import "./Employees.css";
import {Link} from 'react-router-dom';
import Header from "../../Layouts/Header/Header.jsx";
import Card from "../../Components/Commonn/Card.jsx";

const Employees = ({img,title,description}) => {
    return (
        <>
            <Header/>
            <Card img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" title="Google" description="Frontend Developer" />
            <Card img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" title="Amazon" description="Frontend Developer"/>
            <Card img="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" title="Tech" description="Frontend Developer"/>
            <Card img="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" title="Meta" description="Frontend Developer"/>
            <Card img="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" title="Apple" description="Frontend Developer"/>
            <Card img="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400" title="Tata" description="Frontend Developer"/>
            <Card img="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400" title="Tesla" description="Frontend Developer"/>
            <Card img="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=400" title="Microsoft" description="Frontend Developer"/>

        </>
    )
}

export default Employees;
