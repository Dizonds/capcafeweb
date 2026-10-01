import React from 'react';
import './Visit.css';
import { CAFE_INFO } from '../data/cafeInfo';

const Visit = () => {
  return (
    <section id="visit" className="visit-section">
      <div className="section-container">
        <div className="visit-grid">
          {/* Left Column: Hours, Location & Contact Details */}
          <div className="visit-info">
            <span className="eyebrow">PLAN YOUR VISIT</span>
            <h2 className="section-title">Step Inside CAP Cafe</h2>
            <p className="visit-lead">
              A warm welcome, fresh coffee beans grinding, and a corner waiting for you.
            </p>

            <div className="visit-blocks">
              {/* Address Block */}
              <div className="info-block">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h3 className="info-label">Address</h3>
                  <p className="info-val">{CAFE_INFO.address.line1}</p>
                  <p className="info-val-sub">{CAFE_INFO.address.line2}</p>
                  <p className="info-landmark">{CAFE_INFO.address.landmark}</p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="info-block">
                <div className="info-icon">⏰</div>
                <div className="info-text">
                  <h3 className="info-label">Opening Hours</h3>
                  {CAFE_INFO.hours.map((h, i) => (
                    <div key={i} className="hours-row">
                      <span className="hours-days">{h.days}</span>
                      <span className="hours-time">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Block */}
              <div className="info-block">
                <div className="info-icon">💬</div>
                <div className="info-text">
                  <h3 className="info-label">Contact &amp; Inquiries</h3>
                  <p className="info-val">{CAFE_INFO.contact.phone}</p>
                  <p className="info-val-sub">{CAFE_INFO.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="visit-actions">
              <a 
                href={CAFE_INFO.address.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Get Directions
              </a>
              <a 
                href={CAFE_INFO.contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                Message Us on Instagram
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Map / Atmosphere Placeholder Container */}
          <div className="visit-map-container">
            <div className="map-card">
              <div className="map-badge">
                <span className="pulse-dot"></span>
                <span>CAP Cafe Neighborhood</span>
              </div>

              <div className="map-mockup-graphic">
                <div className="map-grid-lines"></div>
                <div className="map-pin-container">
                  <div className="pin-ring"></div>
                  <div className="pin-core"></div>
                  <div className="pin-card">
                    <span className="pin-title">CAP CAFE</span>
                    <span className="pin-sub">Warm Light &amp; Coffee</span>
                  </div>
                </div>
              </div>

              <div className="map-footer-details">
                <div className="map-note-item">
                  <span className="note-title">WIFI &amp; OUTLETS</span>
                  <span className="note-val">Available for patrons</span>
                </div>
                <div className="map-note-item">
                  <span className="note-title">PARKING</span>
                  <span className="note-val">Street &amp; nearby slots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
