import React, { useState } from 'react';
import { X, ShoppingBag, Check, Shield } from 'lucide-react';
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

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#071120] border border-[#EDBB00]/40 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        
        {/* Left: Image Container */}
        <div className="relative h-64 md:h-full bg-black/40 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#A50044] text-white text-[10px] font-black uppercase tracking-widest">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right: Details & Add To Cart Form */}
        <div className="p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#EDBB00] uppercase font-mono tracking-widest">
                {product.category}
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              {product.name}
            </h3>

            <p className="text-2xl font-extrabold text-[#EDBB00] font-mono">
              ₹{product.price}
            </p>

            <p className="text-xs text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition-all ${
                        selectedSize === sz
                          ? 'bg-[#EDBB00] text-[#060e1a] border border-[#EDBB00]'
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
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-[#A50044]"
                >
                  -
                </button>
                <span className="text-sm font-bold text-white font-mono px-3">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-white/10 text-white font-bold hover:bg-[#004D98]"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-xl ${
              added
                ? 'bg-[#25D366] text-white'
                : 'bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] hover:brightness-110'
            }`}
          >
            {added ? (
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
