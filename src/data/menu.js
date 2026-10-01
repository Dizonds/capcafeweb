// ==============================================================================
// CAP CAFE - MENU DATA
// ==============================================================================
// EDITING INSTRUCTIONS:
// You can easily modify, add, or remove drink and pastry items here.
// Prices are stored as numbers (formatted automatically in Philippine Pesos: ₱).
// Set `featured: true` to display the item on the editorial Featured section.
// Categories supported: 'hot' | 'iced' | 'specials' | 'pastries'
// ==============================================================================

export const CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'hot', label: 'Hot Coffee' },
  { id: 'iced', label: 'Iced Coffee' },
  { id: 'specials', label: 'Specials & Non-Coffee' },
  { id: 'pastries', label: 'Pastries & Bakes' }
];

export const MENU_ITEMS = [
  // --- HOT COFFEE ---
  {
    id: 'hot-espresso',
    name: 'Espresso',
    price: 90,
    category: 'hot',
    description: 'Double shot extracted from medium-dark roast beans with a rich crema.',
    featured: false,
    tag: 'Classic'
  },
  {
    id: 'hot-americano',
    name: 'Americano',
    price: 100,
    category: 'hot',
    description: 'Fresh espresso pulled over hot water for a crisp, clean cup.',
    featured: false,
    tag: 'House Blend'
  },
  {
    id: 'hot-latte',
    name: 'Café Latte',
    price: 125,
    category: 'hot',
    description: 'Silky microfoam over espresso, naturally sweet and smooth.',
    featured: true,
    tag: 'Signature'
  },
  {
    id: 'hot-cappuccino',
    name: 'Cappuccino',
    price: 125,
    category: 'hot',
    description: 'Equal parts espresso, velvety steamed milk, and airy foam.',
    featured: false,
    tag: 'Classic'
  },
  {
    id: 'hot-flat-white',
    name: 'Flat White',
    price: 135,
    category: 'hot',
    description: 'Intense double ristretto integrated with velvety micro-textured milk.',
    featured: true,
    tag: 'Barista Choice'
  },
  {
    id: 'hot-spanish-latte',
    name: 'Hot Spanish Latte',
    price: 140,
    category: 'hot',
    description: 'Espresso sweetened with gentle condensed milk and textured cream.',
    featured: true,
    tag: 'Crowd Favorite'
  },

  // --- ICED COFFEE ---
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    price: 110,
    category: 'iced',
    description: 'Chilled double espresso served over crystal ice and crisp water.',
    featured: false,
    tag: 'Refreshing'
  },
  {
    id: 'iced-latte',
    name: 'Iced CAP Latte',
    price: 135,
    category: 'iced',
    description: 'Chilled whole milk layered with dark espresso over clear cubes.',
    featured: true,
    tag: 'Best Seller'
  },
  {
    id: 'iced-spanish-latte',
    name: 'Iced Spanish Latte',
    price: 150,
    category: 'iced',
    description: 'Creamy milk, sweet drizzle, and robust espresso shaken cold.',
    featured: true,
    tag: 'Signature'
  },
  {
    id: 'iced-vanilla-sweet-cream',
    name: 'Vanilla Sweet Cold Brew',
    price: 160,
    category: 'iced',
    description: '16-hour slow steep cold brew topped with house-made vanilla cream.',
    featured: true,
    tag: 'Craft'
  },
  {
    id: 'iced-burnt-caramel',
    name: 'Burnt Caramel Iced Coffee',
    price: 165,
    category: 'iced',
    description: 'Deep toasted sugar note infused with espresso and sea-salt froth.',
    featured: false,
    tag: 'Specialty'
  },

  // --- SPECIALS & NON-COFFEE ---
  {
    id: 'matcha-latte',
    name: 'Ceremonial Matcha Latte',
    price: 155,
    category: 'specials',
    description: 'Shizuoka stone-ground matcha whisked fresh with silky milk.',
    featured: true,
    tag: 'Non-Coffee'
  },
  {
    id: 'dirty-matcha',
    name: 'Dirty Matcha',
    price: 175,
    category: 'specials',
    description: 'Whisked ceremonial matcha topped with a float of bold espresso.',
    featured: false,
    tag: 'House Special'
  },
  {
    id: 'chocolate-tablea',
    name: 'Artisanal Hot Chocolate',
    price: 140,
    category: 'specials',
    description: 'Local roasted cacao tablea melted into frothy steamed milk.',
    featured: false,
    tag: 'Local Origin'
  },
  {
    id: 'peach-sparkling-tea',
    name: 'Honey Peach Cold Brew Tea',
    price: 130,
    category: 'specials',
    description: 'Slow-brewed black tea lightly infused with wild honey and peach.',
    featured: false,
    tag: 'Cooler'
  },

  // --- PASTRIES & BAKES ---
  {
    id: 'butter-croissant',
    name: 'French Butter Croissant',
    price: 95,
    category: 'pastries',
    description: 'Flaky, laminated layers baked golden daily at the counter.',
    featured: false,
    tag: 'Daily Bake'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    price: 115,
    category: 'pastries',
    description: 'Flaky puff pastry wrapped around bittersweet dark chocolate batons.',
    featured: false,
    tag: 'Daily Bake'
  },
  {
    id: 'cinnamon-scroll',
    name: 'Warm Cinnamon Brioche',
    price: 110,
    category: 'pastries',
    description: 'Pillowy brioche swirl with brown sugar Ceylon cinnamon and glaze.',
    featured: false,
    tag: 'Fresh'
  }
];

// Helper to format Philippine Peso
export const formatPeso = (amount) => {
  return `₱${amount.toLocaleString('en-PH')}`;
};
