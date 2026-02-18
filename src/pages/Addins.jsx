import React from 'react';
import { Link } from 'react-router-dom';
import AddinCard from '../components/AddinCard';
import toolsData from '../data/addin_tools.json';

const Addins = () => {
    return (
        <section className="addins-container">
            <div className="addins-header">
                <div className="hero-badge">Herramientas Pro</div>
                <h1 className="section-title">
                    Add-ins & <span className="text-gradient">Plugins</span>
                </h1>
                <p className="section-description">
                    Potencia Civil 3D con herramientas personalizadas diseñadas para aumentar tu productividad y automatizar tareas repetitivas.
                </p>
            </div>

            <div className="addins-grid">
                {toolsData.map((tool) => (
                    <AddinCard key={tool.id} tool={tool} />
                ))}
            </div>

            <div className="custom-dev-cta">
                <h3>¿Necesitas una solución a medida?</h3>
                <p>Desarrollo plugins personalizados en C# y .NET para resolver tus desafíos específicos.</p>
                <Link to="/contact" className="btn btn-outline">Consultar Cotización</Link>
            </div>
        </section>
    );
};

export default Addins;
