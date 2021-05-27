import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import './styles/Services.css'

const Services = () => {
    const desc = 'You may not need a whole website but only view html pages or just single landing page, that is what front end development service does.';
    return (
        <>
        <Header />
        <div className="services__container">
            <Card title="Front-End" desc={desc}  titleStyle={{background: 'rgb(214,225,255)', background: "linear-gradient(90deg, rgba(214,225,255,1) 0%, rgba(179,114,253,1) 100%)"}} >

            </Card>
            <Card title="Back-End" desc={desc} titleStyle={{background: "rgb(255,177,196)", background: 'linear-gradient(90deg, rgba(255,177,196,1) 0%, rgba(255,203,111,1) 100%)' }} >
                
            </Card>
        </div>
        </>
    )
}

export default Services
