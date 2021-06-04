import React from 'react';
import Header from '../components/Header';
import './styles/Projects.css';
import data from '../data/Data';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    const {projects} = data;

    return (
        <>
        <Header />
        <div className="projects__container">
            <h1>My Projects</h1>
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
