import React, { useState } from 'react';
import { X, ShoppingBag, Check, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'One Size');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const galleryImages = (product.images && product.images.length > 0)
    ? product.images
    : [product.imageUrl];

  const currentImage = galleryImages[activeImgIndex] || product.imageUrl;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const handlePrevImage = () => {
    setActiveImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#071120] border-2 border-[#EDBB00]/50 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 my-auto">
        
        {/* Left: Gallery & Exact Aspect Ratio Image Display */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-black/30 border-b md:border-b-0 md:border-r border-white/10 space-y-4">
          <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-xl group">
            <img
              src={currentImage}
              alt={`${product.name} - View ${activeImgIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
              {product.badge && (
                <span className="px-3 py-1 rounded-full bg-[#A50044] text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                  {product.badge}
                </span>
              )}
              {!product.inStock && (
                <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                  OUT OF STOCK
                </span>
              )}
            </div>

            {/* Carousel navigation controls if multiple images */}
            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#EDBB00] hover:text-[#060e1a] transition-all opacity-80 hover:opacity-100 shadow-lg"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#EDBB00] hover:text-[#060e1a] transition-all opacity-80 hover:opacity-100 shadow-lg"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-full bg-black/70 border border-white/20 text-[10px] font-mono text-[#EDBB00]">
                  {activeImgIndex + 1} / {galleryImages.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2 pt-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative aspect-[3/2] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImgIndex === idx
                      ? 'border-[#EDBB00] shadow-md scale-105'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details & Add To Cart Form */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#EDBB00] uppercase font-mono tracking-widest">
                {product.category}
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                {product.name}
              </h3>
              <div className="flex items-baseline space-x-3 mt-1">
                <span className="text-2xl font-extrabold text-[#EDBB00] font-mono">
                  ₹{product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through font-mono">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xs font-black text-[#25D366] font-mono">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all ${
                        selectedSize === sz
                          ? 'bg-[#EDBB00] text-[#060e1a] border border-[#EDBB00] shadow-md scale-105'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-[#A50044] transition-all"
                >
                  -
                </button>
                <span className="text-sm font-bold text-white font-mono px-3">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-[#004D98] transition-all"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-xl ${
              !product.inStock
                ? 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/10'
                : added
                ? 'bg-[#25D366] text-white'
                : 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] hover:brightness-110'
            }`}
          >
            {!product.inStock ? (
              <span>Currently Out of Stock</span>
            ) : added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart • ₹{product.price * quantity}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
