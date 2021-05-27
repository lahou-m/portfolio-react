import React from 'react';
import Header from '../components/Header';
import codejs from '../assets/codejs.svg';
import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin.svg';
import './styles/Home.css'

const Home = () => {
    return (
        <>
        <Header />
        <div className="main__container">
            <div className="main__text">
                <h1>
                    <span className="main__name">LAHOU MOUSTAFA</span>
                    <br/>
                    Web Developer
                </h1>
                <div className="main__actions">
                    <a href="" target="_blank">My resume</a>
                    <Github width="40px" height="40px"/>
                    <Linkedin width="40px" height="40px"/>
                </div>
                
            </div>
            <div className="main__svg">
                <img src={codejs} alt="example ide code" width="500px" height="auto"/>
            </div>
        </div>
        </>
    )
}

export default Home
