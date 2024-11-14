import React from "react";
import '../css/PikminCard.css';

const PikminCard = ({ pikmin }) => {
    return (
        <div className="flip">
            <div className="col">
                <div className="card-front">
                    <img className="pik-front-img" src={pikmin?.front_img}  alt={pikmin.name} />
                </div>
                <div className="card-back">
                    <img className="pik-back-img" src={pikmin?.back_img} />
                </div>
            </div>
        </div>
    );
};

export default PikminCard;