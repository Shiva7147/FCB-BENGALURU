import { Screening, Announcement, GalleryItem, CoreMember, Chant, Achievement, Product, TurfEvent } from '../types';

export const INITIAL_SCREENINGS: Screening[] = [
  {
    id: 'sc-1',
    match: 'FC Barcelona vs Real Madrid',
    opponent: 'Real Madrid',
    competition: 'La Liga • El Clásico',
    date: 'Saturday, Oct 26, 2026',
    time: '8:30 PM IST (Gates open 7:30 PM)',
    venue: 'Underdoggs Sports Bar & Grill, Indiranagar',
    venueAddress: '100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560038',
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    description: 'The ultimate El Clásico screening experience in Namma Bengaluru! Huge screens, quad stereo surround, chant leaders, stadium lighting, merchandise stalls and exclusive Culé giveaways.',
    isUpcoming: true,
    entryFee: '₹250 (Includes ₹150 cover redeemable on F&B)',
    rsvpCount: 342
  },
  {
    id: 'sc-2',
    match: 'FC Barcelona vs Bayern Munich',
    opponent: 'Bayern Munich',
    competition: 'UEFA Champions League',
    date: 'Wednesday, Nov 12, 2026',
    time: '12:30 AM IST (Midnight Screening)',
    venue: 'Doff Pub & Lounge, Koramangala',
    venueAddress: '80 Feet Rd, Koramangala 4th Block, Bengaluru 560034',
    poster: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    description: 'Champions League night under the lights! Midnight screening for the die-hard Culés in Bangalore. High energy, collective chants and special Blaugrana mocktails.',
    isUpcoming: true,
    entryFee: '₹200 (Includes welcome drink)',
    rsvpCount: 189
  },
  {
    id: 'sc-3',
    match: 'FC Barcelona vs Atlético Madrid',
    opponent: 'Atlético Madrid',
    competition: 'La Liga • Matchday 15',
    date: 'Sunday, Dec 03, 2026',
    time: '9:00 PM IST',
    venue: 'Buffalo Wild Wings, Church Street',
    venueAddress: 'Church St, Shanthala Nagar, Ashok Nagar, Bengaluru 560001',
    poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    description: 'Crucial top-4 battle! Gather with hundreds of Bengaluru Blaugrana supporters at the heart of Church Street.',
    isUpcoming: true,
    entryFee: '₹200 cover charge',
    rsvpCount: 154
  },
  {
    id: 'sc-4',
    match: 'FC Barcelona vs Athletic Club',
    opponent: 'Athletic Club',
    competition: 'Copa del Rey Final',
    date: 'May 18, 2026',
    time: '11:30 PM IST',
    venue: 'Koramangala Social, Bengaluru',
    venueAddress: 'Koramangala 7th Block, Bengaluru',
    poster: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1200&q=80',
    description: 'Cup Final screening! 400+ Culés sang Cant del Barça as we lifted the trophy in thrilling fashion.',
    isUpcoming: false,
    entryFee: '₹200',
    rsvpCount: 420
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'El Clásico Screening Tickets Now Open!',
    description: 'RSVP slots for the biggest match night of the season at Indiranagar are live. Early bird passes include limited edition Bengaluru Culés sticker packs.',
    date: 'August 18, 2026',
    category: 'Match',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'RSVP For Screening',
    ctaLink: '/screenings',
    isUrgent: true
  },
  {
    id: 'ann-2',
    title: 'Weekend 7v7 Turf Game at TurfPark Koramangala',
    description: 'Calling all Bengaluru Culés! Put on your Blaugrana jerseys and join us this Sunday morning for a fun 7v7 tiki-taka scrimmage.',
    date: 'August 15, 2026',
    category: 'Turf',
    ctaText: 'Book Turf Slot',
    ctaLink: '/match-day',
    isUrgent: false
  },
  {
    id: 'ann-3',
    title: 'New Official Supporter Club Kit Pre-Orders Open',
    description: 'Exclusive 2026/27 Supporters Club T-Shirts and Woven Scarves are now available in the official shop with local pickup at screenings.',
    date: 'August 10, 2026',
    category: 'Merch',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'Visit Shop',
    ctaLink: '/shop'
  },
  {
    id: 'ann-4',
    title: 'Annual Bengaluru Culés Community Meet & AGM',
    description: 'Join us for our end-of-quarter meetup to discuss upcoming screening venues, fan choreography, and local community charity drives.',
    date: 'August 02, 2026',
    category: 'Community',
    ctaText: 'Read More',
    ctaLink: '/about'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'El Clásico Screening Victory',
    category: 'Screenings',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Over 400 Bengaluru Culés erupt in celebration at Indiranagar during the 90th minute winner!',
    date: 'April 2026'
  },
  {
    id: 'gal-2',
    title: 'Sunday Morning Tiki-Taka Turf Battle',
    category: 'Turf Games',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    caption: 'Team Blaugrana vs Team Senyera at TurfPark Koramangala.',
    date: 'July 2026'
  },
  {
    id: 'gal-3',
    title: 'Chant Atmosphere Under Stadium Lights',
    category: 'Fans',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    caption: 'Banners, flags and smoke pyro during the Champions League quarter-final screening.',
    date: 'March 2026'
  },
  {
    id: 'gal-4',
    title: 'Bengaluru Culés Annual Meetup',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=1200&q=80',
    caption: 'Connecting FC Barcelona fans across Bengaluru for football and friendship.',
    date: 'January 2026'
  },
  {
    id: 'gal-5',
    title: 'Champions League Midnight Madness',
    category: 'Screenings',
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Late night screening crowd chanting "Cant del Barça" in unison.',
    date: 'May 2026'
  },
  {
    id: 'gal-6',
    title: 'Weekend Fan Cup Finalists',
    category: 'Matchdays',
    imageUrl: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bengaluru Supporters Club squad taking home the Inter-Fan Club Tournament trophy!',
    date: 'February 2026'
  }
];

