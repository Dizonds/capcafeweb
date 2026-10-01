import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ASSETS } from '../data/assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`cap-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="cap-navbar-inner">
        {/* Brand Logo / Mark */}
        <a href="#hero" className="brand-logo" onClick={closeMenu} aria-label="CAP Cafe Home">
          {ASSETS.hasRealLogo ? (
            <img src={ASSETS.logo} alt="CAP Cafe" className="logo-img" />
          ) : (
            <div className="brand-badge">
              <span className="badge-cap">CAP</span>
              <span className="badge-text">CAFE</span>
            </div>
          )}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#story">Experience</a></li>
            <li><a href="#menu">Full Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#visit">Visit</a></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="navbar-cta-group">
          <a href="#menu" className="btn-menu-pill">
            View Menu
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button"
            className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-drawer-inner">
          <div className="mobile-tagline">"You've come to the right place."</div>
          <ul className="mobile-nav-links">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#featured" onClick={closeMenu}>Featured Drinks</a></li>
            <li><a href="#story" onClick={closeMenu}>The Experience</a></li>
            <li><a href="#menu" onClick={closeMenu}>Full Menu</a></li>
            <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#visit" onClick={closeMenu}>Visit CAP Cafe</a></li>
          </ul>
          <div className="mobile-footer-info">
            <p className="mobile-hours-note">Open Daily • Warm Light &amp; Fresh Coffee</p>
            <a href="#visit" className="btn-primary" onClick={closeMenu} style={{ width: '100%', marginTop: '1rem' }}>
              Find Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
