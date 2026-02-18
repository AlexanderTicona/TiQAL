import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, Linkedin, Facebook } from 'lucide-react';
import profileData from '../data/profile.json';
import '../styles/index.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Recursos Civil 3D', path: '/resources' },
    { name: 'Recursos Infraworks', path: '/resources-infraworks' },
    { name: 'Foro Autodesk', path: '/forum' },
    { name: 'Add-ins & Tools', path: '/addins' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--grid-line)'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <img src={logo} alt="TiQAL Logo" style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: isActive(link.path) ? 'var(--accent-primary)' : 'var(--text-primary)',
                fontWeight: isActive(link.path) ? '600' : '400',
                fontSize: '0.95rem'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none', // Hidden on desktop normally, handled via CSS media queries later
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-secondary)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid var(--grid-line)'
        }}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                color: isActive(link.path) ? 'var(--accent-primary)' : 'var(--text-primary)',
                fontSize: '1.1rem'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer style={{
    backgroundColor: 'var(--bg-secondary)',
    padding: '3rem 2rem',
    marginTop: 'auto',
    borderTop: '1px solid var(--grid-line)'
  }}>
    <div style={{
      maxWidth: '1600px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      textAlign: 'center'
    }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href={profileData.links.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook size={24} />
        </a>
        <a href={profileData.links.youtube} target="_blank" rel="noopener noreferrer">
          <Youtube size={24} />
        </a>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} {profileData.name} | {profileData.title}
      </p>
    </div>
  </footer>
);

const BasicLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, position: 'relative' }}>
        <div className="bg-grid" />
        <div className="bg-contours" />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
