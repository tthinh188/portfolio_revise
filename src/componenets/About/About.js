import React, { useState } from 'react';
import './About.css';
import profile from '../../assets/profile.jpg'
import resume from '../../assets/ThinhPhanResume.pdf';
import { Button } from '@material-ui/core'

const Introduction = (
    <div className='about_me description_info'>
        <p> Hello, my name is Thinh Phan, and I am a full-stack web developer.</p>
        <p> I enjoy creating products that help to improve the quality of life.
            I love the logic and structure of coding, and I am always seeking opportunities to leverage my knowledge.
        </p>
        <p>
            I have experience in Web applications in various programming languages,
            especially in Javascript, Typescript, C#, HTML, CSS, SCSS, Java, and Python.
        </p>
        <p>
            I have demonstrated experience in a diverse set of web development tools such as React, Redux, Material-UI,
            Angular, ASP.NET, NodeJS, Express, SQL, REST API, and authentication for Full Stack Web Application.
        </p>
        <a className="resume_download" href={resume} target="_blank" rel="noopener noreferrer">
            <Button variant='contained' color='primary'>Resume</Button>
        </a>

    </div>
)

const Education = (
    <div className="education description_info">
        <h2>Bachelor of Science in Computer Science, Christopher Newport University, VA.</h2>
        <p>Graduated: December, 2020</p>

        <h2>Associate of Science in Computer Science, Northern Virginia Community College, VA.</h2>
        <p>Graduated: December, 2018</p>

        <h2>Certification of Java Web Developer Nanodegree, Udacity</h2>
        <p>Feb, 2021.</p>
    </div>
)

const Experience = (
    <div className="experience description_info">
        <div className="job">
            <h2>Antra INC - Sterling, VA: Internship - Front end developer</h2>
            <p className="experience_time">03/2021 – 05/2021</p>
            <p>Develop Front end Website using React & Redux.</p>
        </div>

        <div className="job">
            <h2>Itlize Global LLC - Piscataway, NJ: Internship - Full stack Application Developer</h2>
            <p className="experience_time"> 05/2021 – Current.</p>
            <p>Individual and work with team creating full stack applications and web API using C#, ASP.NET,
                SQL, Angular framework</p>
        </div>


    </div>
)

const Honors = (
    <div className="education description_info">
        <h2>CHRISTOPHER NEWPORT UNIVERSITY</h2>
        <p>Academic Dean’s List, Spring 2019 & Spring 2020</p>

        <h2>NORTHERN VIGINIA COMMUNITY COLLEGE</h2>
        <p>Academic Dean’s List and Presidential Scholar 2016 – 2018</p>
    </div>
)

const About = () => {
    const [selectedOption, setSelectedOption] = useState("About");

    const getComponenet = () => {
        switch (selectedOption) {
            case 'Education':
                return Education;
            case 'Honors':
                return Honors;
            case 'Experience':
                return Experience;
            default:
                return Introduction;
        }
    }

    return (
        <div id='about' className="about">
            <h1>About me</h1>
            <div className='about_container'>
                <img alt='TP' src={profile} />
                <div className='about_description'>
                    <div className='about_descriptionOptions'>
                        <h2 className={`${selectedOption === 'About' && 'active'}`} onClick={() => setSelectedOption('About')}>About</h2>
                        <h2 className={`${selectedOption === 'Education' && 'active'}`} onClick={() => setSelectedOption('Education')}>Education</h2>
                        <h2 className={`${selectedOption === 'Experience' && 'active'}`} onClick={() => setSelectedOption('Experience')}>Experience</h2>
                        <h2 className={`${selectedOption === 'Honors' && 'active'}`} onClick={() => setSelectedOption('Honors')}>Honors</h2>
                    </div>
                    {getComponenet()}
                </div>

            </div>

        </div>
    )
}

export default About
