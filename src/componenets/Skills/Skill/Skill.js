import React from 'react'
import './Skill.css';

const Skill = ({ name, level }) => {
    return (
        <div className='skill'>
            <p>{name}</p>
            <div className='skill_levelContainer'>
                <p className='skill_level' style={{width: `${level}%`}}></p>
                <p className='skill_amount' style={{left: `${level - 5}%`}}>{level}%</p>
            </div>
        </div>
    )
}

export default Skill
