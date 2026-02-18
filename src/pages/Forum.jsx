import React from 'react';

const Forum = () => {
    return (
        <div style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 className="section-title">Foro Civil 3D</h1>
            <p className="section-description" style={{ marginBottom: '2rem' }}>
                Un espacio para compartir conocimientos, dudas y aportes sobre ingeniería y software.
            </p>

            <div style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--grid-line)',
                borderRadius: '12px',
                maxWidth: '600px'
            }}>
                <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>🚧 En Construcción</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Estamos preparando este módulo para conectar a la comunidad.
                    Pronto podrás iniciar discusiones, compartir scripts y resolver dudas.
                </p>
            </div>
        </div>
    );
};

export default Forum;
