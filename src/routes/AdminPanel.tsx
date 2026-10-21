import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAdmin } from '../context/AdminContext';
import {
  Ticket,
  ShoppingBag,
  CreditCard,
  Megaphone,
  Image as ImageIcon,
  Users,
  Calendar,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  X,
  ExternalLink,
  Percent,
  Coins,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Screening, Product, MembershipConfig } from '../types';

type AdminTab = 'Screenings' | 'Merchandise' | 'Membership' | 'Announcements' | 'Gallery' | 'Core Team' | 'Turf Football';

export const AdminPanel: React.FC = () => {
  const {
    screenings,
    products,
    announcements,
    gallery,
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
    isEditingRef
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<AdminTab>('Screenings');
  const [successMsg, setSuccessMsg] = useState('');

  // -------------------------------------------------------------
  // 1. SCREENING / EVENT STATE
  // -------------------------------------------------------------
  const [editingScreeningId, setEditingScreeningId] = useState<string | null>(null);
  const [screeningForm, setScreeningForm] = useState({
    match: '',
    opponent: '',
    competition: 'La Liga',
    date: '',
    time: '',
    venue: '',
    venueAddress: '',
    poster: '',
    ticketUrl: 'https://in.bookmyshow.com/bengaluru/events',
    description: '',
    entryFee: '₹200 Cover Charge',
    isUpcoming: true
  });

  // -------------------------------------------------------------
  // 2. PRODUCT / MERCHANDISE STATE
  // -------------------------------------------------------------
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: 'Apparel' as 'Apparel' | 'Accessories' | 'Collectibles',
    price: 699,
    originalPrice: 899,
    imageUrl: '',
    sizes: 'S, M, L, XL, XXL',
    inStock: true,
    badge: 'NEW DROP',
    description: ''
  });

  // -------------------------------------------------------------
  // 3. MEMBERSHIP CONFIG STATE
  // -------------------------------------------------------------
  const [membershipForm, setMembershipForm] = useState<MembershipConfig>(() => ({ ...membershipConfig }));

  // Keep membershipForm synced when not actively editing
  useEffect(() => {
    if (!isEditingRef.current) {
      setMembershipForm({ ...membershipConfig });
    }
  }, [membershipConfig, isEditingRef]);

  // -------------------------------------------------------------
  // 4. ANNOUNCEMENT STATE
  // -------------------------------------------------------------
  const [announcementForm, setAnnouncementForm] = useState({
    title: '',
    description: '',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    category: 'Match' as const,
    image: '',
    ctaText: '',
    ctaLink: '',
    isUrgent: false
  });

  // -------------------------------------------------------------
  // 5. GALLERY STATE
  // -------------------------------------------------------------
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    category: 'Screenings' as const,
    imageUrl: '',
    caption: '',
    date: 'October 2026'
  });

  // -------------------------------------------------------------
  // 6. CORE MEMBER STATE
  // -------------------------------------------------------------
  const [memberForm, setMemberForm] = useState({
    name: '',
    role: '',
    department: 'Core Team' as 'Core Team' | 'Working Committee' | 'Football & Operations',
    bio: '',
    imageUrl: '',
    favoritePlayer: '',
    instagram: '',
    twitter: '',
    whatsapp: ''
  });

  // -------------------------------------------------------------
  // 7. TURF EVENT STATE
  // -------------------------------------------------------------
  const [turfForm, setTurfForm] = useState({
    title: '',
    date: '',
    time: '',
    venue: 'TurfPark Koramangala',
    slotsTotal: 21,
    format: '7v7',
    description: ''
  });

  const notifySuccess = (msg: string) => {
    setSuccessMsg(msg);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#004D98', '#A50044', '#EDBB00']
      });
    } catch {}
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // Screening Handlers
  const handleStartEditScreening = (sc: Screening) => {
    isEditingRef.current = true;
    setEditingScreeningId(sc.id);
    setScreeningForm({
      match: sc.match,
      opponent: sc.opponent || '',
      competition: sc.competition,
      date: sc.date,
      time: sc.time,
      venue: sc.venue,
      venueAddress: sc.venueAddress || '',
      poster: sc.poster || '',
      ticketUrl: sc.ticketUrl || '',
      description: sc.description,
      entryFee: sc.entryFee || '₹200 Cover Charge',
      isUpcoming: sc.isUpcoming
    });
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleCancelScreeningEdit = () => {
    isEditingRef.current = false;
    setEditingScreeningId(null);
    setScreeningForm({
      match: '',
      opponent: '',
      competition: 'La Liga',
      date: '',
      time: '',
      venue: '',
      venueAddress: '',
      poster: '',
      ticketUrl: 'https://in.bookmyshow.com/bengaluru/events',
      description: '',
      entryFee: '₹200 Cover Charge',
      isUpcoming: true
    });
  };

  const handleSaveScreening = (e: React.FormEvent) => {
    e.preventDefault();
    if (!screeningForm.match || !screeningForm.venue) return;

    if (editingScreeningId) {
      updateScreening(editingScreeningId, screeningForm);
      notifySuccess(`Screening "${screeningForm.match}" updated successfully!`);
      handleCancelScreeningEdit();
    } else {
      addScreening(screeningForm);
      notifySuccess(`New screening "${screeningForm.match}" published!`);
      setScreeningForm({
        match: '',
        opponent: '',
        competition: 'La Liga',
        date: '',
        time: '',
        venue: '',
        venueAddress: '',
        poster: '',
        ticketUrl: 'https://in.bookmyshow.com/bengaluru/events',
        description: '',
        entryFee: '₹200 Cover Charge',
        isUpcoming: true
      });
      isEditingRef.current = false;
    }
  };

  // Product Handlers
  const handleStartEditProduct = (prod: Product) => {
    isEditingRef.current = true;
    setEditingProductId(prod.id);
    setProductForm({
      name: prod.name,
      category: prod.category,
      price: prod.price,
      originalPrice: prod.originalPrice || prod.price + 200,
      imageUrl: prod.imageUrl,
      sizes: prod.sizes.join(', '),
      inStock: prod.inStock,
      badge: prod.badge || '',
      description: prod.description
    });
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleCancelProductEdit = () => {
    isEditingRef.current = false;
    setEditingProductId(null);
    setProductForm({
      name: '',
      category: 'Apparel',
      price: 699,
      originalPrice: 899,
      imageUrl: '',
      sizes: 'S, M, L, XL, XXL',
      inStock: true,
      badge: 'NEW DROP',
      description: ''
    });
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name) return;

    const sizesArray = productForm.sizes
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const payload = {
      name: productForm.name,
      category: productForm.category,
      price: Number(productForm.price),
      originalPrice: Number(productForm.originalPrice),
      imageUrl: productForm.imageUrl || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      sizes: sizesArray.length > 0 ? sizesArray : ['S', 'M', 'L', 'XL'],
      inStock: productForm.inStock,
      badge: productForm.badge,
      description: productForm.description
    };

    if (editingProductId) {
      updateProduct(editingProductId, payload);
      notifySuccess(`Product "${productForm.name}" updated!`);
      handleCancelProductEdit();
    } else {
      addProduct(payload);
      notifySuccess(`Product "${productForm.name}" added to Merchandise Store!`);
      handleCancelProductEdit();
    }
  };

  // Membership Form Handler
  const handleSaveMembershipConfig = (e: React.FormEvent) => {
    e.preventDefault();
    isEditingRef.current = false;
    updateMembershipConfig(membershipForm);
    notifySuccess('Membership tiers and commercial pricing settings updated!');
  };

  return (
    <div className="pt-24 pb-20 space-y-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="ADMIN COMMAND CENTER"
        title="FCB Bengaluru Control Panel"
        subtitle="Manage live screenings, ticketing links, merchandise catalog, and membership tier pricing."
      />

      {/* Admin Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-4">
        {[
          { id: 'Screenings' as AdminTab, label: 'Screenings & Tickets', icon: Ticket, count: screenings.length },
          { id: 'Merchandise' as AdminTab, label: 'Merch Store', icon: ShoppingBag, count: products.length },
          { id: 'Membership' as AdminTab, label: 'Membership Manager', icon: CreditCard },
          { id: 'Announcements' as AdminTab, label: 'Announcements', icon: Megaphone, count: announcements.length },
          { id: 'Gallery' as AdminTab, label: 'Gallery', icon: ImageIcon, count: gallery.length },
          { id: 'Core Team' as AdminTab, label: 'Core Team', icon: Users, count: coreMembers.length },
          { id: 'Turf Football' as AdminTab, label: 'Turf Matches', icon: Calendar, count: turfEvents.length }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSuccessMsg('');
              }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] shadow-lg scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isActive ? 'bg-[#060e1a]/20 text-[#060e1a]' : 'bg-white/10 text-[#EDBB00]'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Global Success Notification */}
      {successMsg && (
        <div className="p-4 rounded-2xl bg-[#25D366]/20 border border-[#25D366] text-[#25D366] text-sm font-bold flex items-center space-x-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1. SCREENINGS TAB (Create / Edit / Delete + External Tickets) */}
      {/* ========================================================= */}
      {activeTab === 'Screenings' && (
        <div className="space-y-8 text-left">
          {/* Create / Edit Form Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <Ticket className="w-6 h-6 text-[#EDBB00]" />
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {editingScreeningId ? 'Edit Match Screening' : 'Create New Match Screening'}
                </h3>
              </div>
              {editingScreeningId && (
                <button
                  type="button"
                  onClick={handleCancelScreeningEdit}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-bold text-gray-300 hover:bg-white/20 flex items-center space-x-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Cancel Edit</span>
                </button>
              )}
            </div>

            <form onSubmit={handleSaveScreening} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Match Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="FC Barcelona vs Real Madrid"
                    value={screeningForm.match}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, match: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Competition</label>
                  <input
                    type="text"
                    placeholder="La Liga • El Clásico / Champions League"
                    value={screeningForm.competition}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, competition: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sunday, Nov 3, 2026"
                    value={screeningForm.date}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Kick-off Time</label>
                  <input
                    type="text"
                    placeholder="8:30 PM IST"
                    value={screeningForm.time}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Venue Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Underdoggs Sports Bar & Grill, Indiranagar"
                    value={screeningForm.venue}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, venue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#EDBB00] uppercase mb-1 flex items-center space-x-1">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>External Ticket Purchase URL (BookMyShow / Paytm / Link) *</span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://in.bookmyshow.com/bengaluru/events/..."
                    value={screeningForm.ticketUrl}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, ticketUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-[#EDBB00]/40 text-white text-sm focus:border-[#EDBB00] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Poster Image URL</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={screeningForm.poster}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, poster: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Entry Cover Fee</label>
                  <input
                    type="text"
                    placeholder="₹200 Cover Charge"
                    value={screeningForm.entryFee}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, entryFee: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Status</label>
                  <select
                    value={screeningForm.isUpcoming ? 'upcoming' : 'completed'}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setScreeningForm({ ...screeningForm, isUpcoming: e.target.value === 'upcoming' })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1324] border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  >
                    <option value="upcoming">Upcoming Screening</option>
                    <option value="completed">Completed / Past</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Match Description</label>
                <textarea
                  rows={2}
                  placeholder="Atmosphere details, projector setup, fan chants and F&B perks..."
                  value={screeningForm.description}
                  onFocus={() => { isEditingRef.current = true; }}
                  onChange={e => setScreeningForm({ ...screeningForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>{editingScreeningId ? 'Save Screening Changes' : 'Publish Match Screening'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Existing Screenings List */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white uppercase tracking-wider flex items-center justify-between">
              <span>Current Screenings ({screenings.length})</span>
              <span className="text-xs font-mono text-[#EDBB00]">Live Database</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {screenings.map((sc) => (
                <div
                  key={sc.id}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EDBB00]/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-[#EDBB00] uppercase font-bold block">
                          {sc.competition}
                        </span>
                        <h5 className="text-base font-black text-white uppercase mt-0.5">{sc.match}</h5>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                        sc.isUpcoming ? 'bg-[#A50044] text-white' : 'bg-gray-700 text-gray-300'
                      }`}>
                        {sc.isUpcoming ? 'Upcoming' : 'Past'}
                      </span>
                    </div>

                    <div className="text-xs text-gray-300 font-mono space-y-1 mt-3">
                      <p>📅 {sc.date} • {sc.time}</p>
                      <p>📍 {sc.venue}</p>
                      {sc.ticketUrl && (
                        <p className="text-[#60A5FA] truncate flex items-center space-x-1 pt-1">
                          <ExternalLink className="w-3 h-3 shrink-0" />
                          <a href={sc.ticketUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {sc.ticketUrl}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-2 pt-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => handleStartEditScreening(sc)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 text-xs font-bold flex items-center space-x-1"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-[#EDBB00]" />
                      <span>Edit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete screening "${sc.match}"?`)) {
                          deleteScreening(sc.id);
                          notifySuccess(`Screening "${sc.match}" removed.`);
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 text-xs font-bold flex items-center space-x-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. MERCHANDISE STORE TAB (Create / Edit / Delete) */}
      {/* ========================================================= */}
      {activeTab === 'Merchandise' && (
        <div className="space-y-8 text-left">
          {/* Create / Edit Form Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-6 h-6 text-[#EDBB00]" />
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {editingProductId ? 'Edit Product Item' : 'Add New Merchandise Product'}
                </h3>
              </div>
              {editingProductId && (
                <button
                  type="button"
                  onClick={handleCancelProductEdit}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-bold text-gray-300 hover:bg-white/20 flex items-center space-x-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Cancel Edit</span>
                </button>
              )}
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Product Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="Official Barça Bengaluru Matchday Scarf"
                    value={productForm.name}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Category</label>
                  <select
                    value={productForm.category}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setProductForm({ ...productForm, category: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1324] border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  >
                    <option value="Apparel">Apparel (Jerseys, Tees, Hoodies)</option>
                    <option value="Accessories">Accessories (Caps, Scarves, Wristbands)</option>
                    <option value="Collectibles">Collectibles (Badges, Flags, Membership)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Selling Price (₹) *</label>
                  <input
                    type="number"
                    required
                    placeholder="799"
                    value={productForm.price}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setProductForm({ ...productForm, price: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-mono focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Original Price (₹ MRP)</label>
                  <input
                    type="number"
                    placeholder="999"
                    value={productForm.originalPrice}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setProductForm({ ...productForm, originalPrice: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-mono focus:border-[#EDBB00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Promo Badge</label>
                  <input
                    type="text"
                    placeholder="BESTSELLER / LIMITED"
                    value={productForm.badge}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setProductForm({ ...productForm, badge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Available Sizes (Comma-separated)</label>
                  <input
                    type="text"
                    placeholder="S, M, L, XL, XXL, 3XL"
                    value={productForm.sizes}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setProductForm({ ...productForm, sizes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Stock Status</label>
                  <select
                    value={productForm.inStock ? 'in_stock' : 'out_of_stock'}
                    onFocus={() => { isEditingRef.current = true; }}
                    onChange={e => setProductForm({ ...productForm, inStock: e.target.value === 'in_stock' })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1324] border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                  >
                    <option value="in_stock">In Stock (Available for Purchase)</option>
                    <option value="out_of_stock">Out of Stock (Mark Sold Out)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Product Image URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={productForm.imageUrl}
                  onFocus={() => { isEditingRef.current = true; }}
                  onChange={e => setProductForm({ ...productForm, imageUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Premium cotton blend, woven embroidery, matchday ready..."
                  value={productForm.description}
                  onFocus={() => { isEditingRef.current = true; }}
                  onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#EDBB00] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>{editingProductId ? 'Save Product Changes' : 'Add Product to Merchandise'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Existing Products List */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-white uppercase tracking-wider flex items-center justify-between">
              <span>Catalog Products ({products.length})</span>
              <span className="text-xs font-mono text-[#EDBB00]">Store Inventory</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((prod) => (
                <div
                  key={prod.id}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start space-x-3">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-[#EDBB00] uppercase font-bold block truncate">
                        {prod.category}
                      </span>
                      <h5 className="text-sm font-bold text-white uppercase truncate">{prod.name}</h5>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-sm font-bold text-[#EDBB00] font-mono">₹{prod.price}</span>
                        {prod.originalPrice && (
                          <span className="text-xs text-gray-400 line-through font-mono">₹{prod.originalPrice}</span>
                        )}
                        <span className={`text-[10px] font-mono font-bold ${prod.inStock ? 'text-[#25D366]' : 'text-red-400'}`}>
                          {prod.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                    <span className="text-gray-400 font-mono text-[11px]">
                      Sizes: {prod.sizes.join(', ')}
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <button
                        type="button"
                        onClick={() => handleStartEditProduct(prod)}
                        className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20"
                        title="Edit Product"
                      >
                        <Edit2 className="w-3.5 h-3.5 text-[#EDBB00]" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Delete product "${prod.name}"?`)) {
                            deleteProduct(prod.id);
                            notifySuccess(`Product "${prod.name}" removed.`);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30"
                        title="Delete Product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. MEMBERSHIP TIER MANAGER (Base prices, Tax %, Platform fee, Size Slabs) */}
      {/* ========================================================= */}
      {activeTab === 'Membership' && (
        <div className="space-y-8 text-left">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-6 h-6 text-[#EDBB00]" />
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">
                    Membership Tier & Pricing Manager
                  </h3>
                  <p className="text-xs text-gray-300">
                    Configure official membership pass rates, commercial tax percent, and size slab pricing.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSaveMembershipConfig} className="space-y-6">
              {/* Base Prices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase block">
                    Culer Tier (Basic) Base Price
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white font-mono">₹</span>
                    <input
                      type="number"
                      required
                      value={membershipForm.culerPrice}
                      onFocus={() => { isEditingRef.current = true; }}
                      onChange={e => setMembershipForm({ ...membershipForm, culerPrice: Number(e.target.value) })}
                      className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-lg font-mono font-bold focus:border-[#EDBB00] outline-none"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400">Standard 1-year pass with digital card & partner perks.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase block">
                    Soci Tier (VIP) Base Price
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white font-mono">₹</span>
                    <input
                      type="number"
                      required
                      value={membershipForm.sociPrice}
                      onFocus={() => { isEditingRef.current = true; }}
                      onChange={e => setMembershipForm({ ...membershipForm, sociPrice: Number(e.target.value) })}
                      className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-lg font-mono font-bold focus:border-[#EDBB00] outline-none"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400">Includes official woven scarf, welcome kit, 25% screening off.</p>
                </div>
              </div>

              {/* Tax & Platform Fee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase block flex items-center space-x-1">
                    <Percent className="w-3.5 h-3.5" />
                    <span>Applicable Tax Rate (%)</span>
                  </span>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="0"
                      max="28"
                      value={membershipForm.taxRatePercent}
                      onFocus={() => { isEditingRef.current = true; }}
                      onChange={e => setMembershipForm({ ...membershipForm, taxRatePercent: Number(e.target.value) })}
                      className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-base font-mono font-bold focus:border-[#EDBB00] outline-none"
                    />
                    <span className="text-sm font-bold text-gray-300 font-mono">% GST</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Calculated automatically on cart subtotal at checkout.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-[#EDBB00] font-bold uppercase block flex items-center space-x-1">
                    <Coins className="w-3.5 h-3.5" />
                    <span>Platform & Gateway Fee (₹)</span>
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-bold text-white font-mono">₹</span>
                    <input
                      type="number"
                      min="0"
                      value={membershipForm.platformFee}
                      onFocus={() => { isEditingRef.current = true; }}
                      onChange={e => setMembershipForm({ ...membershipForm, platformFee: Number(e.target.value) })}
                      className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-base font-mono font-bold focus:border-[#EDBB00] outline-none"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400">Flat operational fee per order / cart checkout.</p>
                </div>
              </div>

              {/* Kit Size-Specific Slabs */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-[#EDBB00] font-bold uppercase tracking-wider">
                    Size-Specific Pricing Slabs (Extra Surcharge per Kit Size)
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Added to base membership price if the member selects larger apparel kit sizes (e.g. XXL, 3XL).
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {(membershipForm.availableKitSizes || ['S', 'M', 'L', 'XL', 'XXL', '3XL']).map((sz) => (
                    <div key={sz} className="p-3 rounded-xl bg-black/30 border border-white/10 space-y-1">
                      <span className="text-xs font-bold text-white font-mono block">Size {sz}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-gray-400 font-mono">+₹</span>
                        <input
                          type="number"
                          min="0"
                          value={membershipForm.sizePriceSlabs?.[sz] ?? 0}
                          onFocus={() => { isEditingRef.current = true; }}
                          onChange={e => {
                            const val = Number(e.target.value);
                            setMembershipForm({
                              ...membershipForm,
                              sizePriceSlabs: {
                                ...membershipForm.sizePriceSlabs,
                                [sz]: val
                              }
                            });
                          }}
                          className="w-full px-2 py-1 rounded bg-white/5 border border-white/10 text-white text-xs font-mono font-bold text-center focus:border-[#EDBB00] outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Save Membership & Commercial Rates</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. ANNOUNCEMENTS TAB */}
      {/* ========================================================= */}
      {activeTab === 'Announcements' && (
        <div className="space-y-8 text-left">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-white uppercase flex items-center space-x-2 border-b border-white/10 pb-4">
              <Megaphone className="w-5 h-5 text-[#EDBB00]" />
              <span>Publish Official Community Announcement</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!announcementForm.title) return;
                addAnnouncement(announcementForm);
                notifySuccess(`Announcement "${announcementForm.title}" published!`);
                setAnnouncementForm({
                  title: '',
                  description: '',
                  date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                  category: 'Match',
                  image: '',
                  ctaText: '',
                  ctaLink: '',
                  isUrgent: false
                });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Headline *</label>
                  <input
                    type="text"
                    required
                    placeholder="El Clásico Screening Tickets Now Live!"
                    value={announcementForm.title}
                    onChange={e => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Category</label>
                  <select
                    value={announcementForm.category}
                    onChange={e => setAnnouncementForm({ ...announcementForm, category: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1324] border border-white/10 text-white text-sm"
                  >
                    <option value="Match">Match Screening</option>
                    <option value="Community">Community Gathering</option>
                    <option value="Turf">Turf Football</option>
                    <option value="Merch">Merchandise Drop</option>
                    <option value="General">General Club Notice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Full Announcement Body</label>
                <textarea
                  rows={3}
                  placeholder="Details, venue guidelines, discount codes, timings..."
                  value={announcementForm.description}
                  onChange={e => setAnnouncementForm({ ...announcementForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110"
              >
                Publish Announcement
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. GALLERY TAB */}
      {/* ========================================================= */}
      {activeTab === 'Gallery' && (
        <div className="space-y-8 text-left">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-white uppercase flex items-center space-x-2 border-b border-white/10 pb-4">
              <ImageIcon className="w-5 h-5 text-[#EDBB00]" />
              <span>Add Photo to Supporter Gallery</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!galleryForm.title || !galleryForm.imageUrl) return;
                addGalleryItem(galleryForm);
                notifySuccess(`Gallery item "${galleryForm.title}" added!`);
                setGalleryForm({
                  title: '',
                  category: 'Screenings',
                  imageUrl: '',
                  caption: '',
                  date: 'October 2026'
                });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Photo Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="El Clásico Celebration at Underdoggs"
                    value={galleryForm.title}
                    onChange={e => setGalleryForm({ ...galleryForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Category</label>
                  <select
                    value={galleryForm.category}
                    onChange={e => setGalleryForm({ ...galleryForm, category: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1324] border border-white/10 text-white text-sm"
                  >
                    <option value="Screenings">Screenings (Matchday nights)</option>
                    <option value="Members">Members (Culers & Soci)</option>
                    <option value="Team Members">Team Members (Core Leadership)</option>
                    <option value="Football Team">Football Team (FCB BLR 7v7 squad)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Image URL *</label>
                <input
                  type="url"
                  required
                  placeholder="https://images.unsplash.com/..."
                  value={galleryForm.imageUrl}
                  onChange={e => setGalleryForm({ ...galleryForm, imageUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110"
              >
                Upload Photo to Gallery
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. CORE TEAM TAB */}
      {/* ========================================================= */}
      {activeTab === 'Core Team' && (
        <div className="space-y-8 text-left">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-white uppercase flex items-center space-x-2 border-b border-white/10 pb-4">
              <Users className="w-5 h-5 text-[#EDBB00]" />
              <span>Add Core Team Member</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!memberForm.name) return;
                addCoreMember({
                  ...memberForm,
                  socials: {
                    instagram: memberForm.instagram || undefined,
                    twitter: memberForm.twitter || undefined,
                    whatsapp: memberForm.whatsapp || undefined
                  }
                });
                notifySuccess(`Core Member "${memberForm.name}" added!`);
                setMemberForm({
                  name: '',
                  role: '',
                  department: 'Core Team',
                  bio: '',
                  imageUrl: '',
                  favoritePlayer: '',
                  instagram: '',
                  twitter: '',
                  whatsapp: ''
                });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Harroop / Aakash"
                    value={memberForm.name}
                    onChange={e => setMemberForm({ ...memberForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Role Title</label>
                  <input
                    type="text"
                    placeholder="President / Head of Operations"
                    value={memberForm.role}
                    onChange={e => setMemberForm({ ...memberForm, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Department</label>
                  <select
                    value={memberForm.department}
                    onChange={e => setMemberForm({ ...memberForm, department: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1324] border border-white/10 text-white text-sm"
                  >
                    <option value="Core Team">Core Team</option>
                    <option value="Working Committee">Working Committee</option>
                    <option value="Football & Operations">Football & Operations</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110"
              >
                Add Team Member
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 7. TURF FOOTBALL TAB */}
      {/* ========================================================= */}
      {activeTab === 'Turf Football' && (
        <div className="space-y-8 text-left">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
            <h3 className="text-lg font-black text-white uppercase flex items-center space-x-2 border-b border-white/10 pb-4">
              <Calendar className="w-5 h-5 text-[#EDBB00]" />
              <span>Create Weekend Turf Football Session</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!turfForm.title) return;
                addTurfEvent(turfForm);
                notifySuccess(`Turf session "${turfForm.title}" created!`);
                setTurfForm({
                  title: '',
                  date: '',
                  time: '',
                  venue: 'TurfPark Koramangala',
                  slotsTotal: 21,
                  format: '7v7',
                  description: ''
                });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Session Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="Weekend 7v7 Blaugrana Scrimmage"
                    value={turfForm.title}
                    onChange={e => setTurfForm({ ...turfForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Venue</label>
                  <input
                    type="text"
                    required
                    placeholder="TurfPark Koramangala"
                    value={turfForm.venue}
                    onChange={e => setTurfForm({ ...turfForm, venue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110"
              >
                Create Turf Session
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
