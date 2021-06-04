import React from 'react';
import Header from '../components/Header';
import hero from '../assets/hero.svg';
import './styles/Home.css';
import ParticlesConfig from '../components/ParticlesConfig';
import Particles from 'react-particles-js';

const Home = () => {
    return (
        <>
        <Header />
        <Particles className="particles" params={ParticlesConfig}/>
        <div className="main__container">
            <div className="main__text">
                <h1>
                    <span className="main__name">LAHOU MOUSTAFA</span>
                    <br/>
                    Web Developer
                </h1>
                <div className="main__actions">
                    <a href="" target="_blank">My Resume</a>
                    <a href="">
                        <img src="./assets/github.png" alt="" />
                    </a>
                    <a href="">
                        <img src="./assets/linkedin.png" alt="" />
                    </a>
                    
                </div>
                
            </div>
            <div className="main__svg">
                <img src={hero} alt="example ide code"/>
            </div>
        </div>
        </>
    )
}

export default Home
