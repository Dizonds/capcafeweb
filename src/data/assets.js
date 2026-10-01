// ==============================================================================
// CAP CAFE - ASSET REGISTRY & CONTAINER
// ==============================================================================
// HOW TO ADD REAL IMAGES:
// Place your real files in `src/assets/`:
//   - `cap-logo.png`
//   - `cap-interior.jpg`
//   - `cap-menu.jpg`
//   - `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`, `gallery-5.jpg`
//
// Webpack's require.context is used here to safely check if your files exist in
// `src/assets/` without breaking the build when they haven't been added yet!
// ==============================================================================

// Create a safe context for assets
let assetContext = null;
try {
  assetContext = require.context('../assets', false, /\.(png|jpe?g|svg|webp)$/);
} catch (e) {
  assetContext = null;
}

const resolveAsset = (filename) => {
  if (assetContext) {
    const keys = assetContext.keys();
    const match = keys.find((k) => k === `./${filename}` || k.endsWith(`/${filename}`));
    if (match) {
      return assetContext(match);
    }
  }
  return null;
};

// Fallback high-fidelity SVG graphics calibrated to CAP Cafe's warm cream/wood aesthetic
const fallbackLogoSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
  <rect width="100%" height="100%" fill="none"/>
  <circle cx="35" cy="35" r="28" fill="%23A64216"/>
  <text x="35" y="44" font-family="'Outfit', sans-serif" font-weight="900" font-size="24" fill="%23FFFDF8" text-anchor="middle" letter-spacing="1">CAP</text>
  <text x="75" y="37" font-family="'Italiana', 'Cinzel', serif" font-weight="600" font-size="25" fill="%2334251D" letter-spacing="2">CAP CAFE</text>
  <text x="76" y="52" font-family="'Outfit', sans-serif" font-size="10.5" font-weight="500" fill="%23806B5B" letter-spacing="3.5">EST. NEIGHBORHOOD</text>
</svg>`;

const fallbackInteriorSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <linearGradient id="warmLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23FBF8F2"/>
      <stop offset="40%" stop-color="%23F3ECE0"/>
      <stop offset="100%" stop-color="%23E7D8C5"/>
    </linearGradient>
    <radialGradient id="glow" cx="60%" cy="30%" r="50%">
      <stop offset="0%" stop-color="%23FFEACC" stop-opacity="0.8"/>
      <stop offset="70%" stop-color="%23E7D8C5" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="%23D8C3AC" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="woodBar" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23806B5B"/>
      <stop offset="100%" stop-color="%234A3728"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(%23warmLight)"/>
  <rect width="1600" height="1000" fill="url(%23glow)"/>
  
  <!-- Architectural Cream & Wood Slat wall -->
  <g opacity="0.35">
    <line x1="100" y1="0" x2="100" y2="1000" stroke="%23D3C1AD" stroke-width="4"/>
    <line x1="140" y1="0" x2="140" y2="1000" stroke="%23D3C1AD" stroke-width="4"/>
    <line x1="180" y1="0" x2="180" y2="1000" stroke="%23D3C1AD" stroke-width="4"/>
    <line x1="220" y1="0" x2="220" y2="1000" stroke="%23D3C1AD" stroke-width="4"/>
    <line x1="260" y1="0" x2="260" y2="1000" stroke="%23D3C1AD" stroke-width="4"/>
  </g>

  <!-- Ambient Light Pendants -->
  <line x1="900" y1="0" x2="900" y2="280" stroke="%2334251D" stroke-width="3"/>
  <ellipse cx="900" cy="300" rx="35" ry="18" fill="%23C8954C"/>
  <circle cx="900" cy="310" r="14" fill="%23FFF6DE"/>
  <circle cx="900" cy="310" r="80" fill="%23FFE5A3" opacity="0.25"/>

  <line x1="1200" y1="0" x2="1200" y2="240" stroke="%2334251D" stroke-width="3"/>
  <ellipse cx="1200" cy="260" rx="30" ry="16" fill="%23C8954C"/>
  <circle cx="1200" cy="270" r="12" fill="%23FFF6DE"/>
  <circle cx="1200" cy="270" r="70" fill="%23FFE5A3" opacity="0.2"/>

  <!-- Minimalist Counter & Warm Stools -->
  <rect x="650" y="580" width="950" height="420" fill="url(%23woodBar)" rx="4"/>
  <rect x="640" y="560" width="960" height="26" fill="%23F6F0E6" rx="3"/>
  
  <!-- Off-white minimalist stool -->
  <rect x="800" y="660" width="110" height="18" rx="8" fill="%23FFFDF8"/>
  <line x1="820" y1="678" x2="810" y2="920" stroke="%2334251D" stroke-width="6"/>
  <line x1="890" y1="678" x2="900" y2="920" stroke="%2334251D" stroke-width="6"/>
  <line x1="814" y1="780" x2="896" y2="780" stroke="%2334251D" stroke-width="4"/>

  <!-- Subtle CAP Brand Wall Lettering -->
  <text x="380" y="440" font-family="'Italiana', serif" font-size="42" fill="%2334251D" opacity="0.45" letter-spacing="4">YOU'VE COME TO THE RIGHT PLACE.</text>
  <text x="380" y="480" font-family="'Outfit', sans-serif" font-size="16" fill="%23A64216" opacity="0.6" letter-spacing="3">CAP CAFE • WARM WOOD &amp; AMBIENT LIGHT</text>
  <text x="380" y="515" font-family="'Outfit', sans-serif" font-size="13" fill="%23806B5B" opacity="0.8">[ Place real photo into src/assets/cap-interior.jpg ]</text>
</svg>`;

