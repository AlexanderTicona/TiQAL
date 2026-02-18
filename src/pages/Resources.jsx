import React, { useState } from 'react';
import { ChevronRight, BookOpen, Layers, Map, FileCode, Activity } from 'lucide-react';
import ResourceItem from '../components/ResourceItem';
import resourcesData from '../data/resources.json';

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState('General');

    const categories = [
        { id: 'General', label: 'General', icon: <BookOpen size={18} /> },
        { id: 'Puntos', label: 'Puntos COGO', icon: <Map size={18} /> },
        { id: 'Alineamientos', label: 'Alineamientos', icon: <Activity size={18} /> },
        { id: 'Perfiles', label: 'Perfiles', icon: <Activity size={18} /> },
        { id: 'Corredores', label: 'Corredores (Obra Lineal)', icon: <Layers size={18} /> },
        { id: 'Secciones', label: 'Secciones Transversales', icon: <Layers size={18} /> },
        { id: 'ComputoMaterial', label: 'Cómputo de Materiales', icon: <FileCode size={18} /> },
    ];

    const activeResources = resourcesData[activeCategory] || [];

    return (
        <div className="resources-container">
            {/* Sidebar Navigation */}
            <aside className="resources-sidebar">
                <h3 className="sidebar-title">Aula Virtual</h3>
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
                        Recursos educativos, tutoriales y scripts para {activeCategory}.
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
