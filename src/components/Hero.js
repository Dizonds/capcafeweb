import React from 'react';
import './Hero.css';
import { ASSETS } from '../data/assets';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="section-container hero-container">
        {/* Left / Editorial Content Column */}
        <div className="hero-content">
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow">CAP CAFE • NEIGHBORHOOD ROAST &amp; BREW</span>
          </div>

          <h1 className="hero-heading">
            <span>YOU'VE COME</span>
            <span>TO THE RIGHT</span>
            <span className="hero-highlight">PLACE.</span>
          </h1>

          <p className="hero-description">
            Coffee, comfort, and a place worth staying for. Crafted with warm wood, 
            natural light, and honest Philippine hospitality.
          </p>

          <div className="hero-action-group">
            <a href="#menu" className="btn-primary">
              View Our Menu
            </a>
            <a href="#visit" className="btn-secondary">
              Visit CAP Cafe
            </a>
          </div>

          <div className="hero-meta-strip">
            <div className="meta-item">
              <span className="meta-label">ATMOSPHERE</span>
              <span className="meta-val">Warm Cream &amp; Natural Oak</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">SPECIALTY</span>
              <span className="meta-val">House Spanish &amp; Flat White</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">OPEN DAILY</span>
              <span className="meta-val">From 7:30 AM</span>
            </div>
          </div>
        </div>

        {/* Right / Photography Column with Editorial Frame */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img 
              src={ASSETS.interior} 
              alt="CAP Cafe warm minimalist interior with wooden elements and ambient lighting" 
              className="hero-image"
              loading="eager"
            />
            <div className="image-editorial-tag">
              <span className="tag-dot"></span>
              <span>Physical Cafe Interior</span>
            </div>
          </div>
          
          {/* Subtle architectural accent badge */}
          <div className="hero-floater-card">
            <div className="floater-title">Freshly Pulled Espresso</div>
            <div className="floater-subtitle">Balanced, velvety &amp; roasted with intention.</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll down to About section">
        <span className="scroll-text">EXPLORE</span>
        <div className="scroll-line">
          <div className="scroll-pip"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
