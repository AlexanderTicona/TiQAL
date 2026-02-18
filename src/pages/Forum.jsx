import React, { useState } from 'react';
import ForumPostCard from '../components/ForumPostCard';
import forumData from '../data/forum_posts.json';

const Forum = () => {
    const [selectedTag, setSelectedTag] = useState('Todos');

    // Extract unique tags
    const allTags = ['Todos', ...new Set(forumData.flatMap(post => post.tags || []))];

    // Filter posts
    const filteredPosts = selectedTag === 'Todos'
        ? forumData
        : forumData.filter(post => post.tags && post.tags.includes(selectedTag));


    return (
        <div style={{ padding: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

                <h1 className="section-title">
                    Comunidad <span className="text-gradient"> Autodesk</span>
                </h1>
                <p className="section-description">
                    Participación en los foros oficiales de Autodesk, resolviendo consultas y compartiendo metodologías sobre Civil 3D e Infraworks.
                </p>

                {/* Tags Filter */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '2rem',
                    marginBottom: '2rem'
                }}>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            style={{
                                background: selectedTag === tag ? 'var(--accent-primary)' : 'rgba(30, 41, 59, 0.5)',
                                color: selectedTag === tag ? 'white' : 'var(--accent-primary)',
                                border: selectedTag === tag ? 'none' : '1px solid rgba(14, 165, 233, 0.3)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '999px',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                transition: 'all 0.2s',
                                fontWeight: '500'
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Community Stats - Optional visual flair */}
                <div className="community-stats">
                    <div className="stat-item">
                        <div className="stat-number">360+</div>
                        <div className="stat-label">Soluciones Aceptadas</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">10</div>
                        <div className="stat-label">Advisor</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">Infra</div>
                        <div className="stat-label">Especialidad</div>
                    </div>
                </div>
            </div>

            <div className="forum-grid">
                {filteredPosts.map((post) => (
                    <ForumPostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Bisel/Divider */}
            <div style={{
                height: '1px',
                background: 'linear-gradient(to right, transparent, var(--grid-line), transparent)',
                margin: '3rem 0',
                width: '100%',
                opacity: 0.5
            }} />

            {/* Certifications Section - Subtle/Low Profile */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h3 className="section-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                    Certificaciones & <span className="text-gradient">Reconocimientos</span>
                </h3>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto',
                    opacity: 0.9
                }}>
                    {[
                        {
                            name: "Expert Elite",
                            src: "https://akn.unifiedprofile.autodesk.com/unifiedprofile-widgets/assets/affiliations/expert_elite/EE-2x.png",
                            height: "45px"
                        },
                        {
                            name: "ACI Gold",
                            src: "https://images.credly.com/images/fef5be66-a32d-4f16-8ea5-e104cc625d86/image.png",
                            height: "50px"
                        },
                        {
                            name: "Civil 3D Certified",
                            src: "https://images.credly.com/images/50db73db-016b-4c47-bb64-b64c95b1b4cb/AutoCAD_Civil_3D-01.png",
                            height: "50px"
                        },
                        {
                            name: "Civil 3D",
                            src: "https://forums.autodesk.com/html/@3FF0ED2BAA811E006DF74F87BF1167BD/assets/autodesk-civil-3d-product-icon.svg",
                            height: "40px"
                        },
                        {
                            name: "InfraWorks",
                            src: "https://forums.autodesk.com/html/@07B9E8378FA24090AD3AF66ECF436EA9/assets/autodesk-infraworks-product-icon.svg",
                            height: "40px"
                        },
                        {
                            name: "Navisworks",
                            src: "https://forums.autodesk.com/html/@14AA8F342BA679278477DAF36CF721C9/assets/autodesk-navisworks-manage-product-icon.svg",
                            height: "40px"
                        },
                        {
                            name: "BIM Collaborate Pro",
                            src: "https://forums.autodesk.com/html/@8617B710813A73AA3C79295C7EE6BF5F/assets/autodesk-bim-collaborate-pro-product-icon.svg",
                            height: "40px"
                        },
                    ].map((badge, index) => (
                        <div key={index}
                            className="badge-item"
                            style={{
                                filter: 'grayscale(20%)',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'grayscale(0%)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(20%)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <img
                                src={badge.src}
                                alt={badge.name}
                                title={badge.name}
                                style={{
                                    height: badge.height,
                                    width: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <a
                    href="https://forums.autodesk.com/t5/user/viewprofilepage/user-id/4039818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                >
                    Ver Perfil Completo en Autodesk
                </a>
            </div>
        </div>
    );
};

export default Forum;
