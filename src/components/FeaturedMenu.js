import React from 'react';
import './FeaturedMenu.css';
import { MENU_ITEMS, formatPeso } from '../data/menu';

const FeaturedMenu = () => {
  const featuredDrinks = MENU_ITEMS.filter((item) => item.featured);

  return (
    <section id="featured" className="featured-section">
      <div className="section-container">
        {/* Editorial Header */}
        <div className="featured-header">
          <div className="featured-header-text">
            <span className="eyebrow">HOUSE SELECTIONS</span>
            <h2 className="section-title">The Drinks Worth Lingering For</h2>
            <p className="featured-subtitle">
              Poured with intentional ratios, organic milk, and freshly ground beans.
            </p>
          </div>
          <div className="featured-header-action">
            <a href="#menu" className="btn-secondary">
              Explore Full Menu
            </a>
          </div>
        </div>

        {/* Featured Editorial Grid */}
        <div className="featured-grid">
          {featuredDrinks.map((item, index) => (
            <article key={item.id} className="featured-card">
              <div className="featured-card-top">
                <span className="item-tag">{item.tag || 'Craft'}</span>
                <span className="item-number">0{index + 1}</span>
              </div>

              <div className="featured-card-middle">
                <h3 className="featured-item-name">{item.name}</h3>
                <p className="featured-item-desc">{item.description}</p>
              </div>

              <div className="featured-card-bottom">
                <div className="featured-divider-line"></div>
                <div className="featured-price-row">
                  <span className="price-label">Price</span>
                  <span className="item-price">{formatPeso(item.price)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Brand statement bar */}
        <div className="featured-footer-callout">
          <span className="callout-symbol">✦</span>
          <span className="callout-text">
            "YOU'VE COME TO THE RIGHT PLACE" — All drinks can be customized with oat or soy milk upon request.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
