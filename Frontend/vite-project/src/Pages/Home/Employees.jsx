import React from 'react';
import "./Employees.css";
import {Link} from 'react-router-dom';
import Header from "../../Layouts/Header/Header.jsx";
import Card from "../../Components/Commonn/Card.jsx";
import sundar from "../../assets/sundar.jpg";
import amazon from "../../assets/amazon.jpeg";
import mark from "../../assets/mark.jpeg";
import Microsoft from "../../assets/Microsoft.jpeg";
import steve from "../../assets/steve.jpeg";
import tata from "../../assets/tata.jpeg";
import tesla from "../../assets/tesla.jpeg";
import anand from "../../assets/anand.jpeg";


const Employees = ({img,title,description}) => {
    return (
        <>
            <Header/>
            <Card img={sundar} title="Google" description="Frontend Developer" />
            <Card img={amazon} title="Amazon" description="Frontend Developer"/>
            <Card img={anand} title="Tech" description="Frontend Developer"/>
            <Card img={mark} title="Meta" description="Frontend Developer"/>          
            <Card img={steve} title="Apple" description="Frontend Developer"/>
            <Card img={tata} title="Tata" description="Frontend Developer"/>
            <Card img={tesla} title="Tesla" description="Frontend Developer"/>
            <Card img={Microsoft} title="Microsoft" description="Frontend Developer"/>
           
        </>
    )
}

export default Employees;
