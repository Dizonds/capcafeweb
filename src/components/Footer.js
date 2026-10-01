import React from 'react';
import './Footer.css';
import { ASSETS } from '../data/assets';
import { CAFE_INFO } from '../data/cafeInfo';

const Footer = () => {
  return (
    <footer className="cap-footer">
      <div className="section-container">
        {/* Upper Brand Statement */}
        <div className="footer-top">
          <div className="footer-brand-side">
            {ASSETS.hasRealLogo ? (
              <img src={ASSETS.logo} alt="CAP Cafe" className="footer-logo" />
            ) : (
              <div className="footer-brand-badge">
                <span className="footer-badge-cap">CAP</span>
                <span className="footer-badge-name">CAFE</span>
              </div>
            )}
            <p className="footer-tagline">
              "YOU'VE COME TO THE RIGHT PLACE."
            </p>
            <p className="footer-description">
              A warm, minimal neighborhood café designed with natural wood, cream walls, 
              and honest Philippine specialty coffee.
            </p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-group">
              <span className="footer-heading">NAVIGATION</span>
              <ul className="footer-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#featured">Featured Drinks</a></li>
                <li><a href="#story">The Experience</a></li>
                <li><a href="#menu">Full Menu</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#visit">Visit</a></li>
              </ul>
            </div>

            <div className="footer-group">
              <span className="footer-heading">HOURS</span>
              <p className="footer-meta-text">Monday – Friday</p>
              <p className="footer-meta-val">7:30 AM – 9:00 PM</p>
              <p className="footer-meta-text" style={{ marginTop: '0.6rem' }}>Saturday – Sunday</p>
              <p className="footer-meta-val">8:00 AM – 10:00 PM</p>
            </div>

            <div className="footer-group">
              <span className="footer-heading">CONNECT</span>
              <ul className="footer-links">
                <li>
                  <a href={CAFE_INFO.contact.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram: {CAFE_INFO.contact.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={CAFE_INFO.contact.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook: {CAFE_INFO.contact.facebookHandle}
                  </a>
                </li>
                <li>
                  <span className="footer-meta-val">{CAFE_INFO.contact.phone}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} CAP Cafe. All rights reserved.
          </p>
          <p className="footer-motto-subtle">
            Warm cream • Natural oak • Ambient light
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
