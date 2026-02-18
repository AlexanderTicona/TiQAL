import React from 'react';
import { Link } from 'react-router-dom';
import AddinCard from '../components/AddinCard';
import toolsData from '../data/addin_tools.json';

import { X, Play, Download } from 'lucide-react';

const Addins = () => {
    const [selectedTool, setSelectedTool] = React.useState(null);

    return (
        <section className="addins-container">
            <div className="addins-header">

                <h1 className="section-title">
                    Add-ins & <span className="text-gradient">Plugins</span>
                </h1>
                <p className="section-description">
                    Potencia Civil 3D con herramientas personalizadas diseñadas para aumentar tu productividad y automatizar tareas repetitivas.
                </p>
            </div>

            <div className="addins-grid">
                {toolsData.map((tool) => (
                    // We can wrap AddinCard or pass onClick. For simplicity, let's wrap it in a div that handles the click
                    // But AddinCard has internal buttons. Let's make the whole card trigger the modal,
                    // or just pass a prop if we were modifying AddinCard.
                    // Given we can't easily modify props without changing the component file too, let's modify AddinCard next.
                    // For now, let's assume we will pass onOpen={() => setSelectedTool(tool)} to AddinCard.
                    <AddinCard key={tool.id} tool={tool} onOpen={() => setSelectedTool(tool)} />
                ))}
            </div>

            <div className="custom-dev-cta">
                <h3>¿Necesitas una solución a medida?</h3>
                <p>Desarrollo plugins personalizados en C# y .NET para resolver tus desafíos específicos.</p>
                <Link to="/contact" className="btn btn-outline">Consultar Cotización</Link>
            </div>

            {/* Detail Modal */}
            {selectedTool && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2000,
                    padding: '2rem',
                    backdropFilter: 'blur(5px)'
                }} onClick={() => setSelectedTool(null)}>
                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: '16px',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative',
                        border: '1px solid var(--grid-line)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }} onClick={(e) => e.stopPropagation()}>

                        <button
                            onClick={() => setSelectedTool(null)}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                zIndex: 10
                            }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ padding: '2rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{selectedTool.name}</h2>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                backgroundColor: 'var(--accent-primary)',
                                color: 'white',
                                fontSize: '0.8rem',
                                marginBottom: '1.5rem'
                            }}>
                                {selectedTool.version}
                            </span>

                            {selectedTool.videoUrl && (
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%',
                                    height: 0,
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    marginBottom: '2rem',
                                    backgroundColor: '#000'
                                }}>
                                    <iframe
                                        src={selectedTool.videoUrl}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 'none'
                                        }}
                                        title={selectedTool.name}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}

                            {!selectedTool.videoUrl && selectedTool.screenshot && (
                                <img
                                    src={selectedTool.screenshot}
                                    alt="Screenshot"
                                    style={{
                                        width: '100%',
                                        borderRadius: '12px',
                                        marginBottom: '2rem'
                                    }}
                                />
                            )}

                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Descripción Detallada</h3>
                            <p style={{ lineHeight: '1.7', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                                {selectedTool.longDescription || selectedTool.description}
                            </p>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={selectedTool.downloadLink} className="btn btn-primary">
                                    <Download size={18} /> Descargar
                                </a>
                                <a href={selectedTool.demoLink} className="btn btn-outline">
                                    <Play size={18} /> Ver Demo Externa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Addins;
