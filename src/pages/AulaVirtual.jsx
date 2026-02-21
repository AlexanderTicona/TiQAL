import React, { useState, useRef } from 'react';
import {
    ChevronRight, BookOpen, Layers, Map, Activity, Mountain,
    Box, Cpu, Zap, Folder, Pickaxe, Image, Globe,
    Filter, PlayCircle, FileText
} from 'lucide-react';
import ResourceItem from '../components/ResourceItem';
import aulaData from '../data/aula_virtual.json';

const AulaVirtual = () => {
    const [activeCategory, setActiveCategory] = useState('civil3d:General');
    const [typeFilter, setTypeFilter] = useState('all'); // 'all', 'video', 'article'
    const contentRef = useRef(null);

    // Civil 3D categories (main)
    const civil3dCategories = [
        { id: 'civil3d:General', label: 'General', icon: <BookOpen size={18} /> },
        { id: 'civil3d:Puntos', label: 'Puntos Cogo', icon: <Map size={18} /> },
        { id: 'civil3d:Superficies', label: 'Superficies', icon: <Mountain size={18} /> },
        { id: 'civil3d:Alineamientos', label: 'Alineamientos', icon: <Activity size={18} /> },
        { id: 'civil3d:Perfiles', label: 'Perfiles', icon: <Activity size={18} /> },
        { id: 'civil3d:Ensamblajes', label: 'Ensamblajes', icon: <Box size={18} /> },
        { id: 'civil3d:Corredores', label: 'Corredores (Obra Lineal)', icon: <Layers size={18} /> },
        { id: 'civil3d:Secciones', label: 'Secciones Transversales', icon: <Layers size={18} /> },
        { id: 'civil3d:SubassemblyComposer', label: 'Subassembly Composer', icon: <Cpu size={18} /> },
        { id: 'civil3d:Explanaciones', label: 'Explanaciones', icon: <Pickaxe size={18} /> },
        { id: 'civil3d:Dynamo', label: 'Dynamo', icon: <Zap size={18} /> },
        { id: 'civil3d:Otros', label: 'Otros', icon: <Folder size={18} /> },
    ];

    // Complementary tools categories
    const complementCategories = [
        { id: 'comp:Infraworks', label: 'Infraworks', icon: <Box size={18} /> },
        { id: 'comp:SASPlanet', label: 'SAS Planet', icon: <Map size={18} /> },
        { id: 'comp:GoogleEarth', label: 'Google Earth', icon: <Globe size={18} /> },
        { id: 'comp:Galeria', label: 'Galería', icon: <Image size={18} /> },
        { id: 'comp:Otros', label: 'Otros', icon: <Folder size={18} /> },
    ];

    const allCategories = [...civil3dCategories, ...complementCategories];

    // Get group label from activeCategory
    const getGroupLabel = () => {
        const [group] = activeCategory.split(':');
        return group === 'civil3d' ? 'Civil 3D' : 'Complementarios';
    };

    // Get active resources based on the composite key
    const getActiveResources = () => {
        const [group, key] = activeCategory.split(':');
        let resources;
        if (group === 'civil3d') {
            resources = aulaData.civil3d[key] || [];
        } else {
            resources = aulaData.complementarios[key] || [];
        }

        // Apply type filter
        if (typeFilter === 'video') {
            return resources.filter(r => r.type === 'video');
        } else if (typeFilter === 'article') {
            return resources.filter(r => r.type === 'article' || r.contentFile);
        }
        return resources;
    };

    // Count resources by type for the current category
    const getResourceCounts = () => {
        const [group, key] = activeCategory.split(':');
        const resources = group === 'civil3d'
            ? (aulaData.civil3d[key] || [])
            : (aulaData.complementarios[key] || []);
        const videos = resources.filter(r => r.type === 'video').length;
        const articles = resources.filter(r => r.type === 'article' || r.contentFile).length;
        return { total: resources.length, videos, articles };
    };

    const activeResources = getActiveResources();
    const activeCategoryLabel = allCategories.find(c => c.id === activeCategory)?.label || '';
    const groupLabel = getGroupLabel();
    const counts = getResourceCounts();

    const handleCategorySelect = (catId) => {
        setActiveCategory(catId);
        setTypeFilter('all'); // Reset filter when changing category
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
                <div className="mobile-tabs-group">
                    <span className="mobile-tabs-label">Civil 3D</span>
                    <div className="mobile-tabs-row">
                        {civil3dCategories.map((cat) => (
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
                </div>
                <div className="mobile-tabs-group">
                    <span className="mobile-tabs-label">Complementarios</span>
                    <div className="mobile-tabs-row">
                        {complementCategories.map((cat) => (
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
                </div>
            </div>

            {/* Sidebar Navigation (Desktop) */}
            <aside className="resources-sidebar">
                <h3 className="sidebar-title">Aula Virtual</h3>
                <nav className="sidebar-nav">
                    {/* Civil 3D Group */}
                    <div className="sidebar-group-label">
                        <span>📐 Civil 3D</span>
                    </div>
                    {civil3dCategories.map((cat) => (
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

                    {/* Complementary Group */}
                    <div className="sidebar-group-label" style={{ marginTop: '0.75rem' }}>
                        <span>🌐 Complementarios</span>
                    </div>
                    {complementCategories.map((cat) => (
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
                    <div className="content-header-row">
                        <h1 className="content-title">
                            <span className="text-gradient">{activeCategoryLabel}</span>
                        </h1>

                        {/* Type Filter Tabs */}
                        {counts.total > 0 && (counts.videos > 0 || counts.articles > 0) && (
                            <div className="type-filter-tabs">
                                <button
                                    className={`type-filter-btn ${typeFilter === 'all' ? 'active' : ''}`}
                                    onClick={() => setTypeFilter('all')}
                                >
                                    Todos
                                    <span className="filter-count">{counts.total}</span>
                                </button>
                                {counts.videos > 0 && (
                                    <button
                                        className={`type-filter-btn ${typeFilter === 'video' ? 'active' : ''}`}
                                        onClick={() => setTypeFilter('video')}
                                    >
                                        <PlayCircle size={13} />
                                        Videos
                                        <span className="filter-count">{counts.videos}</span>
                                    </button>
                                )}
                                {counts.articles > 0 && (
                                    <button
                                        className={`type-filter-btn ${typeFilter === 'article' ? 'active' : ''}`}
                                        onClick={() => setTypeFilter('article')}
                                    >
                                        <FileText size={13} />
                                        Guías
                                        <span className="filter-count">{counts.articles}</span>
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="resource-list">
                    {activeResources.length > 0 ? (
                        activeResources.map((item) => (
                            <ResourceItem key={item.id} item={item} />
                        ))
                    ) : typeFilter !== 'all' ? (
                        <div className="resource-empty-state">
                            <p style={{ color: 'var(--text-secondary)' }}>
                                No hay {typeFilter === 'video' ? 'videos' : 'guías'} en esta categoría.
                            </p>
                            <button
                                className="type-filter-btn active"
                                style={{ marginTop: '0.75rem' }}
                                onClick={() => setTypeFilter('all')}
                            >
                                Ver todos los recursos
                            </button>
                        </div>
                    ) : (
                        <div className="resource-empty-state">
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Pronto subiremos contenido para esta sección.
                            </p>
                            <br />
                            <p style={{ color: 'var(--accent-primary)', opacity: 0.7 }}>
                                🚧 Estamos preparando material sobre <strong>{activeCategoryLabel}</strong>.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AulaVirtual;
