import React from 'react'
import './Skills.css';
import skills from './data';
import Skill from './Skill/Skill';

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <h2>Skills</h2>
            <div className='skills_description'>
                {skills.map(skill => (
                    <Skill key={skill.id} name={skill.name} image={skill.image}/>
                ))}
            </div>
        </div>
    )
}

export default Skills
