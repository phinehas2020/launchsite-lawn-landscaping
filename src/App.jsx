import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Using existing dependency
import {
  Car,
  Sparkles,
  ShieldCheck,
  Droplets,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Star,
  Menu,
  X,
  Calendar
} from 'lucide-react';
import './App.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo-group" aria-label="Sunrise Detailing Home">
          <div className="logo-icon">
            <Sparkles size={28} strokeWidth={2.5} />
          </div>
          <span className="logo-text">Sunrise<span style={{ color: 'var(--color-accent)' }}>.</span></span>
        </a>

        <div className="nav-links desktop">
          {navLinks.map(link => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
          <button className="btn-primary">Book Now</button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              padding: '2rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'center',
              zIndex: 49
            }}
          >
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600 }}>{link.name}</a>
            ))}
            <button className="btn-primary" style={{ width: '100%' }}>Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero-text"
        >
          <div className="hero-badge">
            <Star size={14} fill="currentColor" />
            <span>Waco's Premier Auto Care</span>
          </div>
          <h1>Reviving the <br /><span style={{ color: 'var(--color-accent)' }}>Soul</span> of Your Machine.</h1>
          <p>Experience detailing elevated to an art form. From classic restorations to daily driver protection, we bring showroom brilliance to your driveway.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">View Packages <ChevronRight size={18} /></button>
            <button className="btn-secondary">Our Work</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
        >
          <img
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1600"
            alt="Vintage Car Detailing"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Paint Correction",
      desc: "Eliminating swirls, scratches, and oxidation to reveal pure reflection.",
      icon: <Car size={32} />
    },
    {
      title: "Interior Deep Clean",
      desc: "Leather conditioning, steam cleaning, and meticulous extraction.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Ceramic Coating",
      desc: "Long-term hydrophobic protection that locks in the shine for years.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>Our Expertise</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Meticulous Attention to Detail</h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="service-card"
            >
              <div className="icon-box">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                Learn More <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  return (
    <section id="packages" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2>Curated Packages</h2>
          <p>Simple pricing. No hidden fees. Just exceptional results.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="package-card">
            <h3>The Daily Driver</h3>
            <div className="price">$150</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Perfect for regular maintenance.</p>
            <ul className="feature-list">
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Exterior Hand Wash</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Wheel & Tire Detail</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Interior Vacuum</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Windows & Mirrors</li>
            </ul>
            <button className="btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Select This Plan</button>
          </div>

          <div className="package-card highlight">
            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--color-accent)', color: 'white', padding: '0.25rem 1rem', borderBottomLeftRadius: '10px', fontSize: '0.8rem', fontWeight: 600 }}>
              MOST POPULAR
            </div>
            <h3>The enthusiast</h3>
            <div className="price">$295</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>The deep clean your car deserves.</p>
            <ul className="feature-list">
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> All Daily Driver Features</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Clay Bar Treatment</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> 6-Month Sealant</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Leather Conditioning</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Steam Clean Carpets</li>
            </ul>
            <button className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Select This Plan</button>
          </div>

          <div className="package-card">
            <h3>The Showroom</h3>
            <div className="price">$550+</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Complete restoration & protection.</p>
            <ul className="feature-list">
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> All Enthusiast Features</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> 1-Step Paint Correction</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Ceramic Coating (1 Year)</li>
              <li><Star size={16} fill="var(--color-accent)" stroke="none" /> Engine Bay Detail</li>
            </ul>
            <button className="btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>Select This Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Born in Waco. Raised on Vinyl & Gasoline.</h2>
            <p>
              Sunrise Detailing isn't just a business; it's a tribute to the golden age of motoring.
              We believe that every car has a story, and our job is to make sure it shines.
              Using traditional techniques combined with modern technology, we treat your vehicle with the respect it deserves.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '2rem', marginBottom: '0' }}>5+</h4>
                <span style={{ fontSize: '0.9rem' }}>Years Experience</span>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', marginBottom: '0' }}>1k+</h4>
                <span style={{ fontSize: '0.9rem' }}>Cars Detailed</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
              alt="Detailing Process"
              className="hero-image"
              style={{ transform: 'rotate(-2deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="banner">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 10 }}>
            <h2>Ready for that New Car Feeling?</h2>
            <p>Schedule your appointment today. Spaces fill up fast.</p>
            <button className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>Book Appointment</button>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.9 }}>
                <Phone size={20} /> (254) 555-0199
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.9 }}>
                <MapPin size={20} /> 402 Austin Ave, Waco, TX
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-group" style={{ marginBottom: '1rem' }}>
            <Sparkles size={24} color="var(--color-accent)" />
            <span style={{ color: 'white' }}>Sunrise.</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Premium auto detailing services in the heart of Texas.
            Quality work, honest pricing, and a passion for perfection.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Visit Us</h4>
          <p style={{ display: 'flex', gap: '0.5rem' }}><MapPin size={16} /> Waco, Texas</p>
          <p style={{ display: 'flex', gap: '0.5rem' }}><Phone size={16} /> (254) 555-0199</p>
          <p style={{ display: 'flex', gap: '0.5rem' }}><Mail size={16} /> shine@sunrisedetailing.com</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sunrise Detailing. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
