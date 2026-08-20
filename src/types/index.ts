export interface Screening {
  id: string;
  match: string;
  opponent: string;
  opponentLogo?: string;
  competition: string;
  date: string;
  time: string;
  venue: string;
  venueAddress: string;
  poster?: string;
  description: string;
  isUpcoming: boolean;
  entryFee?: string;
  rsvpCount: number;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Match' | 'Community' | 'Turf' | 'Merch' | 'General';
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  isUrgent?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Screenings' | 'Matchdays' | 'Turf Games' | 'Fans' | 'Events';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface CoreMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  favoritePlayer: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export interface Chant {
  id: string;
  title: string;
  catalanLyrics: string[];
  englishTranslation: string[];
  context: string;
  audioPlaceholderUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  year?: string;
  category: 'European' | 'Domestic' | 'Legend' | 'La Masia' | 'Global';
  description: string;
  trophiesCount?: number;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: 'Apparel' | 'Accessories' | 'Collectibles';
  sizes: string[];
  inStock: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface TurfEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  slotsTotal: number;
  slotsTaken: number;
  format: string; // e.g. 7v7, 5v5
  description: string;
}
