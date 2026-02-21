import React, { useState, useRef } from 'react';
import { ChevronRight, BookOpen, Layers, Map, Activity, Mountain, Box, Cpu, Zap, Folder, Pickaxe } from 'lucide-react';
import ResourceItem from '../components/ResourceItem';
import resourcesData from '../data/resources.json';

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState('General');
    const contentRef = useRef(null);

    const categories = [
        { id: 'General', label: 'General', icon: <BookOpen size={18} /> },
        { id: 'Puntos', label: 'Puntos Cogo', icon: <Map size={18} /> },
        { id: 'Superficies', label: 'Superficies', icon: <Mountain size={18} /> },
        { id: 'Alineamientos', label: 'Alineamientos', icon: <Activity size={18} /> },
        { id: 'Perfiles', label: 'Perfiles', icon: <Activity size={18} /> },
        { id: 'Ensamblajes', label: 'Ensamblajes', icon: <Box size={18} /> },
        { id: 'Corredores', label: 'Corredores (Obra Lineal)', icon: <Layers size={18} /> },
        { id: 'Secciones', label: 'Secciones Transversales', icon: <Layers size={18} /> },
        { id: 'SubassemblyComposer', label: 'Subassembly Composer', icon: <Cpu size={18} /> },
        { id: 'Explanaciones', label: 'Explanaciones', icon: <Pickaxe size={18} /> },
        { id: 'Dynamo', label: 'Dynamo', icon: <Zap size={18} /> },
        { id: 'Otros', label: 'Otros', icon: <Folder size={18} /> },
    ];

    const activeResources = resourcesData[activeCategory] || [];

    const handleCategorySelect = (catId) => {
        setActiveCategory(catId);
        // Auto-scroll to content on mobile
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
                <h3 className="sidebar-title">Aula Virtual</h3>
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
                        Recursos educativos, tutoriales y scripts para {activeCategory}.
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
                                🚧 Estamos preparando tutoriales para <strong>{activeCategory}</strong>.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Resources;
