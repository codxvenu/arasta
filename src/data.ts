import { Product, Testimonial, InstagramPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'aurelia-astrolabe-clock',
    title: 'The Aurelia Astrolabe Mantel Clock',
    category: 'Handcrafted Clocks',
    finish: 'Brushed Antique Bronze & Gilded Gold',
    material: 'Solid Brass & Polished Quartzite',
    dimensions: '18.5 x 12.2 x 6.5 inches (47 x 31 x 17 cm)',
    roomSuitability: 'Drawing Rooms, Executive Suites, Living Chambers',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800', // Astrolabe golden details
      'https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&q=80&w=800', // Setting layout
      'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=800'  // Detailed gears
    ],
    designInspiration: 'Inspired by late-renaissance astronomical instruments, the Aurelia combines mechanical complexity with minimalist sculptural form. The dial is suspended within a concentric polished framework, capturing casting shadows and creating an exquisite, functional centerpoint for formal mantelpiece arrangements.',
    craftsmanshipDetails: 'Each gear assembly is individually hand-milled, calibrated, and checked across 140 hours of meticulous work in our dedicated clockmaking atelier in Munich. The solid bronze chassis is treated with a hand-burnished oil rubbed finish, safeguarding the natural texture while ensuring smooth mechanical rotation.',
    stylingRecommendations: 'Position on a dark marble fireplace mantel or a heavy dark console, flanked by textured ceramic objects or leather-bound journals. Allow sufficient breathing room around the clock to let its silhouette behave as a standalone dramatic focal point.',
    placementSuggestions: 'Best displayed on fireplace mantels, signature entrance console tables, or deep executive study desks.',
    careInstructions: 'Wipe down with a dry, non-abrasive microfiber cloth. Avoid acidic chemical metal polishers to preserve the authentic oil-rubbed bronze protective crust. Wind the spring-driven mechanical movement once weekly.',
    serialNo: 'PAV-7782-AC',
    curatorInspiration: 'A mechanical sculpture that does more than measure time—it commands attention, invites gaze, and anchors a room with quiet luxury and elegant design discipline.'
  },
  {
    id: 'fluted-travertine-vessel',
    title: 'The Fluted Travertine Masterpiece Vessel',
    category: 'Decorative Objects',
    finish: 'Honed Raw Matte Finish',
    material: 'Premium Tuscan Travertine Stone',
    dimensions: '22.5 x 14.0 x 14.0 inches (57 x 36 x 36 cm)',
    roomSuitability: 'Airy Foyers, Dining Sideboards, Minimalist Living Zones',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800', // Honed travertine texture
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', // Curated display
      'https://images.unsplash.com/photo-1551913902-c92207136625?auto=format&fit=crop&q=80&w=800'  // Detail of geological grooves
    ],
    designInspiration: 'A gorgeous celebration of neoclassical architecture, re-imagined with modern asymmetrical curves. Crafted to utilize generous negative space, the fluted cavities are deep-cut to catch and refract ambient morning and evening light.',
    craftsmanshipDetails: 'Formed out of a hand-selected single massive block of raw Italian Travertine stone. Our artisans preserve the rich geological pockets and unique calcite currents, brushing the finished material into a soft, highly tactile low-luster matte.',
    stylingRecommendations: 'We recommend displaying the vessel entirely empty to serve as a pure architectural sculpture, or styled elegantly with a few organic dried willow branches. Works beautifully as a warm contrast on light oak furniture.',
    placementSuggestions: 'Signature entry pedestals, wide sideboard tables, or recessed wall alcoves under soft lighting.',
    careInstructions: 'Do not fill with standing water directly, as raw travertine stone is organically porous. Place a small protective internal glass sleeve if styling with fresh stems. Clean only with a damp cotton cloth.',
    serialNo: 'PAV-3044-TV',
    curatorInspiration: 'An ideal harmony of raw organic mineral beauty and highly disciplined architectural structure—a statement piece of timeless design.'
  },
  {
    id: 'gilded-abstract-horizon-triptych',
    title: 'The Gilded Abstract Horizon Triptych',
    category: 'Wall Art',
    finish: 'Hand-Applied Gold Leaf & Textured Gesso',
    material: 'Belgian Linen on Hardwood Floating Frames',
    dimensions: 'Three Panels, Each 48.0 x 24.0 x 2.0 inches (122 x 61 x 5 cm)',
    roomSuitability: 'Master Suites, Luxury Lounges, Formal Dining Rooms',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800', // Gold abstract artwork
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800', // Detail of leaf application
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'  // Gold leaf shimmer texture
    ],
    designInspiration: 'Capturing the sublime serenity of ocean skylines during golden hour dusk. This triptych abstracts the horizon into an elegant, modern visual coordinate that infuses warmth into minimalist interiors.',
    craftsmanshipDetails: 'Constructed over thick Belgian linen canvas. The surface is hand-combed with a heavy gesso base paste to establish dynamic vertical lines, then hand-gilded with fine 22-karat gold leaf foil layers. Completed with premium custom oak floating frames.',
    stylingRecommendations: 'Mount the three panels horizontally with a strict 2-inch gap between them. Best placed directly above a low-profile linen sofa. Position warm accent spotlights above to reflect the gold accents dynamically as you traverse the room.',
    placementSuggestions: 'Directly above low back sofas, wide bed headboards, or grand executive dining panels.',
    careInstructions: 'Do not expose to high relative humidity or constant damp conditions. Dust extremely lightly with a fine feather duster to prevent leaf lifting. Do not use liquid cleaners.',
    serialNo: 'PAV-9901-WA',
    curatorInspiration: 'Transforms plain white space into a living landscape of movement, texture, warmth, and curated light.'
  },
  {
    id: 'brutalist-cast-bronze-sculpture',
    title: 'The Brutalist Cast-Bronze Focal Sculpture',
    category: 'Sculptures & Accents',
    finish: 'Oxidized Verde & Charred Espresso Patina',
    material: 'Heavy Lost-Wax Cast Bronze with Black Basalt Base',
    dimensions: '28.0 x 15.5 x 10.0 inches (71 x 39 x 25 cm)',
    roomSuitability: 'Reading Rooms, Minimalist Libraries, Statement Foyers',
    availability: 'Reserved',
    images: [
      'https://images.unsplash.com/photo-1608962714529-298715bf736d?auto=format&fit=crop&q=80&w=800', // Brutalist sculpture look
      'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=800', // Solid bronze zoom
      'https://images.unsplash.com/photo-1490312278390-ab6414f8d2f5?auto=format&fit=crop&q=80&w=800'  // Detail of raw bronze texture with light
    ],
    designInspiration: 'Exploring themes of organic erosion and architectural permanence. This heavy bronze piece balances bold volumetric weight with delicate negative geometric spaces, making it a powerful interior design statement.',
    craftsmanshipDetails: 'Fabricated using the historic lost-wax casting method over a custom hand-modeled clay master core. The textured, raw-metal exterior undergoes a multi-stage direct thermal oxidation bath to build charred velvet espresso and mineralized green tones.',
    stylingRecommendations: 'Position at eye level on a minimalist travertine or concrete pedestal. Allow strong directional side-lighting or natural light from windows to paint rich, dramatic silhouettes across the surrounding walls.',
    placementSuggestions: 'Accent wall alcoves, prominent library table centers, or luxury office entrances.',
    careInstructions: 'Avoid damp cloths. The deep, baked patina is completely chemically stable and only requires a soft sweep of a feather duster. Apply a very thin layer of neutral beeswax annually to preserve the undertone shine.',
    serialNo: 'PAV-2210-BS',
    curatorInspiration: 'A dramatic, commanding presence. An anchor that grounds modern rooms and establishes a highly personalized, artistic point of view.'
  },
  {
    id: 'alabaster-sphere-vignette',
    title: 'The Alabaster Sphere Table Vignette',
    category: 'Decorative Objects',
    finish: 'Silk-Polish Translucent Finish',
    material: 'Rare Veined Aragonite Alabaster',
    dimensions: 'Set of Three: 8.0, 6.0, and 4.0 inches diameter (20, 15, and 10 cm)',
    roomSuitability: 'Coffee Tables, Floating Shelves, Work Desks',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800', // Smooth spheres
      'https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80&w=800', // Marble stone layout
      'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=800'  // Polished texture
    ],
    designInspiration: 'The elemental perfection of the sphere is elevated by the unique marbled grey veins of rare alabaster. These sculptural spheres react magically with light, casting high translucence on their surrounding surfaces.',
    craftsmanshipDetails: 'Each sphere is hand-turned on precision high-speed wood-turning lathes, meticulously water-sanded across ten grades of grit to a glass-smooth polish, and sealed with a thin layer of natural carnauba wax.',
    stylingRecommendations: 'Group the three spheres together on a dark walnut tray to create depth, or cascade them individually across a stack of linen art books to structure a sophisticated shelf vignette.',
    placementSuggestions: 'Coffee tables, open display cases, library side-tables.',
    careInstructions: 'Keep away from oils or highly acidic compounds. Wipe with a dry flannel cloth. Alabaster is relatively soft—avoid placement next to sharp steel elements.',
    serialNo: 'PAV-4012-AS',
    curatorInspiration: 'Moments of pure geometry that add a level of visual discipline, organic materiality, and sophistication to your surface layouts.'
  },
  {
    id: 'obsidian-minimalist-wall-clock',
    title: 'The Obsidian Minimalist Pendulum Clock',
    category: 'Handcrafted Clocks',
    finish: 'Charcoal Slate Lacquer & Polished Brass',
    material: 'Natural Obsidian Slab & German Mechanical Movement',
    dimensions: '36.0 x 10.0 x 4.0 inches (91 x 25 x 10 cm)',
    roomSuitability: 'Main Entrance Foyers, Executive Offices, Contemporary Dining Walls',
    availability: 'Acquired',
    images: [
      'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800', // Clean pendulum ticking lines
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', // Golden brass indicators
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'  // Brass pendulum motion blur
    ],
    designInspiration: 'A modern tribute to mid-century Scandinavian horology, focusing on high functional discipline and absolute clarity of material. The contrast of cold volcanic glass and warm golden pendulum rods forms a captivating wall event.',
    craftsmanshipDetails: 'The rear backing panel is cut from a naturally split slab of deep black obsidian sheet-rock. Hand-assembled with an ultra-thin polished golden brass pendulum mechanism. Integrated with a silent hum German mechanical timing unit.',
    stylingRecommendations: 'Mount centered on a wide architectural foyer wall or directly above a low oak sideboard. The slow, silent sweep of the brass pendulum acts as a soothing rhythmic accent within contemporary spaces.',
    placementSuggestions: 'Main foyer entrances, grand hallways, or executive styling partitions.',
    careInstructions: 'Do not manually force wind the movement handles. Ensure secure wall-stud anchor mounting due to the heavy density of the premium obsidian rock slab backing.',
    serialNo: 'PAV-5561-PC',
    curatorInspiration: 'An absolute masterpiece of modern minimalism. The glossy obsidian back behaves like an obsidian mirror, reflecting room lighting and framing the gold pendulum action.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "The Fluted Travertine Vessel is the absolute anchor of our formal reception foyer. The curation is so precise; it feels like it was custom commissioned for our space. The team’s design advice was incredibly helpful.",
    author: 'Sunita Mehra',
    role: 'Principal Interior Architect, Mehra Design Studios',
    location: 'Mumbai, Maharashtra'
  },
  {
    id: '2',
    quote: "Working with The Pavilion to style our penthouse lounge was a masterpiece of collaborative luxury. Their custom pendulum wall clock and travertine vessels brought a sense of timeless design and harmony that changed the dialogue of our home.",
    author: 'Rajiv Malhotra',
    role: 'Homeowner & Art Director',
    location: 'New Delhi'
  },
  {
    id: '3',
    quote: "We require objects that transcend fleeting trends. The Pavilion's collection represents unparalleled craftsmanship and clean lines. Each piece is styled to catch light and redefine white space, breathing life into luxury interiors.",
    author: 'Evelyn Sen',
    role: 'Lead Architect, Atelier Sen',
    location: 'Bengaluru, Karnataka'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=600',
    caption: 'Quiet travertine flutes catching the afternoon light. Elevating blank spaces into minimalist galleries. #MinimalistInteriors #CuratedHome #TravertineStyle',
    likes: '1.4k',
    date: 'June 10, 2026'
  },
  {
    id: 'post-2',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600',
    caption: 'Gold leaf reflections on combed gesso. Hanging the Horizon Triptych to frame a low-profile linen couch. #LuxuryLiving #WallArtExpression #InteriorStyling',
    likes: '920',
    date: 'June 4, 2026'
  },
  {
    id: 'post-3',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600',
    caption: 'The Aurelia Astrolabe Clock. A structural tribute to traditional European clockwork, engineered for distinguished living mantels. #HandcraftedTimepiece #InteriorLuxury',
    likes: '811',
    date: 'May 28, 2026'
  },
  {
    id: 'post-4',
    imageUrl: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=600',
    caption: 'A rhythmic swing of gold and volcanic obsidian. Sourcing focal objects that bring warmth and movement to contemporary dining halls. #ModernPendulum #SohoVibe #DesignDetails',
    likes: '1.1k',
    date: 'May 20, 2026'
  }
];
