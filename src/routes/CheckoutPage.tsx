import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useCart } from '../context/CartContext';
import { CreditCard, CheckCircle2, ShieldCheck, Truck, ArrowLeft, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

export const CheckoutPage: React.FC = () => {
  const { cartItems, subtotal, totalItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '',
    deliveryMethod: 'pickup', // pickup | delivery
    paymentMethod: 'upi' // upi | card | netbanking
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const shippingCost = formData.deliveryMethod === 'delivery' ? 99 : 0;
  const grandTotal = subtotal + shippingCost;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    const generatedId = `FCB-BLR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);

    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#004D98', '#A50044', '#EDBB00']
      });
    } catch {}

    setOrderPlaced(true);
    clearCart();
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="pt-28 pb-20 max-w-md mx-auto text-center space-y-4 px-4">
        <h3 className="text-xl font-bold text-white uppercase">No Items to Checkout</h3>
        <p className="text-xs text-gray-300">Your cart is empty. Add products from our shop first.</p>
        <Link
          to="/shop"
          className="inline-block px-6 py-3 rounded-xl bg-[#EDBB00] text-[#060e1a] font-extrabold text-xs uppercase"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeader
        badge="CHECKOUT READY STRUCTURE"
        title="Complete Your Order"
        subtitle="Provide your delivery details and choose your preferred payment method preview."
      />

      {!orderPlaced ? (
        <form onSubmit={handleCompleteOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left 7 Cols: Address & Details Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Delivery Method Option */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-base font-black text-white uppercase tracking-tight flex items-center space-x-2">
                <Truck className="w-4 h-4 text-[#EDBB00]" />
                <span>Delivery Option</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                    formData.deliveryMethod === 'pickup'
                      ? 'bg-[#004D98]/40 border-[#EDBB00] text-white'
                      : 'bg-white/5 border-white/10 text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={e => setFormData({ ...formData, deliveryMethod: e.target.value })}
                      className="accent-[#EDBB00]"
                    />
                    <span className="text-xs font-bold uppercase">Screening Pickup</span>
                  </div>
                  <span className="text-[11px] text-gray-300 mt-2">
                    Collect at Next Screening (FREE)
                  </span>
                </label>

                <label
                  className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                    formData.deliveryMethod === 'delivery'
                      ? 'bg-[#004D98]/40 border-[#EDBB00] text-white'
                      : 'bg-white/5 border-white/10 text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="delivery"
                      checked={formData.deliveryMethod === 'delivery'}
                      onChange={e => setFormData({ ...formData, deliveryMethod: e.target.value })}
                      className="accent-[#EDBB00]"
                    />
                    <span className="text-xs font-bold uppercase">Bengaluru Home Shipping</span>
                  </div>
                  <span className="text-[11px] text-[#EDBB00] font-mono mt-2">
                    ₹99 Courier Charge
                  </span>
                </label>
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-base font-black text-white uppercase tracking-tight">
                Shipping & Contact Info
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Mehta"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="arjun@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                  Street Address / Apartment *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Flat 402, Royal Palms, Indiranagar 100ft Rd"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#EDBB00] text-sm"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    placeholder="560038"
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Payment Integration Placeholder UI (Rule #21) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-white uppercase tracking-tight flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-[#EDBB00]" />
                  <span>Payment Gateway Interface</span>
                </h3>
                <span className="text-[10px] font-mono text-[#EDBB00] bg-[#004D98]/40 border border-[#EDBB00]/30 px-2 py-0.5 rounded">
                  DEMO MODE
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#004D98]/20 border border-[#EDBB00]/30 text-xs text-gray-300 space-y-2">
                <p className="font-bold text-[#EDBB00]">
                  Payment Gateway Integration Structure
                </p>
                <p className="text-[11px] leading-relaxed">
                  This checkout interface is ready to connect with Razorpay / Stripe SDKs. Clicking submit will process a mock demonstration order.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-300 font-mono">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="accent-[#EDBB00]"
                  />
                  <span>UPI / GPay / PhonePe</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="accent-[#EDBB00]"
                  />
                  <span>Credit / Debit Card</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right 5 Cols: Final Order Summary */}
          <div className="lg:col-span-5">
            <div className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#EDBB00]/40 space-y-6 sticky top-24 shadow-2xl">
              <h3 className="text-lg font-black text-white uppercase tracking-tight border-b border-white/10 pb-3">
                Order Summary ({totalItems} Items)
              </h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs text-gray-200">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-[#EDBB00] font-bold">{item.quantity}x</span>
                      <div>
                        <p className="font-bold uppercase line-clamp-1">{item.product.name}</p>
                        <p className="text-[10px] text-gray-400 font-mono">Size: {item.selectedSize}</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300 font-medium">
                <div className="flex justify-between">
                  <span>Merchandise Subtotal</span>
                  <span className="font-mono text-white">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Charge</span>
                  <span className="font-mono text-[#EDBB00]">
                    {shippingCost === 0 ? 'FREE (Screening Pickup)' : '₹99'}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-white/10 text-base font-black text-white">
                  <span>Total Payable</span>
                  <span className="font-mono text-[#EDBB00] text-xl">₹{grandTotal}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-2xl flex items-center justify-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>Place Order • ₹{grandTotal}</span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                <span>256-bit Encrypted Checkout Demo</span>
              </div>
            </div>
          </div>

        </form>
      ) : (
        /* Order Placed Confirmation Screen */
        <div className="glass-panel-gold rounded-3xl p-10 max-w-xl mx-auto text-center space-y-6 shadow-2xl animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-[#EDBB00]/20 border border-[#EDBB00] text-[#EDBB00] flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#EDBB00] uppercase tracking-widest block">
              ORDER CONFIRMED • ID: {orderId}
            </span>
            <h2 className="text-3xl font-black text-white uppercase">
              Order Request Received
            </h2>
            <p className="text-sm text-gray-200">
              Visca el Barça! Thank you, <strong className="text-[#EDBB00]">{formData.name}</strong>. We have received your merchandise order request and will contact you with the next steps for delivery or local screening pickup.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-left text-gray-300 font-mono space-y-1.5">
            <p>• <strong>Order ID:</strong> {orderId}</p>
            <p>• <strong>Amount Paid:</strong> ₹{grandTotal}</p>
            <p>• <strong>Delivery Mode:</strong> {formData.deliveryMethod === 'pickup' ? 'Screening Pickup' : 'Home Delivery'}</p>
            <p>• <strong>Contact Phone:</strong> {formData.phone}</p>
            <p>• <strong>Address:</strong> {formData.address}, {formData.city}</p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EDBB00] to-[#B8860B] text-[#060e1a] font-extrabold text-xs uppercase tracking-wider hover:brightness-110"
          >
            Return to Homepage
          </button>
        </div>
      )}

    </div>
  );
};
