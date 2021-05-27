import React from 'react'
import hero from '../assets/hero.svg'
import Header from '../components/Header'
import './styles/About.css'

const About = () => {
    return (
        <>
        <Header />
        <div className="about__container">
            <div className="about__svg">
                <img src={hero} alt="svg hero presentation" width="500px" height="auto"/>
            </div>
            <div className="about__text">
                <h1>
                    Hi, My name is moustafa Im a self-taught web developer and
                    I love coding websites! this is logic, creative & funny.
              </h1>
            </div>
        </div>
        </>
    )
}

export default About
