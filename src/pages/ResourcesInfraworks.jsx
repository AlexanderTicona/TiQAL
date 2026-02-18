import React, { useState } from 'react';
import { ChevronRight, Image, BookOpen, Box } from 'lucide-react';
import ResourceItem from '../components/ResourceItem';
import resourcesData from '../data/resources_infraworks.json';

const ResourcesInfraworks = () => {
    const [activeCategory, setActiveCategory] = useState('Galeria');

    const categories = [
        { id: 'Galeria', label: 'Galería', icon: <Image size={18} /> },
        { id: 'General', label: 'General', icon: <BookOpen size={18} /> },
        { id: 'Modelamiento', label: 'Modelamiento', icon: <Box size={18} /> },
    ];

    const activeResources = resourcesData[activeCategory] || [];

    return (
        <div className="resources-container">
            {/* Sidebar Navigation */}
            <aside className="resources-sidebar">
                <h3 className="sidebar-title">Infraworks</h3>
                <nav className="sidebar-nav">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {cat.icon} {cat.label}
                            </span>
                            {activeCategory === cat.id && <ChevronRight size={16} />}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <section className="resources-content">
                <div className="content-header">
                    <h1 className="content-title">
                        <span className="text-gradient">{categories.find(c => c.id === activeCategory)?.label}</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Recursos y tutoriales de Infraworks para {activeCategory}.
                    </p>
                </div>

                <div className="resource-list">
                    {activeResources.length > 0 ? (
                        activeResources.map((item) => (
                            <ResourceItem key={item.id} item={item} />
                        ))
                    ) : (
                        <div style={{
                            padding: '3rem',
                            textAlign: 'center',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            border: '1px solid var(--grid-line)'
                        }}>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Pronto subiremos contenido para esta sección.
                            </p>
                            <br />
                            <p style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>
                                🚧 Estamos preparando material sobre <strong>{activeCategory}</strong>.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ResourcesInfraworks;
