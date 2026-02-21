import React, { useState, useEffect } from 'react';
import { PlayCircle, FileText, X, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ResourceItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
    const [markdownContent, setMarkdownContent] = useState(null);
    const [loadingMd, setLoadingMd] = useState(false);

    const isVideo = item.type === 'video';
    const isArticle = item.type === 'article' || item.contentFile;
    const thumbnail = isVideo && item.videoId
        ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
        : item.image || null;

    // Load markdown content when article modal opens
    useEffect(() => {
        if (expanded && isArticle && item.contentFile && !markdownContent) {
            setLoadingMd(true);
            // Fetch from public directory
            const basePath = import.meta.env.BASE_URL || '/';
            const mdPath = `${basePath}${item.contentFile}`;
            fetch(mdPath)
                .then(res => {
                    if (!res.ok) throw new Error('Not found');
                    return res.text();
                })
                .then(text => {
                    setMarkdownContent(text);
                    setLoadingMd(false);
                })
                .catch(() => {
                    setMarkdownContent('*Error al cargar el artículo. Verifica que el archivo existe.*');
                    setLoadingMd(false);
                });
        }
    }, [expanded, isArticle, item.contentFile, markdownContent]);

    return (
        <>
            {/* Card */}
            <article
                className="resource-card-v2"
                onClick={() => setExpanded(true)}
            >
                {/* Thumbnail / Banner */}
                <div className="resource-card-visual">
                    {thumbnail ? (
                        <>
                            <img src={thumbnail} alt={item.title} loading="lazy" />
                            {isVideo && (
                                <div className="card-play-overlay">
                                    <PlayCircle size={40} />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className={`card-placeholder-banner ${isArticle ? 'article-banner' : ''}`}>
                            <FileText size={32} />
                        </div>
                    )}
                </div>

                {/* Card Body */}
                <div className="resource-card-body">
                    <div className="resource-type-badge">
                        {isVideo ? <PlayCircle size={12} /> : <FileText size={12} />}
                        <span>{isVideo ? 'Video' : 'Guía'}</span>
                    </div>
                    <h3 className="resource-card-title">{item.title}</h3>
                    <p className="resource-card-excerpt">{item.content}</p>
                </div>
            </article>

            {/* Modal Overlay */}
            {expanded && (
                <div className="resource-modal-overlay" onClick={() => setExpanded(false)}>
                    <div
                        className={`resource-modal ${isArticle ? 'resource-modal--article' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="resource-modal-close"
                            onClick={() => setExpanded(false)}
                        >
                            <X size={20} />
                        </button>

                        {/* Video Embed */}
                        {isVideo && item.videoId && (
                            <div className="video-container">
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                                    title={item.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        {/* Article with Markdown */}
                        {isArticle && item.contentFile && (
                            <div className="resource-modal-article">
                                {loadingMd ? (
                                    <div className="article-loading">
                                        <div className="spinner"></div>
                                        <span>Cargando artículo...</span>
                                    </div>
                                ) : markdownContent ? (
                                    <div className="markdown-body">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
                                    </div>
                                ) : null}
                            </div>
                        )}

                        {/* Simple content (no markdown file) */}
                        {!isArticle && !isVideo && (
                            <div className="resource-modal-content">
                                <div className="resource-type-badge">
                                    <FileText size={12} />
                                    <span>Guía</span>
                                </div>
                                <h2 className="resource-modal-title">{item.title}</h2>
                                <p className="resource-modal-text">{item.content}</p>
                            </div>
                        )}

                        {/* Video content section */}
                        {isVideo && (
                            <div className="resource-modal-content">
                                <div className="resource-type-badge">
                                    <PlayCircle size={12} />
                                    <span>Video</span>
                                </div>
                                <h2 className="resource-modal-title">{item.title}</h2>
                                <p className="resource-modal-text">{item.content}</p>

                                {item.videoId && (
                                    <a
                                        href={`https://www.youtube.com/watch?v=${item.videoId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resource-external-link"
                                    >
                                        <ExternalLink size={14} />
                                        Ver en YouTube
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ResourceItem;