const fallbackGallerySvg = (title, subtitle) => `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="gWarm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23F9F5EE"/>
      <stop offset="100%" stop-color="%23E7D8C5"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(%23gWarm)"/>
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="%23D6C5B1" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="400" cy="250" r="46" fill="%23A64216" opacity="0.12"/>
  <circle cx="400" cy="250" r="30" fill="%23A64216" opacity="0.2"/>
  <text x="400" y="340" font-family="'Italiana', serif" font-size="28" fill="%2334251D" text-anchor="middle" letter-spacing="1.5">${encodeURIComponent(title)}</text>
  <text x="400" y="375" font-family="'Outfit', sans-serif" font-size="14" fill="%23806B5B" text-anchor="middle" letter-spacing="2">${encodeURIComponent(subtitle)}</text>
  <text x="400" y="415" font-family="'Outfit', sans-serif" font-size="12" fill="%23A64216" text-anchor="middle">Ready for real asset in src/assets/</text>
</svg>`;

// Helper to resolve either PNG or JPG/JPEG automatically
const resolveImage = (baseName) => {
  return (
    resolveAsset(`${baseName}.png`) ||
    resolveAsset(`${baseName}.jpg`) ||
    resolveAsset(`${baseName}.jpeg`) ||
    resolveAsset(`${baseName}.webp`)
  );
};

const realLogo = resolveImage('cap-logo');
const realInterior = resolveImage('cap-interior');
const realMenu = resolveImage('cap-menu');
const realGallery1 = resolveImage('gallery-1');
const realGallery2 = resolveImage('gallery-2');
const realGallery3 = resolveImage('gallery-3');
const realGallery4 = resolveImage('gallery-4');
const realGallery5 = resolveImage('gallery-5');

export const ASSETS = {
  logo: realLogo || fallbackLogoSvg,
  hasRealLogo: Boolean(realLogo),
  interior: realInterior || fallbackInteriorSvg,
  hasRealInterior: Boolean(realInterior),
  menuPhoto: realMenu || null,
  gallery: [
    {
      src: realGallery1 || fallbackGallerySvg('Espresso Craft', 'Double-shot pulled with precision'),
      alt: 'CAP Cafe espresso counter and daily extraction',
      caption: 'The Morning Espresso Bar',
      tag: 'Craft'
    },
    {
      src: realGallery2 || fallbackGallerySvg('Warm Oak & Sunlight', 'Quiet seating for slow afternoons'),
      alt: 'Natural wood seating and warm cream walls',
      caption: 'Quiet Corner Seating',
      tag: 'Interior'
    },
    {
      src: realGallery3 || fallbackGallerySvg('Silky Microfoam', 'Poured with care and balance'),
      alt: 'Artisanal latte art in a ceramic cup',
      caption: 'Velvety House Latte',
      tag: 'Coffee'
    },
    {
      src: realGallery4 || fallbackGallerySvg('Fresh Daily Bakes', 'Golden croissants and pastries'),
      alt: 'Freshly baked pastries on counter display',
      caption: 'Counter Baked Pastries',
      tag: 'Bakes'
    },
    {
      src: realGallery5 || fallbackGallerySvg('The Neighborhood Flow', 'Warm lighting and calm conversations'),
      alt: 'Atmosphere of CAP Cafe patrons and wooden slats',
      caption: 'A Place Worth Staying For',
      tag: 'Atmosphere'
    }
  ]
};
