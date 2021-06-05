import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { MenuToggle } from './MenuToggle';
import { useMediaQuery } from "react-responsive";
import './styles/Header.css';
import Toggle from './Toggle';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 950 });

    
    return (
        <div className='navbar__container'>
            <Link to="/">
                <h1 style={{display: "flex"}}><span className='violet'>S</span>parkling <span className='violet'>D</span>ev</h1>
            </Link>
            <Toggle />
            {
                    isMobile && 
                    <>
                        
                        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
                        <div style={{zIndex: 99}} className='mobileNavbar__links'>
                        {isOpen && 
                            <ul>
                                <li>
                                <Link to='/'>
                                    Home
                                </Link>
                                </li>
                                <li>
                                    <Link to='/services'>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/projects'>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link className='outline' to='/contact'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        }
                        </div>
                    </>
                    
            }
            {   !isMobile &&
                <div style={{zIndex: 99}} className='navbar__links'> 
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/services'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link className='outline' to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>}
        </div>
    )
}

export default Navbar
