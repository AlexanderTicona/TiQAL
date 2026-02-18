import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                {/* Placeholder for image if not present, using CSS gradient */}
                <div className="project-image-placeholder" style={{ backgroundImage: `url(${project.image})` }}>
                    {!project.image && <span className="project-id">#{project.id}</span>}
                </div>
                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Ver Detalles <ArrowRight size={16} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
