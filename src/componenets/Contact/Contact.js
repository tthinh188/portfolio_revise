import React from 'react'
import './Contact.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <h2>Contact</h2>
            <ul className='contact_info'>
                <li><a href="tel:7142602946"><PhoneIphoneIcon />714-260-2946</a></li>
                <li><a href="mailto: phan.tthinh@gmail.com?Subject=Porfilio%20Contact" target="_top"><EmailIcon /> Email: phan.tthinh@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/thinhtphan/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="nav_socialIcon" />LinkedIn
                </a></li>
                <li><a href="https://github.com/tthinh188" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="nav_socialIcon" />Github
                </a></li>
            </ul>
        </div>
    )
}

export default Contact
