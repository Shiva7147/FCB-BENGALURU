import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, MembershipConfig } from '../types';
import { loadStoredMembershipConfig } from '../lib/store';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, selectedSize?: string, quantity?: number) => void;
  removeFromCart: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  taxRatePercent: number;
  taxAmount: number;
  platformFee: number;
  totalAmount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'fcb_bengaluru_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [membershipConfig, setMembershipConfig] = useState<MembershipConfig>(() => loadStoredMembershipConfig());
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync membership config changes for tax & platform fee
  useEffect(() => {
    const handleStoreUpdate = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail || detail.type === 'membership_config') {
        setMembershipConfig(loadStoredMembershipConfig());
      }
    };
    window.addEventListener('fcb_store_updated', handleStoreUpdate);
    return () => window.removeEventListener('fcb_store_updated', handleStoreUpdate);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const addToCart = (product: Product, selectedSize?: string, quantity = 1) => {
    const size = selectedSize || (product.sizes.length > 0 ? product.sizes[0] : 'One Size');
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedSize: size, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedSize: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (productId: string, selectedSize: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }
    setCartItems(prev =>
      prev.map(item => {
        if (item.product.id === productId && item.selectedSize === selectedSize) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const taxRatePercent = membershipConfig.taxRatePercent ?? 5;
  const taxAmount = subtotal > 0 ? Math.round((subtotal * taxRatePercent) / 100) : 0;
  const platformFee = subtotal > 0 ? (membershipConfig.platformFee ?? 20) : 0;
  const totalAmount = subtotal + taxAmount + platformFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        taxRatePercent,
        taxAmount,
        platformFee,
        totalAmount,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
