export interface ServiceItem {
  id: string;
  name: string;
  category: 'Marketing' | 'Corporate' | 'Events & Display' | 'Publishing';
  shortDesc: string;
  typicalUses: string;
  popularFinishes: string[];
  standardSizes: string[];
}

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: 'visiting-cards',
    name: 'Visiting Card Printing',
    category: 'Corporate',
    shortDesc: 'Crisp, memorable business cards engineered with high-density cardstock and pristine edge-cutting.',
    typicalUses: 'Networking, corporate identity, client handovers',
    popularFinishes: ['350gsm–450gsm Silk', 'Matte Lamination', 'Soft-Touch Velvet', 'Gloss Accent'],
    standardSizes: ['85 × 55 mm (UK Standard)', '90 × 50 mm', 'Custom square']
  },
  {
    id: 'brochure-printing',
    name: 'Brochure Printing',
    category: 'Marketing',
    shortDesc: 'Multi-page folded brochures showcasing company services, products, and detailed presentations with vivid color balance.',
    typicalUses: 'Company profiles, property showcases, sales packets',
    popularFinishes: ['Bi-fold', 'Tri-fold (Z-fold / Roll-fold)', 'Silk or Gloss text weight', 'Creased heavy covers'],
    standardSizes: ['A4 folded to A5', 'A4 6-panel', 'Square format']
  },
  {
    id: 'flyer-leaflet-printing',
    name: 'Flyer & Leaflet Printing',
    category: 'Marketing',
    shortDesc: 'High-impact promotional leaflets for direct-mail drops, counter displays, and local distribution campaigns.',
    typicalUses: 'Promotions, local announcements, event launches, menu inserts',
    popularFinishes: ['130gsm Economy Gloss', '170gsm Silk Premium', '300gsm Card Leaflet'],
    standardSizes: ['A6 (105 × 148 mm)', 'A5 (148 × 210 mm)', 'DL (99 × 210 mm)', 'A4']
  },
  {
    id: 'poster-printing',
    name: 'Poster Printing',
    category: 'Events & Display',
    shortDesc: 'Richly saturated wide-format posters designed for indoor displays, noticeboards, exhibitions, and retail windows.',
    typicalUses: 'Retail promotions, gig posters, presentations, art exhibitions',
    popularFinishes: ['190gsm Satin Photo', '200gsm Matte Coated', 'Anti-glare UV resistant ink'],
    standardSizes: ['A3', 'A2', 'A1', 'A0', 'Bespoke custom length']
  },
  {
    id: 'banner-printing',
    name: 'Banner Printing',
    category: 'Events & Display',
    shortDesc: 'Durable, eye-catching vinyl and pull-up roll banners engineered for high visibility and reliable display.',
    typicalUses: 'Trade stands, store entrances, outdoor celebrations, conferences',
    popularFinishes: ['Heavyweight 440gsm PVC', 'Roller banner cassette base', 'Eyelets & hemmed edges'],
    standardSizes: ['800 × 2000 mm (Roller)', '2 × 1 m PVC', '3 × 1 m PVC', 'Custom dimension']
  },
  {
    id: 'sticker-label-printing',
    name: 'Sticker & Label Printing',
    category: 'Marketing',
    shortDesc: 'Custom self-adhesive stickers and product packaging labels cut cleanly to any shape or sheet specification.',
    typicalUses: 'Product jars, boxes, address labels, tamper seals, branding badges',
    popularFinishes: ['Matte Paper Adhesive', 'Water-resistant Vinyl', 'Kiss-cut on sheets', 'Die-cut singles'],
    standardSizes: ['37mm / 50mm circles', 'Rectangular 70 × 40 mm', 'Custom contour cut']
  },
  {
    id: 'invitation-card-printing',
    name: 'Invitation Card Printing',
    category: 'Events & Display',
    shortDesc: 'Elegant invitation cards with tactile finishes and rich digital pigments for special gatherings and formal events.',
    typicalUses: 'Weddings, VIP previews, gala dinners, corporate milestones',
    popularFinishes: ['350gsm Uncoated Wove', 'Pearlescent Shimmer', 'Textured Linen stock'],
    standardSizes: ['A6 flat or folded', '5 × 7 inches', 'A5 postcard', 'Square 148 mm']
  },
  {
    id: 'certificate-printing',
    name: 'Certificate Printing',
    category: 'Corporate',
    shortDesc: 'Formal recognition and achievement certificates printed with razor-sharp micro-typography and authentic heavyweight parchment.',
    typicalUses: 'Course completion, accreditation, staff appreciation, training diplomas',
    popularFinishes: ['250gsm–300gsm Heavy Card', 'Laid Parchment feel', 'Matte smooth archival stock'],
    standardSizes: ['A4 (210 × 297 mm)', 'A3', 'US Letter']
  },
  {
    id: 'business-stationery-printing',
    name: 'Business Stationery Printing',
    category: 'Corporate',
    shortDesc: 'Consistent, premium letterheads, compliment slips, and corporate document paper that project immediate professionalism.',
    typicalUses: 'Official correspondence, legal invoices, signed certificates, client packets',
    popularFinishes: ['100gsm–120gsm Laser-guaranteed bond', 'Smooth premium white', 'Matching envelopes'],
    standardSizes: ['A4 Letterheads', 'DL Compliment Slips (210 × 99 mm)']
  },
  {
    id: 'photo-canvas-printing',
    name: 'Photo & Canvas Printing',
    category: 'Events & Display',
    shortDesc: 'Museum-grade photo enlargements and tightly wrapped canvas frames with deep color fidelity and archival permanence.',
    typicalUses: 'Studio photo framing, office wall art, commemorative gifts',
    popularFinishes: ['Cotton canvas on solid wood stretcher', 'Lustre photo paper', 'Gallery wrap edge'],
    standardSizes: ['20 × 30 cm', '30 × 40 cm', '40 × 60 cm', '50 × 75 cm', 'Custom frame sizes']
  },
  {
    id: 'menu-card-printing',
    name: 'Menu Card Printing',
    category: 'Marketing',
    shortDesc: 'Hard-wearing, wipeable menus and table-talkers tailored for restaurants, cafés, pop-ups, and special banquets.',
    typicalUses: 'Daily menus, drinks lists, dessert cards, QR tent cards',
    popularFinishes: ['Encapsulated wipe-clean laminate', 'Tear-resistant synthetic paper', 'Table tent creased'],
    standardSizes: ['A4 single or double sided', 'A5 folded booklet', 'Tall narrow DL', 'A3 placemat']
  },
  {
    id: 'book-catalogue-printing',
    name: 'Book & Catalogue Printing',
    category: 'Publishing',
    shortDesc: 'Short-run booklets, instruction manuals, lookbooks, and annual product catalogues bound with precision finishing.',
    typicalUses: 'Product catalogs, conference programmes, manuals, lookbooks',
    popularFinishes: ['Saddle-stitched (stapled spine)', 'Wire-O binding', 'Heavier gloss/matte cover wrap'],
    standardSizes: ['A4 portrait / landscape', 'A5 booklet', 'Square 210 × 210 mm']
  }
];

export const BUSINESS_INFO = {
  name: 'Leah Brady',
  type: 'Digital printing service',
  tagline: 'Print Your Ideas, Make an Impact',
  phone: '447414009017',
  phoneFormatted: '+44 7414 009017',
  phoneDisplayLocal: '07414 009017',
  whatsapp: '447414009017',
  address: '26 Trefoil House Crest Avenue, Grays, England, RM17 6RP',
  postcode: 'RM17 6RP',
  locality: 'Grays, Essex',
  mapsQueryUrl: 'https://www.google.com/maps/search/?api=1&query=26+Trefoil+House+Crest+Avenue+Grays+England+RM17+6RP',
  primaryColor: '#EA580C', // vibrant clean orange
};
