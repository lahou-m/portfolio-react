import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import './styles/Services.css'

const Services = () => {
    const descFront = 'Front-End is good enough if you need a website just to showcase your business, your products or just have a personal website for example without user authentication or special features.';
    const descBack = 'Back-End is for an ecommerce, a blog, your own social network or a simple website where you want to be able to edit the content without having to edit the source code.';
    return (
        <>
        <Header />
        <div className="services__container">
            <Card title="Front-End" desc={descFront}  titleStyle={{background: 'rgb(214,225,255)', background: "linear-gradient(90deg, rgba(214,225,255,1) 0%, rgba(179,114,253,1) 100%)"}} >
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>javascript</li>
                    <li>figma</li>
                    <li></li>
                </ul>
            </Card>
            <Card title="Back-End" desc={descBack} titleStyle={{background: "rgb(255,177,196)", background: 'linear-gradient(90deg, rgba(255,177,196,1) 0%, rgba(255,203,111,1) 100%)' }} >

            </Card>
        </div>
        </>
    )
}

export default Services
