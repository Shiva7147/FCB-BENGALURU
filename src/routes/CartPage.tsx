import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal, totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="YOUR SUPPORTERS BASKET"
        title="Shopping Cart ({totalItems} Items)"
        subtitle="Review your FC Barcelona Supporters Club merchandise order before proceeding to checkout."
      />

      {cartItems.length === 0 ? (
        <div className="glass-panel rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-400">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white uppercase">Your Shopping Cart is Empty</h3>
          <p className="text-xs text-gray-300">
            Choose from official FC Barcelona Supporters Club jerseys, scarves, hoodies, and caps.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110"
          >
            Explore Merchandise Store
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Cart Table List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono text-gray-400 uppercase">
              <span>Items in Order</span>
              <button
                onClick={clearCart}
                className="text-[#A50044] hover:underline font-bold"
              >
                Empty Cart
              </button>
            </div>

            {cartItems.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${idx}`}
                className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      Selected Size: <span className="text-[#EDBB00] font-bold">{item.selectedSize}</span>
                    </p>
                    <p className="text-xs font-mono text-[#EDBB00] mt-1">
                      Unit Price: ₹{item.product.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end space-x-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-[#A50044]"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-extrabold text-white font-mono px-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-[#004D98]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Subtotal & Delete */}
                  <div className="text-right">
                    <span className="text-sm font-black text-[#EDBB00] font-mono block">
                      ₹{item.product.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                      className="text-xs text-gray-400 hover:text-[#A50044] transition-colors mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-4">
            <div className="glass-panel-gold p-6 rounded-3xl border border-[#EDBB00]/40 space-y-4">
              <h3 className="text-lg font-black text-white uppercase tracking-tight border-b border-white/10 pb-3">
                Order Total Summary
              </h3>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-mono text-white font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bengaluru Screening Pickup</span>
                  <span className="text-[#25D366] font-mono">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Home Courier</span>
                  <span className="font-mono text-white">₹99</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-white/10 text-base font-black text-white">
                  <span>Final Amount</span>
                  <span className="font-mono text-[#EDBB00]">₹{subtotal + 99}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-400 font-mono pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Ready for Razorpay / Stripe / UPI Integration</span>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
