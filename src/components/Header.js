import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { MenuToggle } from './MenuToggle';
import { useMediaQuery } from "react-responsive";
import './styles/Header.css'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 950 });
    const isNotMobile = useMediaQuery({ minWidth: 951 });

    
    return (
        <div className='navbar__container'>
            <Link to="/">
                <h1><span className='violet'>S</span>parkling <span className='violet'>D</span>ev</h1>
            </Link>
            {
                    isMobile && 
                    <>
                        
                        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
                        <div className='mobileNavbar__links'>
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
            {   isNotMobile &&
                <div className='navbar__links'> 
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
