import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Screening, Announcement, GalleryItem, Product, CoreMember, TurfEvent, MembershipConfig } from '../types';
import {
  INITIAL_ANNOUNCEMENTS,
  INITIAL_GALLERY,
  INITIAL_CORE_MEMBERS,
  INITIAL_TURF_EVENTS
} from '../data/mockData';
import {
  loadStoredScreenings,
  saveStoredScreenings,
  loadStoredProducts,
  saveStoredProducts,
  loadStoredMembershipConfig,
  saveStoredMembershipConfig
} from '../lib/store';

interface AdminContextType {
  screenings: Screening[];
  announcements: Announcement[];
  gallery: GalleryItem[];
  products: Product[];
  coreMembers: CoreMember[];
  turfEvents: TurfEvent[];
  membershipConfig: MembershipConfig;
  // Screening / Event CRUD
  addScreening: (item: Omit<Screening, 'id' | 'rsvpCount'>) => void;
  updateScreening: (id: string, item: Partial<Screening>) => void;
  deleteScreening: (id: string) => void;
  // Product / Merch CRUD
  addProduct: (item: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, item: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  // Membership Config
  updateMembershipConfig: (config: Partial<MembershipConfig>) => void;
  // Others
  addAnnouncement: (item: Omit<Announcement, 'id'>) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  addCoreMember: (item: Omit<CoreMember, 'id'>) => void;
  addTurfEvent: (item: Omit<TurfEvent, 'id' | 'slotsTaken'>) => void;
  rsvpScreening: (id: string) => void;
  // Editing guard flag ref to prevent polling overwrites
  isEditingRef: React.MutableRefObject<boolean>;
}

const STORAGE_KEYS = {
  ANNOUNCEMENTS: 'fcb_bengaluru_announcements_v2',
  GALLERY: 'fcb_bengaluru_gallery_v2',
  CORE_MEMBERS: 'fcb_bengaluru_core_members_v2',
  TURF_EVENTS: 'fcb_bengaluru_turf_events_v2'
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenings, setScreenings] = useState<Screening[]>(() => loadStoredScreenings());
  const [products, setProducts] = useState<Product[]>(() => loadStoredProducts());
  const [membershipConfig, setMembershipConfig] = useState<MembershipConfig>(() => loadStoredMembershipConfig());

