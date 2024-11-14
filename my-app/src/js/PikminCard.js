import React from "react";
import '../css/PikminCard.css';

const PikminCard = ({ pikmin }) => {
    return (
        <div className="col">
            <img className="pik-img" src={`http://localhost:5000${pikmin.front_img}`}  alt={pikmin.name} />
        </div>
    );
};

export default PikminCard;