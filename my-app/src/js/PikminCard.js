import React from "react";
import '../css/PikminCard.css';

const PikminCard = ({ pikmin }) => {
    return (
        <div className="col">
            <img className="pik_img" src={pikmin?.img} />
            <div className="contain">
                <div>{pikmin?.name}</div><br/>
                <div className="des">{pikmin?.description}</div><br/>
                <div>운반 : {pikmin?.carriage}</div>
                <div>공격 : {pikmin?.strength}</div>
                <div>성장 : {pikmin?.growth}</div>
                <div>저항 : {pikmin?.resistance}</div>
            </div>
        </div>
    );
};

export default PikminCard;