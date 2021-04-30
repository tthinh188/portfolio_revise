import React from 'react'
import './Card.css';
import { Button } from '@material-ui/core';


const Card = ({ image, title, description, demo, github }) => {
    return (
        <div className='card' style={{backgroundImage: `url(${image})`}}>
            <div className='card_container'>
                <h3 className='card_title'>{title}</h3>
                <p className='card_description'>{description}</p>
                {demo && <a className='card_button' href={demo} target="_blank" rel="noopener noreferrer"><Button variant='contained' color='primary'>Demo</Button></a>}
                {github && <a className='card_button' href={github} target="_blank" rel="noopener noreferrer"><Button variant='contained' color='primary'>Github</Button></a>}
                
            </div>
        </div>
    )
}

export default Card
