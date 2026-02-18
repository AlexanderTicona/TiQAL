import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import profileData from '../data/profile.json';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission (e.g., to a backend or service like EmailJS)
        console.log('Form submitted:', formData);
        alert('Gracias por tu mensaje. Te contactaré pronto.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section className="contact-container">
            <div className="contact-header">
                <div className="hero-badge">Hablemos</div>
                <h1 className="section-title">
                    Contacto & <span className="text-gradient">Colaboración</span>
                </h1>
                <p className="section-description">
                    ¿Tienes un proyecto en mente o necesitas consultoría especializada?
                    Escríbeme y exploremos cómo trabajar juntos.
                </p>
            </div>

            <div className="contact-content">
                {/* Contact Info Side */}
                <div className="contact-info">
                    <div className="info-card">
                        <h3>Información de Contacto</h3>
                        <p>Disponible para consultorías, desarrollo de software y capacitación.</p>

                        <div className="info-item">
                            <Mail className="info-icon" size={20} />
                            <span>{profileData.links.email}</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="info-icon" size={20} />
                            <span>Lima, Perú (Disponible Remoto)</span>
                        </div>

                        <div className="social-links-contact">
                            <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                                <Linkedin size={24} />
                            </a>
                            <a href={profileData.links.youtube} target="_blank" rel="noopener noreferrer" className="social-btn">
                                <Github size={24} /> {/* Placeholder for YouTube if Github icon used */}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form Side */}
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Consultoría Civil 3D"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Cuéntame sobre tu proyecto..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Enviar Mensaje <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
