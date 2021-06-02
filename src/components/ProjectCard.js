import React from 'react';
import './styles/ProjectCard.css';

const ProjectCard = (props) => {
    return (
        <div className="projectCard__container">
            <div className="projectCard__mockup">
                <img src={props.img} alt="" />
            </div>
            <div className="projectCard__content">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <div className="projectCard__tech">
                    {props.children}
                </div>
                <a href="">Live Demo</a>
                <a href="">View Source</a>
            </div>
        </div>
    )
}

export default ProjectCard
