import React, { useState } from 'react';
import './Gallery.css';
import { ASSETS } from '../data/assets';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = ASSETS.gallery;

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-header-left">
            <span className="eyebrow">VISUAL DIARY</span>
            <h2 className="section-title">Life at CAP Cafe</h2>
          </div>
          <p className="gallery-lead">
            A glimpse into our quiet mornings, rich roasts, and the people who make this space feel like home.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="gallery-grid">
          {images.map((item, index) => (
            <div
              key={index}
              className={`gallery-item item-${index + 1}`}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedImage(item)}
              aria-label={`View enlarged photo: ${item.caption}`}
            >
              <div className="gallery-img-wrapper">
                <img src={item.src} alt={item.alt} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">{item.tag}</span>
                  <p className="gallery-caption">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Lightbox Modal */}
        {selectedImage && (
          <div 
            className="gallery-lightbox" 
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image modal"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="lightbox-close" 
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-img" />
              <div className="lightbox-caption-bar">
                <span className="lightbox-tag">{selectedImage.tag}</span>
                <span className="lightbox-text">{selectedImage.caption}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
