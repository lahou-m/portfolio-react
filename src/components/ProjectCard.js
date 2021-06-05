import React from 'react';
import './styles/ProjectCard.css';

import { motion } from 'framer-motion';
import { animationFour, transition } from '../animation/FramerAnimations';

const ProjectCard = (props) => {
    
    return (
        <motion.div initial='out' animate='in' exit='end' variants={animationFour} transition={transition} className="projectCard__container">
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
        </motion.div>
    )
}

export default ProjectCard
