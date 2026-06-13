import { Product, Testimonial, InstagramPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'chola-nataraja-bronze',
    title: 'The Great Chola Nataraja Bronze',
    category: 'Sacred Bronzes',
    origin: 'Thanjavur District, Tamil Nadu, India',
    era: 'Late Chola Period',
    period: '11th Century CE',
    material: 'Ashtadhatu Bronze alloy (Lost-wax cast)',
    dimensions: '48.5 x 39.2 x 14.8 inches (123 x 100 x 37 cm)',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1608962714529-298715bf736d?auto=format&fit=crop&q=80&w=800', // Front View
      'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=800', // Back View Structure
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800', // Close Up: Celestial Face
      'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800', // Detail: Patina & Casting
      'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=800', // Detail: Foot on Apasmara (Ignorance)
      'https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80&w=800', // Detail: The Celestial Aura (Prabhavali)
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', // Detail: Age Cracks & Micro-imperfections
      'https://images.unsplash.com/photo-1490312278390-ab6414f8d2f5?auto=format&fit=crop&q=80&w=800', // Scale: Sitting in Architectural Gallery Setting
      'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=800', // Base Inscription & Marks
      'https://images.unsplash.com/photo-1551913902-c92207136625?auto=format&fit=crop&q=80&w=800'  // Side Profile Alignment
    ],
    historicalStory: 'During the 11th century, under the patronage of the imperial Chola dynasty, South Indian metallurgical masters achieved the absolute peak of cosmic sculpture. This magnificent lost-wax bronze depicts Shiva in his Tandava state, dancing the universe into existence, sustaining its rhythm, and absorbing it back into eternal silence. The casting method is entirely irreversible—the clay mold is shattered to liberate the bronze, making this Nataraja an unique masterwork. Acquired from a royal collector lineage, its provenance trace relates directly to Thanjavur temple borders and has been documented in high detail since 1928.',
    provenance: 'Previously in the private collection of Sir Arthur Vance (U.K., acquired 1928 in Madras Presidency); by descent to Lady Beatrice Vance; sold at auction in London, 1982; acquired by the Heritage Preservation Trust; and subsequently held in a premium private collection in New Delhi.',
    conditionReport: 'Superb archaeological condition for an 11th-century outdoor bronze. Represents traditional "malachite" and "cuprite" layered patina from prolonged subterranean rest. Some minor historical abrasions on the lower rim of the lotus pedestal and stable micro-fissures around the rear flame arc (as is characteristic of the ancient gas release during pouring). Surface remains strictly untreated to preserve the authentic oxidation crust.',
    authenticityDetails: {
      certificateNo: 'HP-1082-AR',
      reviewedBy: 'Dr. Srinivasan Raghavan (Academy of Fine Arts, Thiruvananthapuram)',
      documentation: 'Radiocarbon and thermoluminescence core testing reports included, establishing chemical composition fitting 11th-century Thanjavur smelting practices.',
      verificationStatus: 'Expert Committee Reviewed'
    }
  },
  {
    id: 'mughal-court-miniature',
    title: 'Mughal Court Durbar Miniature Painting',
    category: 'Manuscripts & Paintings',
    origin: 'Agra Court Studio, Northern India',
    era: 'Reign of Emperor Aurangzeb / Late Golden Era',
    period: 'Circa 1680',
    material: 'Gouache and gold leaf on hand-burnished Sialkoti paper',
    dimensions: '12.4 x 8.7 inches (31.5 x 22.1 cm)',
    availability: 'Reserved',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800', // Front Full View
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800', // Border Detail Zoom
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'  // Gold leaf shimmer texture
    ],
    historicalStory: 'This masterpiece of miniaturization represents the highly refined visual style of the Imperial Agra Court workshops prior to the dispersion of court painters. Painted using brushes comprising single squirrel hairs of absolute softness, it displays an evening court presentation (Durbar). The gold leaf detailing is layered via traditional agate-burnishing, creating a shimmering optical depth that responds dynamically to changing ambient light. Sourced from a prominent noble estate in Rajasthan, this piece retains its original border, written using Persian calligraphy describing court protocol.',
    provenance: 'Udaipur Royal Archives (1720–1890); acquired by Dr. J.S. Lall in 1912; gifted to the current estate owner in 1964. Museum-level conservation history logged.',
    conditionReport: 'Extremely well-preserved pigment fidelity. No paint flaking or active water damage. Natural aging is evident along the margins of the Sialkoti paper, showcasing minor oxidized foxing spots. Framed under museum-grade ultra-clear UV-blocking framing glass to safeguard historical pigments.',
    authenticityDetails: {
      certificateNo: 'HP-4491-MP',
      reviewedBy: 'Prof. Ananda Sen (Department of Asiatic Arts)',
      documentation: 'Curated dossier with infrared photography analysis exposing the underlying carbon charcoal sketches (Tarh).',
      verificationStatus: 'Verified'
    }
  },
  {
    id: 'victorian-silver-tea-service',
    title: 'The Garrard & Co. Sterling Silver Tea Service',
    category: 'Luxury Metalware',
    origin: 'Garrard & Co. Royal Jewelers, London, UK',
    era: 'Victorian Era',
    period: 'London, 1874',
    material: '.925 Sterling Silver with carved African Ebony Handles',
    dimensions: 'Tray: 24.5 inches diameter; Teapot Height: 9.8 inches',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&q=80&w=800', // Front View Tea Set
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800', // Maker’s Mark & Hallmarks
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800'  // Intricate Hand Chasing Detail
    ],
    historicalStory: 'Commissioned in 1874 from Garrard & Co., the prestigious Crown Jewelers, this four-piece sterling silver service exemplifies High Victorian opulence. Elaborately hand-chased with classical foliage, grotesque masks, and scrolling cartouches, it displays the peak of British silversmithing. The handles are hand-carved out of dense solid wood, offering both a beautiful aesthetic and insulated thermal protection. The heavy tray boasts a family crest of the Devonshire nobility at its center, surrounded by hand-engraved scrollwork.',
    provenance: 'Originally commissioned by the 7th Duke of Devonshire; auctioned by Sotheby’s Geneva in 1978; held privately in Milan; acquired by the Gallery in 2021.',
    conditionReport: 'Excellent presentation condition with crisp hallmark impressions. The pouring spouts are free of dents. Teapot lid hinge functions smoothly with minimal slack. Gentle surface micro-scratches corresponding with light ceremonial usage over the last 150 years. Never machine-polished.',
    authenticityDetails: {
      certificateNo: 'HP-9031-SV',
      reviewedBy: 'Marcus Sterling (Aesthetic Silver Appraiser, Guild of London)',
      documentation: 'Certified registry entry under London Goldsmiths Hall hallmarks of 1874.',
      verificationStatus: 'Documented'
    }
  },
  {
    id: 'gandhara-bodhisattva-bust',
    title: 'Gandharan Schist Bodhisattva Bust',
    category: 'Ancient Sculptures',
    origin: 'Peshawar Valley, Ancient Gandhara Province',
    era: 'Kushan Empire Period',
    period: '3rd Century CE',
    material: 'Deep Grey Micaceous Schist Stone',
    dimensions: '21.6 x 11.8 x 6.3 inches (55 x 30 x 16 cm)',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800', // Bust Front Angle
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', // Elegant Angle In Museum Light
      'https://images.unsplash.com/photo-1551913902-c92207136625?auto=format&fit=crop&q=80&w=800'  // Texture of the Schist
    ],
    historicalStory: 'A timeless witness to Greco-Buddhist interactions, this schist bust carved in the ancient Silk Road province of Gandhara represents a Bodhisattva (possibly Maitreya). It showcases a fascinating synthesis of Greek Hellenistic drapery, facial modeling, and Indian spiritual iconography. The deep drapes of the robes and the incredibly detailed waves of the hair bun (ushnisha) reflect a classical sculptural ancestry. The gentle, serene smile stands as an immortal emblem of spiritual transcendence and absolute inner calm.',
    provenance: 'Excavated near Taxila region during early geological surveys (pre-1940); held in the private collection of Colonel Herbert (acquired 1943); purchased by New Delhi collector, 1972; transferred to our vaults in 2024.',
    conditionReport: 'Authentic stone weathering is prominent. Left earlobe displays historic fragment loss from antiquity; classical breaks exist on the shoulder boundaries, confirming its separation from a larger temple frieze. The stone is structurally fully stable with gorgeous micaceous mineral sparkles across the surface when lit.',
    authenticityDetails: {
      certificateNo: 'HP-3032-GS',
      reviewedBy: 'Dr. Tariq Khan (Archaeological Foundation of South Asia)',
      documentation: 'X-ray fluorescence mineral testing confirms quarry origin from the Khyber schist hills; official export license included.',
      verificationStatus: 'Expert Committee Reviewed'
    }
  },
  {
    id: 'rajasthan-royal-writing-desk',
    title: 'Mewar Royal East Indian Rosewood Writing Bureau',
    category: 'Luxury Furniture',
    origin: 'Udaipur Palace Estate Workshops, Rajasthan',
    era: 'Late Regency Colonial / Indian Royal',
    period: 'Circa 1820',
    material: 'Lacquered East Indian Rosewood with Brass Marquetry & Ivory Escutcheons',
    dimensions: '42.0 x 36.5 x 22.0 inches (107 x 93 x 56 cm)',
    availability: 'Available',
    images: [
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800', // Desk Front Full view
      'https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80&w=800', // Intricate Drawer Handles
      'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=800'  // Drawer Inlay detail
    ],
    historicalStory: 'Handcrafted in Rajasthan during the period of colonial interaction, this write-cabinet showcases an exquisite Rajasthani synthesis of British Regency furniture layout and pure Rajput woodcraft. Fabricated out of highly dense and beautifully figured East Indian Rosewood (Shisham), the desk features intricate hand-chiseled brass marquetry, presenting native floral and peacock patterns. The lockable falls open to reveal a fitted compartment with miniature drawers, secret document slots, and velvet writing surface.',
    provenance: 'Commissioned of Mewar court nobility for local administrative estates; private repository Udaipur; acquired by antiquarian V. Sharma (Jaipur, 1968); private residence Mumbai (1975–2023).',
    conditionReport: 'Expertly stabilized by our master conservationist without removing original shellac finish. Brass inlay is completely intact and flush with wood surface. Keys to the central roll and lower drawers are functional (includes custom reproduction key for the hidden bureau compartment). Minimal historic wood movement consistent with dry desert climate history.',
    authenticityDetails: {
      certificateNo: 'HP-8872-FW',
      reviewedBy: 'Sanjay Rawat (National Academy of Wood Heritage Artistry, Jodhpur)',
      documentation: 'Dossier containing structural wood-ring analysis, proving 200-year-old aged heartwood growth.',
      verificationStatus: 'Verified'
    }
  },
  {
    id: 'persian-tree-of-life-rug',
    title: 'Kerman Ravar Silk-Inlay Tree of Life Rug',
    category: 'Historical Textiles',
    origin: 'Ravar Village, Kerman Province, Persia (Iran)',
    era: 'Late Qajar Dynasty',
    period: 'Circa 1890',
    material: 'Hand-dyed Silk and Spoon-spun Kork Wool on solid Cotton Webbing',
    dimensions: '10.2 x 7.1 feet (310 x 216 cm)',
    availability: 'Acquired',
    images: [
      'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800', // Rug Overall Pattern
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', // Pile close-up
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'  // Medallion Detailed weavers signature
    ],
    historicalStory: 'Woven in the legendary looms of Ravar, a small town in Kerman renowned for producing the finest rugs for royal courts, this piece represents the famous "Tree of Life" motif. The weaving features nesting nightingales, gazelles, and exotic flora representing continuous life and natural harmony. Knotted at an astonishing density of approximately 650 Persian knots per square inch, the rug integrates silk pile highlights that catch light like water. Natural vegetable dyes have aged gracefully to yield sublime, non-repetitive shades.',
    provenance: 'Acquired at Tehran bazaar by a French industrialist in 1902; held in a Paris town home for three generations; acquired by the Heritage Preservation Trust in 2018.',
    conditionReport: 'Acquired by a high-profile collector. Pile is uniformly healthy with minor natural oxidation of wool. Original side cords are completely intact. Symmetrical wool fringe showing standard light fraying appropriate for its age. Chemically analyzed, confirming 100% natural madder root, indigo, and pomegranate rind dye sources.',
    authenticityDetails: {
      certificateNo: 'HP-1218-TX',
      reviewedBy: 'Jean-Luc Dupont (Asiatic Textile Society, Lyon)',
      documentation: 'Includes digital weaver cartography register entry matching traditional Late Qajar Ravar court styles.',
      verificationStatus: 'Verified'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'The Gandhara schist Bodhisattva is the crown jewel of my library. The Heritage Preservation Trust provided impeccable documentation. The transparency of their condition report gave me absolute confidence to acquire.',
    author: 'Sunita Mehra',
    role: 'Prominent Art Collector & Architect',
    location: 'Mumbai, Maharashtra'
  },
  {
    id: '2',
    quote: 'Working with their specialists on sourcing historical bronzes for our luxury villa project was seamless. Their nationwide insured white-glove shipping ensured the priceless artifacts arrived at our Alibaug estate in pristine conservation.',
    author: 'Rajiv Malhotra',
    role: 'Managing Director, Malhotra & Associates Interiors',
    location: 'New Delhi'
  },
  {
    id: '3',
    quote: 'For us, authenticity is paramount. The Heritage Pavilion does not merely sell antiques; they are highly scholarly conservators of history. Each consultation is an education in art history.',
    author: 'Dr. Evelyn Dubois',
    role: 'Founding Fellow, Oriental Sculpture Trust',
    location: 'Auroville, Puducherry'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=600',
    caption: 'Discover the silent gaze of antiquity. Unveiling the 3rd-century Gandharan Bodhisattva in our private Delhi viewing room. #SothebysStyle #ArtHistory #CuratedHome',
    likes: '1.2k',
    date: 'June 10, 2026'
  },
  {
    id: 'post-2',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600',
    caption: 'Whispers from the Agra court, 1680. Close up detail highlighting gold leaf pigments on Sialkoti burnished parchment. #MughalArt #MiniaturePainting #FineArt',
    likes: '840',
    date: 'June 4, 2026'
  },
  {
    id: 'post-3',
    imageUrl: 'https://images.unsplash.com/photo-1576016770956-debb63d900ef?auto=format&fit=crop&q=80&w=600',
    caption: 'Victorian opulence defined. Sterling silver service by Garrard & Co. Royal Jewelers, hand chased in 1874. Provenance traceable directly to British crown. #Silverware #ChristiesIn',
    likes: '934',
    date: 'May 28, 2026'
  },
  {
    id: 'post-4',
    imageUrl: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=600',
    caption: 'The Tree of Life loops gracefully under our gallery lighting. A stunning Ravar wool and silk rug from 1890, woven in Kerman. #LuxuryInteriors #HeritageRugs #PersianRug',
    likes: '1.5k',
    date: 'May 20, 2026'
  }
];
