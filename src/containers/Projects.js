import React from 'react';
import Header from '../components/Header';
import './styles/Projects.css';
import data from '../data/Data';
import ProjectCard from '../components/ProjectCard';
import { animationFour, transition } from '../animation/FramerAnimations';
import { motion } from 'framer-motion';

const Projects = () => {

    const {projects} = data;

    return (
        <>
        <Header />
        <div className="projects__container">
            <motion.h1  exit='end' variants={animationFour} transition={transition} >My Projects</motion.h1>
            {
                projects.map((project) => {
                    return (<ProjectCard title={project.title} img={project.img} desc={project.desc}>
                        {project.techs.map((tech) => {
                            return <img src={tech} alt="" />
                        })}
                    </ProjectCard>
                )})
            }
        </div>
        </>
    )
}

export default Projects
