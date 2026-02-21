import React, { useState, useRef } from 'react';
import { ChevronRight, Image, BookOpen, Box, Globe, Map, Folder } from 'lucide-react';
import ResourceItem from '../components/ResourceItem';
import resourcesData from '../data/resources_infraworks.json';

const ResourcesInfraworks = () => {
    const [activeCategory, setActiveCategory] = useState('General');
    const contentRef = useRef(null);

    const categories = [
        { id: 'General', label: 'General', icon: <BookOpen size={18} /> },
        { id: 'Galeria', label: 'Galería', icon: <Image size={18} /> },
        { id: 'Infraworks', label: 'Infraworks', icon: <Box size={18} /> },
        { id: 'GoogleEarth', label: 'Google Earth', icon: <Globe size={18} /> },
        { id: 'SASPlanet', label: 'SAS Planet', icon: <Map size={18} /> },
        { id: 'Otros', label: 'Otros', icon: <Folder size={18} /> },
    ];

    const activeResources = resourcesData[activeCategory] || [];

    const handleCategorySelect = (catId) => {
        setActiveCategory(catId);
        if (window.innerWidth <= 768 && contentRef.current) {
            setTimeout(() => {
                contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    return (
        <div className="resources-container">
            {/* Mobile Horizontal Tabs */}
            <div className="mobile-category-tabs">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`mobile-tab ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => handleCategorySelect(cat.id)}
                    >
                        {cat.icon}
                        <span>{cat.label}</span>
                    </button>
                ))}
            </div>

            {/* Sidebar Navigation (Desktop) */}
            <aside className="resources-sidebar">
                <h3 className="sidebar-title">Recursos Adicionales</h3>
                <nav className="sidebar-nav">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => handleCategorySelect(cat.id)}
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
            <section className="resources-content" ref={contentRef}>
                <div className="content-header">
                    <h1 className="content-title">
                        <span className="text-gradient">{categories.find(c => c.id === activeCategory)?.label}</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Recursos y tutoriales de {categories.find(c => c.id === activeCategory)?.label}.
                    </p>
                </div>

                <div className="resource-list">
                    {activeResources.length > 0 ? (
                        activeResources.map((item) => (
                            <ResourceItem key={item.id} item={item} />
                        ))
                    ) : (
                        <div className="resource-empty-state">
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
