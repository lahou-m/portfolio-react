import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import './styles/Services.css';
import data from '../data/Data';
import design from '../assets/design.png';
import development from '../assets/development.png';
import hosting from '../assets/hoisting.png';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animation/FramerAnimations';

const Services = () => {

    const StepCard = (props) => {
        return (
            <div className="stepCard">
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        )
        
    }

    return (
        <>
            <Header />
            <motion.div initial='out' animate='in' exit='end' variants={animationThree} transition={transition} className="services__container">
                <h1>My Services</h1>
                <div style={{display:'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                    <Card title="Front-End"  titleStyle={{background: 'rgb(214,225,255)', background: "linear-gradient(90deg, rgba(214,225,255,1) 0%, rgba(179,114,253,1) 100%)"}} >
                        {data.frontSkills.map((service) => {
                            return (
                                <div className="inline">
                                <img src={service.img} alt="" key={service.id}  />
                                <p>{service.name}</p>
                                </div>
                            )
                        })}
                    </Card>
                    <Card title="Back-End" titleStyle={{background: "rgb(255,177,196)", background: 'linear-gradient(90deg, rgba(255,177,196,1) 0%, rgba(255,203,111,1) 100%)', alignItems: "center" }} >
                        {data.backSkills.map((service) => {
                            return (
                                <div className="inline">
                                <img src={service.img} alt="" key={service.id}  />
                                <p>{service.name}</p>
                                </div>
                            )
                        })}
                    </Card>
                </div>
                <div style={{display:'flex', flexDirection: 'column', justifyContent: "center"}}>
                    <StepCard img={design} title="1 - Design" desc='We see together the choice of the wireframe, design & features' />
                    <StepCard img={development} title="2 - Development" desc='I start coding the website and we will provide regular updates on the progress of the project' />
                    <StepCard img={hosting} title="3 - Deployment" desc='the last stage,I take care of the domain name registration and the hosting' />
                </div>
            </motion.div>
        </>
    )
}

export default Services
