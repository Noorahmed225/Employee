import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

const Card =({img,title,description}) => {
    return(
        <div className = "card">
         <img src={img} alt={title}/>
         <div className = "card_container">
            <h1>{title}</h1>
            <p>{description}</p>

            <Link to="/veiw" state={{title, description}}>
            <button class="card-btn">Veiw More</button>
            </Link>
            </div>  
        </div>
    )
}
export default Card;