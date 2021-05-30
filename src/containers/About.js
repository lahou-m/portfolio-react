import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/hero2.svg'
import Header from '../components/Header'
import './styles/About.css'

const About = () => {
    return (
        <>
        <Header />
        <div className="about__container">
        <div className="about__text">
                <h1>
                    Hi, My name is moustafa. Im a freelance web developer.
                    I love coding !! creating websites is a real passion, I like the side creative & logic !
                    <br/>You want to create a website ?! don't hesitate and let's go until the end<br/>
                </h1>
                <Link to="contact">let's Go together !🚀</Link>
                <Link to="projects">My projects</Link> 
            </div>
            <div className="about__svg">
                <img src={hero} alt="svg hero presentation" width="500px" height="auto"/>
            </div>
        </div>
        </>
    )
}

export default About
