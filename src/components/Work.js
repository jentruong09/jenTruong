// Body for my work
import React from 'react';
import apps from '../assets/apps/apps.json'

function ProjectCard(props) {
    return (
        <div className='card'>
            <img src={props.image} className='card-img-top' alt={props.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-techs">{props.techs}</p>
                    <a href={props.github} className="btn btn-dark">GitHub</a>
                    <a href={props.live} className="btn btn-dark">App</a>
                </div>
        </div>
    )
}

function Show(props) {
    return <div className='show'>{props.children}</div>
}

export default function Work() {
    return (
        <div>
            <div className='workHeader'>
                <h3>Web Applications That I've Built:</h3>
            </div>
            <Show>
                {apps.map((app) => (
                    <ProjectCard
                    key={app.id}
                    name={app.name}
                    description={app.description}
                    techs={app.techs}
                    live={app.live}
                    github={app.github}
                    image={app.image}
                    />
                ))}
            </Show>
        </div>
    )
}