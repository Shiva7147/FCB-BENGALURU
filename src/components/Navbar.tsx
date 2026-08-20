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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'Core Members', path: '/core-members' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Animated Barça Catalan Segmented Strip (User Uploaded Style) */}
      <div className="senyera-barca-strip-animated fixed top-0 left-0 right-0 z-50 shadow-md" />

      <header
        className={`fixed top-2.5 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060e1a]/95 backdrop-blur-xl border-b border-[#EDBB00]/20 shadow-2xl py-2.5'
            : 'bg-gradient-to-b from-[#060e1a] via-[#060e1a]/80 to-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center space-x-3 group shrink-0">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#004D98] via-[#060e1a] to-[#A50044] p-0.5 border border-[#EDBB00]/80 shadow-lg group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#060e1a] flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#EDBB00]" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-white text-xs sm:text-sm tracking-wider uppercase leading-none">
                  FCB SUPPORTERS CLUB
                </span>
                <span className="text-[10px] text-[#EDBB00] font-extrabold tracking-widest uppercase mt-0.5">
                  BLAUGRANA BENGALURU
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                      isActive
                        ? 'text-[#EDBB00] bg-[#004D98]/50 border border-[#EDBB00]/40 shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Cart + Admin + Mobile Toggle */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-xl bg-[#004D98]/40 border border-[#EDBB00]/40 text-[#EDBB00] hover:bg-[#004D98]/80 transition-all"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#A50044] text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#060e1a]">
                    {totalItems}
                  </span>
                )}
              </button>

              <Link
                to="/admin"
                className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#EDBB00]/50 text-gray-300 hover:text-[#EDBB00] text-[11px] font-bold uppercase tracking-wider"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Admin</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#EDBB00]"
                aria-label="Toggle Navigation Drawer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-12 right-0 bottom-0 w-full max-w-xs bg-[#071120] border-l border-[#EDBB00]/30 p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-black text-[#EDBB00] uppercase tracking-widest">
                  FCB BENGALURU
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#004D98]/60 to-[#A50044]/60 text-[#EDBB00] border border-[#EDBB00]/40'
                          : 'text-gray-200 hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    </Link>
                  );
                })}

                <Link
                  to="/admin"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-wider mt-2 border border-white/10"
                >
                  <span className="flex items-center space-x-2">
                    <Settings className="w-3.5 h-3.5 text-[#EDBB00]" />
                    <span>Admin Panel</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <p className="text-[#EDBB00] text-[11px] font-black uppercase tracking-widest">
                Més que un club.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
