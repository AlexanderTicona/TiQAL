import React, { useState } from 'react';
import { Lock, Unlock, Calendar, Video, Download, PlayCircle, FileText } from 'lucide-react';
import communityData from '../data/community_content.json';
import '../styles/index.css';

const Community = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState('');

    // Hardcoded password for "Option A"
    const ACCESS_CODE = "CIVIL3D2025";

    const handleLogin = (e) => {
        e.preventDefault();
        if (passwordInput === ACCESS_CODE) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Código incorrecto. Intenta de nuevo.');
        }
    };

    return (
        <div style={{ padding: '2rem', minHeight: '80vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="section-title">
                    Comunidad <span className="text-gradient">TiQAL</span>
                </h1>
                <p className="section-description">
                    {communityData.publicInfo.description}
                </p>
            </div>

            {!isAuthenticated ? (
                // PUBLIC VIEW (LOCKED)
                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '3rem',
                    borderRadius: '16px',
                    border: '1px solid var(--grid-line)',
                    textAlign: 'center'
                }}>
                    <Lock size={48} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        Área de Miembros
                    </h3>

                    <div style={{
                        background: 'rgba(14, 165, 233, 0.1)',
                        padding: '1rem',
                        borderRadius: '8px',
                        marginBottom: '2rem',
                        textAlign: 'left'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
                            <Calendar size={18} /> Próxima Sesión:
                        </div>
                        <div style={{ color: 'var(--text-secondary)' }}>
                            {communityData.publicInfo.nextSession.title}<br />
                            <small>{communityData.publicInfo.nextSession.date} - {communityData.publicInfo.nextSession.time}</small>
                        </div>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <input
                                type="text"
                                placeholder="Ingresa el Código de Acceso"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--grid-line)',
                                    background: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    textAlign: 'center',
                                    fontSize: '1.1rem',
                                    letterSpacing: '1px'
                                }}
                            />
                            {error && <p style={{ color: '#ef4444', marginTop: '0.5rem', fontSize: '0.9rem' }}>{error}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            <Unlock size={18} /> Desbloquear Contenido
                        </button>
                    </form>

                    <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        ¿No tienes código? Participa en nuestras sesiones en vivo para obtenerlo.
                    </p>
                </div>
            ) : (
                // PRIVATE VIEW (UNLOCKED)
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2rem',
                        padding: '1rem',
                        background: 'rgba(34, 197, 94, 0.1)',
                        borderRadius: '8px',
                        border: '1px solid rgba(34, 197, 94, 0.2)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80' }}>
                            <Unlock size={20} />
                            <strong>Acceso Concedido</strong>
                        </div>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="btn btn-outline"
                            style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem' }}
                        >
                            Cerrar Sesión
                        </button>
                    </div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)', borderLeft: '4px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                        Recursos Exclusivos
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {communityData.vipContent.map((item) => (
                            <div key={item.id} className="resource-card">
                                <div className="resource-header">
                                    <div className="resource-icon">
                                        {item.type === 'video' ? <Video size={24} /> : <Download size={24} />}
                                    </div>
                                    <h3 className="resource-title">{item.title}</h3>
                                </div>

                                {item.type === 'video' && item.url.includes('embed') && (
                                    <div className="video-container">
                                        <iframe src={item.url} title={item.title} allowFullScreen />
                                    </div>
                                )}

                                <p className="resource-description" style={{ marginBottom: '1.5rem' }}>
                                    {item.description}
                                </p>

                                <a href={item.url} className={`btn ${item.type === 'video' ? 'btn-outline' : 'btn-primary'}`} target="_blank" rel="noreferrer">
                                    {item.type === 'video' ? <><PlayCircle size={18} /> Ver Video</> : <><Download size={18} /> Descargar</>}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Community;
