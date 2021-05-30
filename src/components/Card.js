import React from 'react';
import './styles/Card.css';

const Card = (props) => {
    return (
        <div className="card__container" style={{...props.style}}>
            <div className="card__tile" style={{...props.titleStyle}}>
                <h1>{props.title}</h1>
            </div>
            <div className="card__skills">
                <div className="card__skillsIcon">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card
