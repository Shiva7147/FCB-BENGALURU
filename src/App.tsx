import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AdminProvider } from './context/AdminContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

import { Home } from './routes/Home';
import { About } from './routes/About';
import { Join } from './routes/Join';
import { Screenings } from './routes/Screenings';
import { MatchDay } from './routes/MatchDay';
import { Gallery } from './routes/Gallery';
import { Announcements } from './routes/Announcements';
import { Chants } from './routes/Chants';
import { CoreMembers } from './routes/CoreMembers';
import { Shop } from './routes/Shop';
import { CartPage } from './routes/CartPage';
import { CheckoutPage } from './routes/CheckoutPage';
import { Contact } from './routes/Contact';
import { AdminPanel } from './routes/AdminPanel';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <Router>
      <AdminProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#060e1a] text-gray-100 selection:bg-[#EDBB00] selection:text-[#060e1a]">
            <Navbar />
            <CartDrawer />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/join" element={<Join />} />
                <Route path="/screenings" element={<Screenings />} />
                <Route path="/match-day" element={<MatchDay />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/chants" element={<Chants />} />
                <Route path="/core-members" element={<CoreMembers />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AdminProvider>
    </Router>
  );
}

export default App;
