import React from 'react';
import { MessageSquare, ExternalLink, CheckCircle2 } from 'lucide-react';

const ForumPostCard = ({ post }) => {
    return (
        <div className="forum-card">
            <div className="forum-card-header">
                <div className="forum-topic-badge">
                    {post.topic}
                </div>
                {post.isSolution && (
                    <div className="solution-badge" title="Solución Aceptada">
                        <CheckCircle2 size={16} /> Solución
                    </div>
                )}
            </div>

            <h3 className="forum-card-title">{post.title}</h3>

            <p className="forum-card-summary">{post.summary}</p>

            <div className="forum-card-footer">
                <div className="forum-meta">
                    <MessageSquare size={16} />
                    <span>Autodesk Community</span>
                </div>
                <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="forum-btn"
                >
                    Ver Discusión <ExternalLink size={16} />
                </a>
            </div>
        </div>
    );
};

export default ForumPostCard;
