import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Shield, ArrowRight, Settings } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Join', path: '/join' },
    { name: 'Screenings', path: '/screenings' },
    { name: 'Match Day', path: '/match-day' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Chants', path: '/chants' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Core Members', path: '/core-members' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Catalan Flag Senyera Line */}
      <div className="h-1.5 w-full senyera-accent fixed top-0 left-0 z-50" />

      <header
        className={`fixed top-1.5 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060e1a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#060e1a]/95 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Logo & Title */}
            <Link to="/" className="flex items-center space-x-3 group shrink-0">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#004D98] via-[#060e1a] to-[#A50044] p-0.5 border border-[#EDBB00]/60 shadow-lg group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#060e1a] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#EDBB00] group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-extrabold text-white text-sm sm:text-base tracking-wider uppercase">
                    FCB SUPPORTERS CLUB
                  </span>
                </div>
                <span className="text-[10px] text-[#EDBB00] font-bold tracking-widest uppercase">
                  BLAUGRANA BENGALURU
                </span>
              </div>
            </Link>

            {/* Middle: Desktop Navigation (Hidden on screens < 1280px to prevent wrapping) */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-[#EDBB00] bg-[#004D98]/40 border border-[#EDBB00]/40 shadow-inner'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions (Cart Badge + Admin + Mobile Toggle) */}
            <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
              
              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-xl bg-[#004D98]/30 border border-[#EDBB00]/40 text-[#EDBB00] hover:bg-[#004D98]/60 transition-all group"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#A50044] text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#060e1a] shadow-md animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Admin Panel Quick Access */}
              <Link
                to="/admin"
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#EDBB00]/50 text-gray-300 hover:text-[#EDBB00] text-xs font-semibold transition-all"
                title="Admin Demo Panel"
              >
                <Settings className="w-3.5 h-3.5" />
                <span className="uppercase text-[11px] tracking-wider">Admin</span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#EDBB00] focus:outline-none"
                aria-label="Toggle Mobile Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-14 right-0 bottom-0 w-full max-w-sm bg-[#071120] border-l border-white/10 p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-extrabold text-[#EDBB00] uppercase tracking-widest">
                  Navigation Menu
                </span>
                <span className="text-[10px] text-gray-400 font-mono">FCB BENGALURU</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#004D98]/60 to-[#A50044]/60 text-[#EDBB00] border border-[#EDBB00]/40'
                          : 'text-gray-200 hover:bg-white/5 hover:text-[#EDBB00]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#EDBB00]' : 'opacity-40'}`} />
                    </Link>
                  );
                })}

                <Link
                  to="/admin"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 text-gray-300 text-sm font-bold uppercase tracking-wider mt-4 border border-white/10"
                >
                  <span className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-[#EDBB00]" />
                    <span>Admin Panel Demo</span>
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              </div>
            </div>

            {/* Mobile Footer accent */}
            <div className="pt-6 border-t border-white/10 text-center space-y-2">
              <p className="text-[#EDBB00] text-xs font-black uppercase tracking-widest">
                Més que un club. Now in Bengaluru.
              </p>
              <p className="text-[10px] text-gray-400">
                Official Supporters Community Ecosystem
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
