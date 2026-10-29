import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout & UI
import Loader from './components/Loader/Loader';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import SmoothScroll from './components/layout/SmoothScroll';
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <SmoothScroll />
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </BrowserRouter>
    </>
  );
}

export default App;
