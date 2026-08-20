import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#071120] border-l border-[#EDBB00]/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#004D98]/60 to-[#A50044]/60 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#EDBB00]" />
              <h2 className="text-lg font-black text-white uppercase tracking-wider">
                Supporters Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase">Your cart is empty</h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Gear up with official FC Barcelona Supporters Club Bengaluru jerseys, scarves, and accessories!
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#EDBB00] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Explore Merchandise
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${idx}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-4"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate uppercase">
                      {item.product.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-[11px] text-gray-400 mt-0.5">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[#EDBB00] font-mono">
                        Size: {item.selectedSize}
                      </span>
                      <span>₹{item.product.price}</span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#A50044]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold font-mono text-white px-2">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#004D98]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove & Price */}
                  <div className="text-right flex flex-col justify-between h-full">
                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                      className="text-gray-400 hover:text-[#A50044] transition-colors ml-auto"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-extrabold text-[#EDBB00] font-mono mt-4">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout button */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#040912] border-t border-white/10 space-y-4">
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>Bengaluru Local Pickup / Shipping</span>
                  <span className="text-[#25D366]">Calculated at Checkout</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-black text-white">
                  <span>Total Amount</span>
                  <span className="font-mono text-[#EDBB00] text-base">₹{subtotal}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="py-3 text-center rounded-xl bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  View Full Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="py-3 text-center rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-1"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
