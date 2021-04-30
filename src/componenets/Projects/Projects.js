import React from 'react'
import './Projects.css';
import Card from './Card/Card'
import projects from './data';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <h2 className='projects_title'>Projects</h2>
            <div className='cards'>
                {projects.map(project => (
                    <Card
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        demo={project.demo}
                        github={project.github}
                        image={project.image}
                    />
                ))}

            </div>
        </div>
    )
}

export default Projects
