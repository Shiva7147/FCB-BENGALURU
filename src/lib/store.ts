import { Screening, Product, MembershipConfig } from '../types';
import { INITIAL_SCREENINGS, INITIAL_PRODUCTS } from '../data/mockData';

export const STORAGE_KEYS = {
  SCREENINGS: 'fcb_bengaluru_screenings_v2',
  PRODUCTS: 'fcb_bengaluru_products_v2',
  MEMBERSHIP_CONFIG: 'fcb_bengaluru_membership_config_v2',
  LAST_SYNC: 'fcb_bengaluru_last_sync'
};

export const DEFAULT_MEMBERSHIP_CONFIG: MembershipConfig = {
  culerPrice: 399,
  sociPrice: 999,
  taxRatePercent: 5,
  platformFee: 20,
  availableKitSizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
  sizePriceSlabs: {
    'S': 0,
    'M': 0,
    'L': 0,
    'XL': 0,
    'XXL': 50,
    '3XL': 100
  }
};

// Initial screenings with external ticket URLs
const SEED_SCREENINGS: Screening[] = INITIAL_SCREENINGS.map((sc, idx) => ({
  ...sc,
  ticketUrl: sc.ticketUrl || (idx === 0 
    ? 'https://in.bookmyshow.com/bengaluru/events'
    : idx === 1 
    ? 'https://insider.in/bengaluru'
    : 'https://linktr.ee/fcb.bengaluru')
}));

// Initial products with original price comparison
const SEED_PRODUCTS: Product[] = INITIAL_PRODUCTS.map((prod, idx) => ({
  ...prod,
  originalPrice: prod.originalPrice || (idx === 0 ? 999 : idx === 1 ? 1199 : idx === 2 ? 699 : 1599)
}));

export const loadStoredScreenings = (): Screening[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SCREENINGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.SCREENINGS, JSON.stringify(SEED_SCREENINGS));
      return SEED_SCREENINGS;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_SCREENINGS;
  }
};

export const saveStoredScreenings = (screenings: Screening[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SCREENINGS, JSON.stringify(screenings));
    localStorage.setItem(STORAGE_KEYS.LAST_SYNC, Date.now().toString());
    window.dispatchEvent(new CustomEvent('fcb_store_updated', { detail: { type: 'screenings' } }));
  } catch (err) {
    console.error('Failed to save screenings:', err);
  }
};

export const loadStoredProducts = (): Product[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(SEED_PRODUCTS));
      return SEED_PRODUCTS;
    }
    const parsed: Product[] = JSON.parse(raw);
    // Keep scarf product images up-to-date with official Cloudinary gallery
    const updated = parsed.map(p => {
      if (p.id === 'prod-1') {
        const seedScarf = SEED_PRODUCTS.find(sp => sp.id === 'prod-1');
        return seedScarf ? { ...p, imageUrl: seedScarf.imageUrl, images: seedScarf.images } : p;
      }
      return p;
    });
    return updated;
  } catch {
    return SEED_PRODUCTS;
  }
};

export const saveStoredProducts = (products: Product[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    localStorage.setItem(STORAGE_KEYS.LAST_SYNC, Date.now().toString());
    window.dispatchEvent(new CustomEvent('fcb_store_updated', { detail: { type: 'products' } }));
  } catch (err) {
    console.error('Failed to save products:', err);
  }
};

export const loadStoredMembershipConfig = (): MembershipConfig => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MEMBERSHIP_CONFIG);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.MEMBERSHIP_CONFIG, JSON.stringify(DEFAULT_MEMBERSHIP_CONFIG));
      return DEFAULT_MEMBERSHIP_CONFIG;
    }
    return { ...DEFAULT_MEMBERSHIP_CONFIG, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_MEMBERSHIP_CONFIG;
  }
};

export const saveStoredMembershipConfig = (config: MembershipConfig) => {
  try {
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIP_CONFIG, JSON.stringify(config));
    localStorage.setItem(STORAGE_KEYS.LAST_SYNC, Date.now().toString());
    window.dispatchEvent(new CustomEvent('fcb_store_updated', { detail: { type: 'membership_config' } }));
  } catch (err) {
    console.error('Failed to save membership config:', err);
  }
};
