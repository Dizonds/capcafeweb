import React, { useState } from 'react';
import './FullMenu.css';
import { MENU_ITEMS, CATEGORIES, formatPeso } from '../data/menu';

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="menu-header">
          <span className="eyebrow">OUR DRINKS &amp; BAKES</span>
          <h2 className="section-title">The Full Menu</h2>
          <p className="menu-subtitle">
            All espresso beverages are crafted with a balanced double shot. Alternative milks available upon request.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="menu-filters" role="tablist" aria-label="Menu Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`menu-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items List - 2 Column Editorial Layout */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-row-item">
              <div className="menu-row-header">
                <div className="menu-row-title-wrap">
                  <h3 className="menu-row-title">{item.name}</h3>
                  {item.featured && <span className="featured-badge">Featured</span>}
                </div>
                <div className="menu-dots-divider" aria-hidden="true"></div>
                <span className="menu-row-price">{formatPeso(item.price)}</span>
              </div>
              <p className="menu-row-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Friendly Menu Note */}
        <div className="menu-footer-note">
          <p>
            * Prices and pastry availability may change based on daily counter bakes. 
            Got dietary preferences or allergies? Feel free to ask our barista at the counter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullMenu;
