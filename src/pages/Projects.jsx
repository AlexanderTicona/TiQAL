import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [filter, setFilter] = useState('Todos');

    const filters = ['Todos', 'Vial', 'Topografía', 'Desarrollo'];

    const filteredProjects = filter === 'Todos'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section className="projects-container">
            <div className="projects-header">
                <h1 className="section-title">
                    Proyectos <span className="text-gradient">Destacados</span>
                </h1>
                <p className="section-description">
                    Una selección de mis trabajos más recientes en ingeniería civil, topografía y desarrollo de software.
                </p>
            </div>

            <div className="filter-bar">
                {filters.map(f => (
                    <button
                        key={f}
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                    No hay proyectos en esta categoría por el momento.
                </p>
            )}
        </section>
    );
};

export default Projects;
