import React from 'react';
import { Star, Quote, ShoppingBag, Ticket, Shield } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 't-1',
      category: 'Screening Attendee',
      icon: Ticket,
      quote: "Attending my first El Clásico screening at Indiranagar was insane! 500+ Culés singing Cant del Barça together gave me goosebumps. It felt like being at Spotify Camp Nou.",
      author: "Aditya Nair",
      role: "Screening Regular • Indiranagar",
      rating: 5
    },
    {
      id: 't-[#EDBB00]',
      category: 'Merchandise Buyer',
      icon: ShoppingBag,
      quote: "The FCB Bengaluru scarf quality is top notch! Heavy double-layer knit with authentic Blaugrana colors. I wear it to every match night.",
      author: "Sneha Rao",
      role: "Soci Member • Koramangala",
      rating: 5
    },
    {
      id: 't-3',
      category: 'Culer Member',
      icon: Shield,
      quote: "Joining FCB Bengaluru is the best decision I made. From weekend turf games to VIP screening perks, the community welcomed me from day one.",
      author: "Kiran Kumar",
      role: "Culer Member • HSR Layout",
      rating: 5
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
      <div className="border-l-4 border-l-[#EDBB00] pl-4 space-y-1">
        <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">COMMUNITY TESTIMONIALS</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">WHAT BENGALURU CULÉS SAY</h2>
        <p className="text-xs text-gray-300">Real experiences from screening attendees, merchandise buyers, and club members.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => {
          const IconComp = t.icon;
          return (
            <div
              key={t.id}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#EDBB00]/50 transition-all space-y-4 text-left relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#004D98]/40 border border-[#EDBB00]/30 text-[#EDBB00] text-[10px] font-black uppercase tracking-widest">
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{t.category}</span>
                  </div>

                  <div className="flex text-[#EDBB00] space-x-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-[#A50044] opacity-60" />

                <p className="text-xs sm:text-sm text-gray-200 font-serif italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 font-sans">
                <span className="text-sm font-black text-white uppercase block">{t.author}</span>
                <span className="text-[11px] font-mono text-[#EDBB00] block mt-0.5">{t.role}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
