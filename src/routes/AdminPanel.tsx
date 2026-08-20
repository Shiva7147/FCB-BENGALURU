import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useAdmin } from '../context/AdminContext';
import { Settings, Plus, CheckCircle2, Shield, Layers, Image as ImageIcon, Ticket, Megaphone, ShoppingBag, Users, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

type ContentType = 'Screening' | 'Announcement' | 'Gallery' | 'Product' | 'Core Member' | 'Match Day';

export const AdminPanel: React.FC = () => {
  const { addScreening, addAnnouncement, addGalleryItem, addProduct, addCoreMember, addTurfEvent } = useAdmin();
  
  const [contentType, setContentType] = useState<ContentType>('Screening');
  const [successMsg, setSuccessMsg] = useState('');

  // Form states per type
  const [screeningForm, setScreeningForm] = useState({
    match: '',
    opponent: '',
    competition: 'La Liga',
    date: '',
    time: '',
    venue: '',
    venueAddress: '',
    poster: '',
    description: '',
    entryFee: '₹200 Cover Charge',
    isUpcoming: true
  });

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

  const [galleryForm, setGalleryForm] = useState({
    title: '',
    category: 'Screenings' as const,
    imageUrl: '',
    caption: '',
    date: 'August 2026'
  });

  const [productForm, setProductForm] = useState({
    name: '',
    price: 699,
    description: '',
    imageUrl: '',
    category: 'Apparel' as const,
    sizes: 'S, M, L, XL',
    inStock: true,
    badge: ''
  });

  const [memberForm, setMemberForm] = useState({
    name: '',
    role: '',
    bio: '',
    imageUrl: '',
    favoritePlayer: '',
    instagram: '',
    twitter: '',
    whatsapp: ''
  });

  const [turfForm, setTurfForm] = useState({
    title: '',
    date: '',
    time: '',
    venue: 'TurfPark Koramangala',
    slotsTotal: 21,
    format: '7v7',
    description: ''
  });

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();

    if (contentType === 'Screening') {
      if (!screeningForm.match || !screeningForm.venue) return;
      addScreening(screeningForm);
      setSuccessMsg(`Screening "${screeningForm.match}" published!`);
    } else if (contentType === 'Announcement') {
      if (!announcementForm.title) return;
      addAnnouncement(announcementForm);
      setSuccessMsg(`Announcement "${announcementForm.title}" published!`);
    } else if (contentType === 'Gallery') {
      if (!galleryForm.title || !galleryForm.imageUrl) return;
      addGalleryItem(galleryForm);
      setSuccessMsg(`Gallery photo "${galleryForm.title}" published!`);
    } else if (contentType === 'Product') {
      if (!productForm.name) return;
      addProduct({
        ...productForm,
        sizes: productForm.sizes.split(',').map(s => s.trim())
      });
      setSuccessMsg(`Product "${productForm.name}" added to Shop!`);
    } else if (contentType === 'Core Member') {
      if (!memberForm.name) return;
      addCoreMember({
        ...memberForm,
        socials: {
          instagram: memberForm.instagram || undefined,
          twitter: memberForm.twitter || undefined,
          whatsapp: memberForm.whatsapp || undefined
        }
      });
      setSuccessMsg(`Core Member "${memberForm.name}" added!`);
    } else if (contentType === 'Match Day') {
      if (!turfForm.title) return;
      addTurfEvent(turfForm);
      setSuccessMsg(`Turf Event "${turfForm.title}" created!`);
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#004D98', '#A50044', '#EDBB00']
      });
    } catch {}

    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="ADMIN CONTENT DEMO PANEL"
        title="Dynamic Content Management"
        subtitle="Select a content category below to generate dynamic input fields. Submissions instantly update local site storage."
      />

      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 text-left space-y-8 shadow-2xl">
        
        {/* Content Type Selector (Rule #23 Requirement) */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-[#EDBB00] uppercase tracking-widest flex items-center space-x-2">
            <Layers className="w-4 h-4" />
            <span>Select Content Type to Create</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {(['Screening', 'Announcement', 'Gallery', 'Product', 'Core Member', 'Match Day'] as ContentType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setContentType(type);
                  setSuccessMsg('');
                }}
                className={`py-3 px-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all text-center ${
                  contentType === type
                    ? 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] shadow-lg scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Form depending on contentType */}
        <form onSubmit={handlePublish} className="space-y-4 pt-4 border-t border-white/10">
          
          {/* SCREENING FORM */}
          {contentType === 'Screening' && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white uppercase flex items-center space-x-2">
                <Ticket className="w-5 h-5 text-[#EDBB00]" />
                <span>Create Match Screening</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Match Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="FC Barcelona vs Real Madrid"
                    value={screeningForm.match}
                    onChange={e => setScreeningForm({ ...screeningForm, match: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Competition</label>
                  <input
                    type="text"
                    placeholder="La Liga • El Clásico"
                    value={screeningForm.competition}
                    onChange={e => setScreeningForm({ ...screeningForm, competition: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="Saturday, Oct 26, 2026"
                    value={screeningForm.date}
                    onChange={e => setScreeningForm({ ...screeningForm, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Time</label>
                  <input
                    type="text"
                    placeholder="8:30 PM IST"
                    value={screeningForm.time}
                    onChange={e => setScreeningForm({ ...screeningForm, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Venue Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Underdoggs Indiranagar"
                    value={screeningForm.venue}
                    onChange={e => setScreeningForm({ ...screeningForm, venue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Poster Image URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={screeningForm.poster}
                    onChange={e => setScreeningForm({ ...screeningForm, poster: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Screening details, sound setup, chant leaders..."
                  value={screeningForm.description}
                  onChange={e => setScreeningForm({ ...screeningForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>
            </div>
          )}

          {/* ANNOUNCEMENT FORM */}
          {contentType === 'Announcement' && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white uppercase flex items-center space-x-2">
                <Megaphone className="w-5 h-5 text-[#EDBB00]" />
                <span>Create Announcement</span>
              </h4>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Announcement Title *</label>
                <input
                  type="text"
                  required
                  placeholder="El Clásico Screening Tickets Opening Soon"
                  value={announcementForm.title}
                  onChange={e => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Description *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Full announcement description text..."
                  value={announcementForm.description}
                  onChange={e => setAnnouncementForm({ ...announcementForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">CTA Text (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. RSVP Now"
                    value={announcementForm.ctaText}
                    onChange={e => setAnnouncementForm({ ...announcementForm, ctaText: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">CTA Target Link</label>
                  <input
                    type="text"
                    placeholder="/screenings"
                    value={announcementForm.ctaLink}
                    onChange={e => setAnnouncementForm({ ...announcementForm, ctaLink: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* GALLERY FORM */}
          {contentType === 'Gallery' && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white uppercase flex items-center space-x-2">
                <ImageIcon className="w-5 h-5 text-[#EDBB00]" />
                <span>Upload Gallery Photo</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Photo Title *</label>
                  <input
                    type="text"
                    required
                    placeholder=" इंडिरानगर Screening Pyro Night"
                    value={galleryForm.title}
                    onChange={e => setGalleryForm({ ...galleryForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
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
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Caption</label>
                <textarea
                  rows={2}
                  placeholder="Over 300 Culés celebrating the last-minute winner!"
                  value={galleryForm.caption}
                  onChange={e => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>
            </div>
          )}

          {/* PRODUCT FORM */}
          {contentType === 'Product' && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white uppercase flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#EDBB00]" />
                <span>Add Merchandise Product</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Blaugrana Bengaluru Scarf"
                    value={productForm.name}
                    onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={e => setProductForm({ ...productForm, price: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Image URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={productForm.imageUrl}
                    onChange={e => setProductForm({ ...productForm, imageUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Available Sizes (Comma separated)</label>
                  <input
                    type="text"
                    value={productForm.sizes}
                    onChange={e => setProductForm({ ...productForm, sizes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Material, embroidery details, fit..."
                  value={productForm.description}
                  onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>
            </div>
          )}

          {/* CORE MEMBER FORM */}
          {contentType === 'Core Member' && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white uppercase flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#EDBB00]" />
                <span>Add Core Leadership Member</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sameer Nair"
                    value={memberForm.name}
                    onChange={e => setMemberForm({ ...memberForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="Screening Coordinator"
                    value={memberForm.role}
                    onChange={e => setMemberForm({ ...memberForm, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Profile Avatar Image URL</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={memberForm.imageUrl}
                    onChange={e => setMemberForm({ ...memberForm, imageUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Favorite Player</label>
                  <input
                    type="text"
                    placeholder="Lionel Messi / Iniesta"
                    value={memberForm.favoritePlayer}
                    onChange={e => setMemberForm({ ...memberForm, favoritePlayer: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Short Bio</label>
                <textarea
                  rows={2}
                  placeholder="Responsibilities and fan story..."
                  value={memberForm.bio}
                  onChange={e => setMemberForm({ ...memberForm, bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                />
              </div>
            </div>
          )}

          {/* MATCH DAY / TURF FORM */}
          {contentType === 'Match Day' && (
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white uppercase flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-[#EDBB00]" />
                <span>Create Turf Event</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Event Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="Weekend 7v7 Tiki-Taka Scrimmage"
                    value={turfForm.title}
                    onChange={e => setTurfForm({ ...turfForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Venue *</label>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sunday, Aug 24, 2026"
                    value={turfForm.date}
                    onChange={e => setTurfForm({ ...turfForm, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Time</label>
                  <input
                    type="text"
                    placeholder="7:00 AM - 9:00 AM"
                    value={turfForm.time}
                    onChange={e => setTurfForm({ ...turfForm, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Success Banner */}
          {successMsg && (
            <div className="p-4 rounded-xl bg-[#25D366]/20 border border-[#25D366] text-[#25D366] text-xs font-bold flex items-center space-x-2 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Publish {contentType} to Site</span>
          </button>
        </form>
      </div>

    </div>
  );
};
