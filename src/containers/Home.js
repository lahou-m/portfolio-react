import React from 'react';
import Header from '../components/Header';
import hero from '../assets/hero.svg';
import './styles/Home.css';
import ParticlesConfig from '../animation/ParticlesConfig';
import Particles from 'react-particles-js';
import { motion } from 'framer-motion';
import { animationOne, animationTwo, transition } from '../animation/FramerAnimations';

const Home = () => {

    return (
        <>
        <Header />
        <Particles className="particles" params={ParticlesConfig}/>
        <div className="main__container">
            <motion.div initial='out' animate='in' exit='end' variants={animationOne} transition={transition}  className='main__text'>
                <h1 >
                    <span className="main__name">Hi! I'm Moustafa Lahou</span>
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
                
            </motion.div>
            <motion.div initial='out' animate='in' exit='end' variants={animationTwo} transition={transition}  className="main__svg">
                <img src={hero} alt="example ide code"/>
            </motion.div>
        </div>
        </>
    )
}

export default Home
