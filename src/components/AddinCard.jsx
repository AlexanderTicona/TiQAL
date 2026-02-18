import React from 'react';
import { Download, Youtube, CheckCircle } from 'lucide-react';

const AddinCard = ({ tool }) => {
    return (
        <div className="addin-card">
            <div className="addin-header">
                <div className="addin-icon-container">
                    {tool.image ? (
                        <img src={tool.image} alt={tool.name} className="addin-icon-img" />
                    ) : (
                        <div className="addin-icon-placeholder">
                            {tool.name.substring(0, 2).toUpperCase()}
                        </div>
                    )}
                </div>
                <div className="addin-title-row">
                    <h3 className="addin-title">{tool.name}</h3>
                    <span className="addin-version">{tool.version}</span>
                </div>
            </div>

            <p className="addin-description">{tool.description}</p>

            <div className="addin-features">
                {tool.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <CheckCircle size={14} className="feature-icon" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <div className="addin-actions">
                <a href={tool.downloadLink} className="btn btn-primary btn-sm">
                    <Download size={18} /> Descargar
                </a>
                <a href={tool.demoLink} className="btn btn-outline btn-sm">
                    <Youtube size={18} /> Demo
                </a>
            </div>
        </div>
    );
};

export default AddinCard;
