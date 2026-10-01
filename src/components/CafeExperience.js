import React from 'react';
import './CafeExperience.css';
import { ASSETS } from '../data/assets';

const CafeExperience = () => {
  return (
    <section id="story" className="experience-section">
      <div className="section-container">
        {/* Giant architectural statement header */}
        <div className="experience-statement">
          <span className="eyebrow">THE PHYSICAL ATMOSPHERE</span>
          <h2 className="statement-heading">
            Made for staying a little longer.
          </h2>
          <div className="brand-motto-row">
            <span className="motto-word">SIT.</span>
            <span className="motto-divider">/</span>
            <span className="motto-word">SIP.</span>
            <span className="motto-divider">/</span>
            <span className="motto-word motto-highlight">STAY.</span>
          </div>
        </div>

        {/* Editorial composition */}
        <div className="experience-layout">
          <div className="experience-gallery-main">
            <div className="main-frame">
              <img 
                src={ASSETS.gallery[4]?.src || ASSETS.interior} 
                alt="Patrons enjoying warm ambient lighting at CAP Cafe" 
                className="exp-img"
                loading="lazy"
              />
              <div className="exp-img-caption">
                Natural wood, warm cream walls, and calm music.
              </div>
            </div>
          </div>

          <div className="experience-details-column">
            <div className="experience-card">
              <span className="exp-num">01</span>
              <h3 className="exp-title">Catching Up With Friends</h3>
              <p className="exp-desc">
                Low-slung tables and comfortable off-white seating created for relaxed
                laughter, shared desserts, and conversations without the rush.
              </p>
            </div>

            <div className="experience-card">
              <span className="exp-num">02</span>
              <h3 className="exp-title">Studying &amp; Deep Work</h3>
              <p className="exp-desc">
                Even morning lighting, accessible outlets, and quiet background chatter
                that helps you settle in with a laptop or an open textbook.
              </p>
            </div>

            <div className="experience-card">
              <span className="exp-num">03</span>
              <h3 className="exp-title">Having Coffee Alone</h3>
              <p className="exp-desc">
                Counter seats overlooking the bar. Watch the barista extract your shot,
                take in the smell of warm milk, and enjoy a quiet pause in the day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeExperience;