export const INITIAL_CHANTS: Chant[] = [
  {
    id: 'chant-1',
    title: 'Cant del Barça (Official FCB Anthem)',
    catalanLyrics: [
      'Tot el camp és un clam',
      'som la gent blaugrana',
      'Tant se val d’on venim',
      'si del sud o del nord',
      'ara estem d’acord, estem d’acord,',
      'una bandera ens agermana.',
      'Blaugrana al vent, un crit valent',
      'tenim un nom el sap tothom:',
      'Barça, Barça, Baaarça!'
    ],
    englishTranslation: [
      'The whole stadium chants',
      'We are the Blaugrana people',
      'It does not matter where we come from',
      'Whether from the south or the north',
      'Now we are agreed, we are agreed,',
      'One flag unites us in brotherhood.',
      'Blaugrana in the wind, a valiant cry',
      'We have a name known to everyone:',
      'Barça, Barça, Baaarça!'
    ],
    context: 'Sung standing arm-in-arm before every match kickoff and screening start in Bengaluru.'
  },
  {
    id: 'chant-2',
    title: 'Més Que Un Club',
    catalanLyrics: [
      'Oh Barça, el nostre cor,',
      'Orgull de Catalunya,',
      'Des de Barcelona a Bengaluru,',
      'Sempre al teu costat!',
      'Força Barça, Força Barça!'
    ],
    englishTranslation: [
      'Oh Barça, our heart,',
      'Pride of Catalonia,',
      'From Barcelona to Bengaluru,',
      'Always by your side!',
      'Força Barça, Força Barça!'
    ],
    context: 'Echoed during high-intensity match moments when driving the team forward.'
  },
  {
    id: 'chant-3',
    title: 'Blaugrana Bengaluru Chant',
    catalanLyrics: [
      'De Sant Jordi a Garden City,',
      'Sang blaugrana als nostres veins,',
      'Gritem fort a la nit,',
      'Barça és la nostra vida!'
    ],
    englishTranslation: [
      'From Sant Jordi to Garden City,',
      'Blaugrana blood in our veins,',
      'We shout loud into the night,',
      'Barça is our life!'
    ],
    context: 'Created by Bengaluru Culés during local turf tournaments and screenings.'
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: '5 UEFA Champions League Titles',
    year: '1992, 2006, 2009, 2011, 2015',
    category: 'European',
    description: 'From Wembley 1992 Koeman free-kick to Berlin 2015 treble coronation, European football dominance.',
    trophiesCount: 5,
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ach-2',
    title: '27 La Liga Championships',
    year: '1929 - Present',
    category: 'Domestic',
    description: 'Decades of domestic mastery defined by possession, style, and iconic victories.',
    trophiesCount: 27
  },
  {
    id: 'ach-3',
    title: '31 Copa del Rey Trophies',
    year: 'King of Cups',
    category: 'Domestic',
    description: 'The undisputed kings of the Spanish cup competition.',
    trophiesCount: 31
  },
  {
    id: 'ach-4',
    title: 'The Historic Sextuple (2009)',
    year: '2009',
    category: 'Legend',
    description: 'The first and only club in Spanish history to win 6 trophies in a single calendar year under Pep Guardiola.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ach-5',
    title: 'La Masia Academy Legacy',
    year: '1979 - Present',
    category: 'La Masia',
    description: 'World-famous youth academy that produced Messi, Xavi, Iniesta, Busquets, Gavi, and Lamine Yamal.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Blaugrana Bengaluru 2026/27 Edition Scarf',
    price: 699,
    description: 'Premium woven acrylic supporter scarf featuring high-density embroidery of "MÉS QUE UN CLUB" on one side and "BLAUGRANA BENGALURU" on the reverse.',
    imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    sizes: ['One Size'],
    inStock: true,
    badge: 'BESTSELLER'
  },
  {
    id: 'prod-2',
    name: 'FCB Supporters Club Bengaluru Tech Tee',
    price: 899,
    description: 'Lightweight, moisture-wicking dry-fit polyester matchday shirt with gold metallic crest accent and mesh side ventilation.',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    badge: 'OFFICIAL KIT'
  },
  {
    id: 'prod-3',
    name: 'Culés Bengaluru Embroidered Snapback Cap',
    price: 549,
    description: 'Deep navy 6-panel structured cap with metallic gold embroidered emblem and Senyera flag strip underneath the brim.',
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    sizes: ['Adjustable'],
    inStock: true
  },
  {
    id: 'prod-4',
    name: 'Barça Bengaluru Matchday Pullover Hoodie',
    price: 1499,
    description: 'Heavyweight 320 GSM fleece hoodie with fleece lining, golden drawstrings, front kangaroo pocket, and subtle gold back graphics.',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    badge: 'NEW ARRIVAL'
  },
  {
    id: 'prod-5',
    name: 'Camp Nou Nostalgia Metallic Enamel Pin Set',
    price: 349,
    description: 'Set of 3 custom metal pins: Spotify Camp Nou Stadium Silhouette, Senyera Crest, and Culé Bengaluru Flag.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    category: 'Collectibles',
    sizes: ['One Size'],
    inStock: true
  }
];

