import React from 'react'
import './Skill.css';

const Skill = ({ name, image }) => {
    return (
        <div className='skill'>
            <img src={image} />
            <h2>{name}</h2>
        </div>
    )
}

export default Skill
