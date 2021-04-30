import React, { useState, useEffect } from 'react';
import './Nav.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedMenuOption, setSelectedMenuOption] = useState('Home');
    
    const handleShowMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        }
    }

    useEffect(() =>{
        const about = document.getElementById('about').getBoundingClientRect();
        const skills = document.getElementById('skills').getBoundingClientRect();
        const projects = document.getElementById('projects').getBoundingClientRect();
        const contact = document.getElementById('contact').getBoundingClientRect();
        const initialPosition = window.scrollY;
        
        window.addEventListener("scroll",() =>{
            if ((window.scrollY - initialPosition) >= contact.y - 200) setSelectedMenuOption("Contact");
            else if ((window.scrollY - initialPosition) >= projects.y - 100) setSelectedMenuOption("Projects");
            else if ((window.scrollY - initialPosition) >= skills.y - 100) setSelectedMenuOption("Skills");
            else if ((window.scrollY - initialPosition) >= about.y - 100) setSelectedMenuOption("About");
            else setSelectedMenuOption("Home");
        });
    }, [])
        
    return (
        <div onClick={handleShowMenu} className="nav">
            <ul className={`nav_menu ${showMenu && 'show'}`}>
                <li><a href='#home' onClick={() => setSelectedMenuOption('Home')} className={`${selectedMenuOption === 'Home' && 'active'}`}>Home</a></li>
                <li><a href='#about' onClick={() => setSelectedMenuOption('About')} className={`${selectedMenuOption === 'About' && 'active'}`}>About</a></li>
                <li><a href='#skills' onClick={() => setSelectedMenuOption('Skills')} className={`${selectedMenuOption === 'Skills' && 'active'}`}>Skills</a></li>
                <li><a href='#projects' onClick={() => setSelectedMenuOption('Projects')} className={`${selectedMenuOption === 'Projects' && 'active'}`}>Projects</a></li>
                <li><a href='#contact' onClick={() => setSelectedMenuOption('Contact')} className={`${selectedMenuOption === 'Contact' && 'active'}`}>Contact</a></li>
            </ul>
            <ul className="nav_socialIcons">
                <li><a href="https://www.linkedin.com/in/thinhtphan/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="nav_socialIcon" />
                </a></li>
                <li><a href="https://github.com/tthinh188" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="nav_socialIcon" />
                </a></li>
            </ul>
            <IconButton className="nav_menuIcon" onClick={() => setShowMenu(!showMenu)}>{showMenu ? <CloseIcon /> : <MenuIcon />}</IconButton>
        </div>
    )
}

export default Nav