export const INITIAL_CORE_MEMBERS: CoreMember[] = [
  {
    id: 'cm-1',
    name: 'Rohan Sen',
    role: 'Club President & Lead Founder',
    bio: 'Die-hard Culé since 2004. Oversees club partnerships, official member relations, and screening venue agreements across Bengaluru.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    favoritePlayer: 'Ronaldinho & Lionel Messi',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      whatsapp: 'https://wa.me/919876543210'
    }
  },
  {
    id: 'cm-2',
    name: 'Ananya Hegde',
    role: 'Screenings & Events Coordinator',
    bio: 'Manages matchday screenings, audio-visual setups, venue booking, and gate ticketing for 300+ fan gatherings.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    favoritePlayer: 'Xavi Hernández',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'cm-3',
    name: 'Karthik Varma',
    role: 'Turf Football Lead & Coach',
    bio: 'Coordinates weekend 7v7 games, inter-fan club tournaments, and tiki-taka tactical sessions for Bengaluru Culés.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    favoritePlayer: 'Andrés Iniesta',
    socials: {
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me/919876543211'
    }
  },
  {
    id: 'cm-4',
    name: 'Priya Sundaram',
    role: 'Community & Content Director',
    bio: 'Leads social media broadcasts, match previews, chant leader coordination, and Bengaluru fan stories.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    favoritePlayer: 'Pedri & Lamine Yamal',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const INITIAL_TURF_EVENTS: TurfEvent[] = [
  {
    id: 'tf-1',
    title: 'Weekend Tiki-Taka 7v7 Kickabout',
    date: 'Sunday, Aug 24, 2026',
    time: '7:00 AM - 9:00 AM',
    venue: 'TurfPark Koramangala',
    slotsTotal: 21,
    slotsTaken: 16,
    format: '7v7 (3 Rotation Teams)',
    description: 'Friendly weekend game for all skill levels! Bibs, water, and match video highlights included.'
  },
  {
    id: 'tf-2',
    title: 'Blaugrana Bengaluru Internal Cup 2026',
    date: 'Saturday, Sep 06, 2026',
    time: '4:00 PM - 8:00 PM',
    venue: 'Decathlon Anubhava Turf, Yelahanka',
    slotsTotal: 48,
    slotsTaken: 32,
    format: '5v5 Tournament (8 Teams)',
    description: 'Annual intra-community fan cup. Trophies, medals, and individual awards for top scorer & best playmaker.'
  }
];
