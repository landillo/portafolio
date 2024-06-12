import React from 'react';
import './Styles.css';
import { projectsData } from '../../helpers/projectsData';
import { techData } from '../../helpers/techData';

export const ProjectsPage = () => {
  
  const techIconMap = techData.reduce((acc, tech) => {
    acc[tech.name] = tech.icon;
    return acc;
  }, {});
  
  return (

    <div className="projects">
      {projectsData.map((project) => (
        <div key={project.id} className="card">
          <div className="card-inner">
            <div className="card-front" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-title-overlay">
                <h3>{project.title}</h3>
              </div>
            </div>
            <div className="card-back">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech">
                    <img src={techIconMap[tech]} alt={tech} className="tech-icon" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="button">View Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="button">View Repo</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
)};
