import React from 'react';
import './About.css';
import { ASSETS } from '../data/assets';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Visual Column / Architectural Composition */}
          <div className="about-visual">
            <div className="about-image-card">
              <img 
                src={ASSETS.gallery[1]?.src || ASSETS.interior} 
                alt="CAP Cafe seating with light wood and calm sunlight"
                className="about-img"
                loading="lazy"
              />
              <div className="about-accent-badge">
                <span className="accent-number">01</span>
                <span className="accent-text">Warm Minimalist Design</span>
              </div>
            </div>
            
            {/* Editorial quote block overlapping */}
            <div className="about-floating-quote">
              <p className="floating-quote-text">
                "We built this space for slow sips, easy conversations, and honest coffee."
              </p>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className="about-text-content">
            <span className="eyebrow">ABOUT CAP CAFE</span>
            
            <h2 className="about-heading">
              A little place for coffee, conversations, and slow afternoons.
            </h2>

            <div className="about-body">
              <p>
                CAP Cafe is a warm neighborhood café made for quick morning runs,
                long conversations, study sessions, and quiet breaks.
              </p>
              <p>
                Inside, you’ll find textured cream walls, natural light wood accents, 
                and ambient warm lighting designed to make you exhale the moment you step in. 
                Whether you’re here for our signature iced latte or sitting with a notebook 
                for two hours, there's always a seat waiting for you.
              </p>
            </div>

            {/* Design & Vibe Highlights */}
            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-index">01 / ROAST</div>
                <h3 className="pillar-title">Balanced Extractions</h3>
                <p className="pillar-desc">
                  Carefully dialed espresso roasted to highlight cocoa, sweetness, and smooth body.
                </p>
              </div>

              <div className="pillar-item">
                <div className="pillar-index">02 / SPACE</div>
                <h3 className="pillar-title">Thoughtful Seating</h3>
                <p className="pillar-desc">
                  Off-white textures, wooden finishes, and comfortable spacing to work or unwind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
