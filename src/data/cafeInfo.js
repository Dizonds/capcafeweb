// ==============================================================================
// CAP CAFE - CONTACT, LOCATION & OPERATING INFO
// ==============================================================================
// EDITING INSTRUCTIONS:
// You can replace these placeholders with the café's actual address, phone,
// opening hours, and social media links.
// The website displays these clearly in the "Visit Us" section and the Footer.
// ==============================================================================

export const CAFE_INFO = {
  name: 'CAP Cafe',
  tagline: "You've come to the right place.",
  subTagline: 'Coffee, comfort, and a place worth staying for.',
  
  // Location
  address: {
    line1: '[Add café address, e.g. 142 Katipunan Avenue]',
    line2: '[Barangay / District, City, Metro Manila]',
    landmark: 'Look for the warm cream facade & wooden slat door',
    googleMapsUrl: 'https://maps.google.com' // Replace with your exact Google Maps pin
  },

  // Operating Hours
  hours: [
    { days: 'Monday – Friday', time: '7:30 AM – 9:00 PM' },
    { days: 'Saturday – Sunday', time: '8:00 AM – 10:00 PM' }
  ],

  // Contact
  contact: {
    phone: '+63 [Add contact number]',
    email: 'hello@capcafe.ph',
    instagram: 'https://instagram.com/capcafe.ph',
    instagramHandle: '@capcafe.ph',
    facebook: 'https://facebook.com/capcafe.ph',
    facebookHandle: 'CAP Cafe'
  },

  // Amenities / Café Features (useful for visitor clarity)
  features: [
    { title: 'Natural Light', desc: 'Large front windows & warm ambient fixtures' },
    { title: 'Work-Friendly', desc: 'Power outlets & quiet morning corners' },
    { title: 'Fresh Bakes', desc: 'Pastries delivered fresh each morning' },
    { title: 'Espresso Bar', desc: 'Single origin and balanced house blends' }
  ]
};
