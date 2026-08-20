import React, { createContext, useContext, useState, useEffect } from 'react';
import { Screening, Announcement, GalleryItem, Product, CoreMember, TurfEvent } from '../types';
import {
  INITIAL_SCREENINGS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_GALLERY,
  INITIAL_PRODUCTS,
  INITIAL_CORE_MEMBERS,
  INITIAL_TURF_EVENTS
} from '../data/mockData';

interface AdminContextType {
  screenings: Screening[];
  announcements: Announcement[];
  gallery: GalleryItem[];
  products: Product[];
  coreMembers: CoreMember[];
  turfEvents: TurfEvent[];
  addScreening: (item: Omit<Screening, 'id' | 'rsvpCount'>) => void;
  addAnnouncement: (item: Omit<Announcement, 'id'>) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  addProduct: (item: Omit<Product, 'id'>) => void;
  addCoreMember: (item: Omit<CoreMember, 'id'>) => void;
  addTurfEvent: (item: Omit<TurfEvent, 'id' | 'slotsTaken'>) => void;
  rsvpScreening: (id: string) => void;
}

const STORAGE_KEYS = {
  SCREENINGS: 'fcb_bengaluru_screenings',
  ANNOUNCEMENTS: 'fcb_bengaluru_announcements',
  GALLERY: 'fcb_bengaluru_gallery',
  PRODUCTS: 'fcb_bengaluru_products',
  CORE_MEMBERS: 'fcb_bengaluru_core_members',
  TURF_EVENTS: 'fcb_bengaluru_turf_events'
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenings, setScreenings] = useState<Screening[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SCREENINGS);
      return data ? JSON.parse(data) : INITIAL_SCREENINGS;
    } catch {
      return INITIAL_SCREENINGS;
    }
  });

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

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      return data ? JSON.parse(data) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  const [coreMembers, setCoreMembers] = useState<CoreMember[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CORE_MEMBERS);
      return data ? JSON.parse(data) : INITIAL_CORE_MEMBERS;
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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SCREENINGS, JSON.stringify(screenings));
  }, [screenings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CORE_MEMBERS, JSON.stringify(coreMembers));
  }, [coreMembers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TURF_EVENTS, JSON.stringify(turfEvents));
  }, [turfEvents]);

  const addScreening = (item: Omit<Screening, 'id' | 'rsvpCount'>) => {
    const newItem: Screening = {
      ...item,
      id: `sc-${Date.now()}`,
      rsvpCount: 1
    };
    setScreenings(prev => [newItem, ...prev]);
  };

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

  const addProduct = (item: Omit<Product, 'id'>) => {
    const newItem: Product = {
      ...item,
      id: `prod-${Date.now()}`
    };
    setProducts(prev => [newItem, ...prev]);
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
    setScreenings(prev =>
      prev.map(sc => (sc.id === id ? { ...sc, rsvpCount: sc.rsvpCount + 1 } : sc))
    );
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
        addScreening,
        addAnnouncement,
        addGalleryItem,
        addProduct,
        addCoreMember,
        addTurfEvent,
        rsvpScreening
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
