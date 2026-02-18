import React from 'react';
import { PlayCircle, FileText } from 'lucide-react';

const ResourceItem = ({ item }) => {
    return (
        <div className="resource-card">
            {/* Header / Title */}
            <div className="resource-header">
                <div className="resource-icon">
                    {item.type === 'video' ? <PlayCircle size={24} /> : <FileText size={24} />}
                </div>
                <h3 className="resource-title">{item.title}</h3>
            </div>

            {/* Content Body */}
            <div className="resource-body">
                {/* Video Embed */}
                {item.type === 'video' && item.videoId && (
                    <div className="video-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${item.videoId}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {/* Article Image */}
                {item.type === 'text' && item.image && (
                    <div className="resource-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                )}

                {/* Text Content */}
                {item.content && (
                    <p className="resource-description">
                        {item.content}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ResourceItem;
