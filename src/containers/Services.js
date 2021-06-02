import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import './styles/Services.css';
import data from '../data/Data';
import design from '../assets/design.png';
import development from '../assets/development.png';
import hoisting from '../assets/hoisting.png';

const Services = () => {

    return (
        <>
        <Header />
        <div className="services__container">
            <div style={{display:'flex', flexDirection: 'column', justifyContent: "center"}}>
                <h1>Skills</h1>
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
                <Card title="Back-End" titleStyle={{background: "rgb(255,177,196)", background: 'linear-gradient(90deg, rgba(255,177,196,1) 0%, rgba(255,203,111,1) 100%)' }} >
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
                <h1>Services</h1>
                <div className="stepCard">
                    <img src={design} alt="" />
                    <h2>Design</h2>
                    <p>This is the stage where we see together the choice of the wireframe, design & features</p>
                </div>
                <div className="stepCard">
                    <img src={development} alt="" />
                    <h2>Development</h2>
                    <p>I start coding the website and we will provide regular updates on the progress of the project</p>
                </div>
                <div className="stepCard">
                    <img src={hoisting} alt="" />
                    <h2>Deployment</h2>
                    <p>the last stage,I take care of the domain name registration and the hosting</p>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Services