  // Editing guard ref to prevent 4s polling from overwriting active form inputs
  const isEditingRef = useRef<boolean>(false);

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
      return data ? JSON.parse(data) : INITIAL_ANNOUNCEMENTS;
    } catch {
      return INITIAL_ANNOUNCEMENTS;
    }
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return data ? JSON.parse(data) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  const [coreMembers, setCoreMembers] = useState<CoreMember[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CORE_MEMBERS);
      if (!data) return INITIAL_CORE_MEMBERS;
      const parsed: CoreMember[] = JSON.parse(data);
      // Synchronize updated official Cloudinary member photos
      return parsed.map(m => {
        const init = INITIAL_CORE_MEMBERS.find(im => im.id === m.id);
        if (init && (m.name.includes('Vineet') || m.name.includes('Criston') || m.name.includes('Sajjad'))) {
          return { ...m, imageUrl: init.imageUrl };
        }
        return m;
      });
    } catch {
      return INITIAL_CORE_MEMBERS;
    }
  });

  const [turfEvents, setTurfEvents] = useState<TurfEvent[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TURF_EVENTS);
      return data ? JSON.parse(data) : INITIAL_TURF_EVENTS;
    } catch {
      return INITIAL_TURF_EVENTS;
    }
  });

  // Background poll every 4 seconds for real-time client sync
  useEffect(() => {
    const fetchRemoteData = () => {
      // Guard: do not overwrite local state if admin is actively typing
      if (isEditingRef.current) return;

      const latestScreenings = loadStoredScreenings();
      const latestProducts = loadStoredProducts();
      const latestConfig = loadStoredMembershipConfig();

      setScreenings(latestScreenings);
      setProducts(latestProducts);
      setMembershipConfig(latestConfig);
    };

    const interval = setInterval(fetchRemoteData, 4000);

    const handleStoreUpdated = () => {
      if (!isEditingRef.current) {
        fetchRemoteData();
      }
    };

    window.addEventListener('fcb_store_updated', handleStoreUpdated);

    return () => {
      clearInterval(interval);
      window.removeEventListener('fcb_store_updated', handleStoreUpdated);
    };
  }, []);

  // Save changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CORE_MEMBERS, JSON.stringify(coreMembers));
  }, [coreMembers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TURF_EVENTS, JSON.stringify(turfEvents));
  }, [turfEvents]);

  // SCREENING CRUD
  const addScreening = (item: Omit<Screening, 'id' | 'rsvpCount'>) => {
    const newItem: Screening = {
      ...item,
      id: `sc-${Date.now()}`,
      rsvpCount: 0
    };
    const updated = [newItem, ...screenings];
    setScreenings(updated);
    saveStoredScreenings(updated);
  };

  const updateScreening = (id: string, updatedFields: Partial<Screening>) => {
    const updated = screenings.map(sc => (sc.id === id ? { ...sc, ...updatedFields } : sc));
    setScreenings(updated);
    saveStoredScreenings(updated);
  };

  const deleteScreening = (id: string) => {
    const updated = screenings.filter(sc => sc.id !== id);
    setScreenings(updated);
    saveStoredScreenings(updated);
  };

  // PRODUCT CRUD
  const addProduct = (item: Omit<Product, 'id'>) => {
    const newItem: Product = {
      ...item,
      id: `prod-${Date.now()}`
    };
    const updated = [newItem, ...products];
    setProducts(updated);
    saveStoredProducts(updated);
  };

  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    const updated = products.map(p => (p.id === id ? { ...p, ...updatedFields } : p));
    setProducts(updated);
    saveStoredProducts(updated);
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    saveStoredProducts(updated);
  };

  // MEMBERSHIP CONFIG
  const updateMembershipConfig = (newConfig: Partial<MembershipConfig>) => {
    const updated: MembershipConfig = {
      ...membershipConfig,
      ...newConfig
    };
    setMembershipConfig(updated);
    saveStoredMembershipConfig(updated);
  };

  // OTHERS
  const addAnnouncement = (item: Omit<Announcement, 'id'>) => {
    const newItem: Announcement = {
      ...item,
      id: `ann-${Date.now()}`
    };
    setAnnouncements(prev => [newItem, ...prev]);
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `gal-${Date.now()}`
    };
    setGallery(prev => [newItem, ...prev]);
  };

  const addCoreMember = (item: Omit<CoreMember, 'id'>) => {
    const newItem: CoreMember = {
      ...item,
      id: `cm-${Date.now()}`
    };
    setCoreMembers(prev => [...prev, newItem]);
  };

  const addTurfEvent = (item: Omit<TurfEvent, 'id' | 'slotsTaken'>) => {
    const newItem: TurfEvent = {
      ...item,
      id: `tf-${Date.now()}`,
      slotsTaken: 1
    };
    setTurfEvents(prev => [newItem, ...prev]);
  };

  const rsvpScreening = (id: string) => {
    const updated = screenings.map(sc => (sc.id === id ? { ...sc, rsvpCount: sc.rsvpCount + 1 } : sc));
    setScreenings(updated);
    saveStoredScreenings(updated);
  };

  return (
    <AdminContext.Provider
      value={{
        screenings,
        announcements,
        gallery,
        products,
        coreMembers,
        turfEvents,
        membershipConfig,
        addScreening,
        updateScreening,
        deleteScreening,
        addProduct,
        updateProduct,
        deleteProduct,
        updateMembershipConfig,
        addAnnouncement,
        addGalleryItem,
        addCoreMember,
        addTurfEvent,
        rsvpScreening,
        isEditingRef
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
