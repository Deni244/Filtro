//import { Link } from "react-router-dom";
import '../assets/styles/Card.scss'
export default function Card(props) {
    const { classN, photo, name, description, price} = props;
    return (
            <div className={`card-container ${classN}`}>
                <img className="card-image" src={photo} alt={name} />
                <h4 className="card-name">{name}</h4>
                <p className="card-description">{description}</p>
                <div className="card-price-btn-container">
                    <span className="card-price">${price}</span>
                    <button className="card-button">Order now</button>
                </div>
            </div>
    )
}