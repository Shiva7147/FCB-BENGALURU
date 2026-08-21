import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProductModal } from '../components/ProductModal';
import { useAdmin } from '../context/AdminContext';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingBag, Eye, ShieldCheck, Check } from 'lucide-react';

export const Shop: React.FC = () => {
  const { products } = useAdmin();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = ['All', 'Apparel', 'Accessories', 'Collectibles'];

  const filteredProducts = products.filter(p =>
    selectedCategory === 'All' ? true : p.category === selectedCategory
  );

  const handleQuickAdd = (product: Product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="OFFICIAL MERCHANDISE"
        title="THE FIRST DROP"
        subtitle="Gear up in official Bengaluru Culés apparel, woven matchday scarves, snapback caps, and jerseys."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] shadow-lg scale-105'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#EDBB00]/60 transition-all text-left space-y-4 shadow-xl flex flex-col justify-between group"
          >
            <div>
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden bg-black/40">
                <img
                  src={prod.imageUrl}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {prod.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#A50044] text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                    {prod.badge}
                  </span>
                )}
                
                {/* Quick View Button */}
                <button
                  onClick={() => setActiveModalProduct(prod)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#EDBB00] hover:text-[#060e1a] transition-all"
                  aria-label="Quick View Details"
                  title="Quick View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Info */}
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-mono text-[#EDBB00] uppercase tracking-widest block">
                  {prod.category}
                </span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight line-clamp-1">
                  {prod.name}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {prod.description}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-[#EDBB00] font-mono">
                    ₹{prod.price}
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono">
                    Sizes: {prod.sizes.join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveModalProduct(prod)}
                className="py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Options & Size
              </button>
              <button
                onClick={() => handleQuickAdd(prod)}
                className={`py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1 shadow-md ${
                  addedId === prod.id
                    ? 'bg-[#25D366] text-white'
                    : 'bg-[#EDBB00] text-[#060e1a] hover:brightness-110'
                }`}
              >
                {addedId === prod.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}

    </div>
  );
};
