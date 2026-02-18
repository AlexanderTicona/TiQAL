import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import profileData from '../data/profile.json';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Animated Background Elements */}
            <div className="hero-bg-glow" />

            <div className="hero-content">
                <div className="hero-badge">Ingeniería Civil 4.0</div>

                <h1 className="hero-title">
                    <span className="text-gradient">{profileData.name}</span>
                </h1>

                <h2 className="hero-subtitle">
                    {profileData.title}
                </h2>

                <p className="hero-description">
                    {profileData.bio}
                </p>

                <div className="hero-actions">
                    <Link to="/projects" className="btn btn-primary">
                        Ver Proyectos <ArrowRight size={20} />
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                        Contactar
                    </Link>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

export default Hero;
