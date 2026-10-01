import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedMenu from './components/FeaturedMenu';
import CafeExperience from './components/CafeExperience';
import FullMenu from './components/FullMenu';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';

function App() {
  return (
    <div className="cap-cafe-app">
      {/* Accessibility Skip Link */}
      <a href="#hero" className="skip-link">Skip to main content</a>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedMenu />
        <CafeExperience />
        <FullMenu />
        <Gallery />
        <Visit />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}

export default App;
