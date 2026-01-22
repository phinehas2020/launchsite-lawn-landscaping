import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car,
  Sparkles,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Menu,
  X,
  Check
} from 'lucide-react';
import './App.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#" className="logo-group" aria-label="Sunshine Detailing Home">
          <div className="logo-icon">
            <Sparkles size={24} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span>Sunshine<span style={{ color: 'var(--color-accent)' }}>.</span></span>
        </a>

        <div className="nav-links">
          {navLinks.map(link => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
          <a href="#contact" className="btn btn-primary">Book Now</a>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="mobile-menu"
            role="menu"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: 'var(--space-2)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
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
        <div className="hero-text">
          <div className="hero-badge">
            <Star size={14} fill="currentColor" aria-hidden="true" />
            <span>Elm Mott's Premier Auto Care</span>
          </div>
          <h1>
            Reviving the <br />
            <span>Soul</span> of Your Machine.
          </h1>
          <p>
            Experience detailing elevated to an art form. From classic restorations
            to daily driver protection, we bring showroom brilliance to your driveway.
          </p>
          <div className="hero-buttons">
            <a href="#packages" className="btn btn-primary">
              View Packages <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#about" className="btn btn-secondary">Our Work</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800"
            alt="Vintage car being detailed with professional care"
            className="hero-image"
            width="800"
            height="600"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Paint Correction",
      desc: "Eliminating swirls, scratches, and oxidation to reveal pure reflection.",
      icon: <Car size={28} aria-hidden="true" />
    },
    {
      title: "Interior Deep Clean",
      desc: "Leather conditioning, steam cleaning, and meticulous extraction.",
      icon: <Sparkles size={28} aria-hidden="true" />
    },
    {
      title: "Ceramic Coating",
      desc: "Long-term hydrophobic protection that locks in the shine for years.",
      icon: <ShieldCheck size={28} aria-hidden="true" />
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Our Expertise</p>
          <h2 className="section-title">Meticulous Attention to Detail</h2>
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="icon-box">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="service-card-link">
                Learn More <ChevronRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">The Transformation</p>
          <h2 className="section-title">See the Difference</h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Drag the slider to reveal the magic of professional detailing.
          </p>
        </header>

        <div
          ref={containerRef}
          className="before-after-container"
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto',
            aspectRatio: '1 / 1',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            cursor: 'ew-resize',
            boxShadow: 'var(--shadow-lg)',
            touchAction: 'pan-y'
          }}
        >
          {/* After image (background) */}
          <img
            src="/after-interior.png"
            alt="After professional detailing"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Before image (clipped) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${sliderPosition}%`,
            height: '100%',
            overflow: 'hidden'
          }}>
            <img
              src="/before-interior.png"
              alt="Before detailing - dirty interior"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: containerRef.current ? containerRef.current.offsetWidth : '100%',
                height: '100%',
                objectFit: 'cover',
                maxWidth: 'none'
              }}
            />
          </div>

          {/* Slider handle */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            zIndex: 10
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'white',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px'
            }}>
              <ChevronRight size={16} style={{ transform: 'rotate(180deg)', color: 'var(--color-primary)' }} />
              <ChevronRight size={16} style={{ color: 'var(--color-primary)' }} />
            </div>
          </div>

          {/* Labels */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--space-4)',
            left: 'var(--space-4)',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: 600
          }}>
            Before
          </div>
          <div style={{
            position: 'absolute',
            bottom: 'var(--space-4)',
            right: 'var(--space-4)',
            background: 'var(--color-accent)',
            color: 'white',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: 600
          }}>
            After
          </div>
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const packages = [
    {
      name: "The Daily Driver",
      price: "$150",
      description: "Perfect for regular maintenance.",
      features: [
        "Exterior Hand Wash",
        "Wheel & Tire Detail",
        "Interior Vacuum",
        "Windows & Mirrors"
      ],
      highlighted: false
    },
    {
      name: "The Enthusiast",
      price: "$295",
      description: "The deep clean your car deserves.",
      features: [
        "All Daily Driver Features",
        "Clay Bar Treatment",
        "6-Month Sealant",
        "Leather Conditioning",
        "Steam Clean Carpets"
      ],
      highlighted: true
    },
    {
      name: "The Showroom",
      price: "$550+",
      description: "Complete restoration & protection.",
      features: [
        "All Enthusiast Features",
        "1-Step Paint Correction",
        "Ceramic Coating (1 Year)",
        "Engine Bay Detail"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Curated Packages</h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
            Simple pricing. No hidden fees. Just exceptional results.
          </p>
        </header>

        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <article
              key={i}
              className={`package-card ${pkg.highlighted ? 'highlight' : ''}`}
            >
              {pkg.highlighted && (
                <div className="package-badge">Most Popular</div>
              )}
              <h3>{pkg.name}</h3>
              <div className="price">{pkg.price}</div>
              <p className="package-description">{pkg.description}</p>
              <ul className="feature-list">
                {pkg.features.map((feature, j) => (
                  <li key={j}>
                    <Check size={18} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${pkg.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%' }}
              >
                Select This Plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Born in Texas. Raised on Vinyl & Gasoline.</h2>
            <p>
              Sunshine Detailing isn't just a business; it's a tribute to the golden age of motoring.
              We believe that every car has a story, and our job is to make sure it shines.
              Using traditional techniques combined with modern technology, we treat your vehicle
              with the respect it deserves.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h4>5+</h4>
                <span>Years Experience</span>
              </div>
              <div className="stat-item">
                <h4>1k+</h4>
                <span>Cars Detailed</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
              alt="Professional car detailing in progress"
              className="about-image"
              width="800"
              height="600"
              loading="lazy"
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
          <h2>Ready for that New Car Feeling?</h2>
          <p>Schedule your appointment today. Spaces fill up fast.</p>
          <a href="tel:+12549004049" className="btn">Book Appointment</a>

          <div className="contact-info">
            <a href="tel:+12549004049" className="contact-item">
              <Phone size={18} aria-hidden="true" />
              (254) 900-4049
            </a>
            <a
              href="https://maps.google.com/?q=2417+N+Katy+Rd+Elm+Mott+TX+76640"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MapPin size={18} aria-hidden="true" />
              2417 N Katy Rd, Elm Mott, TX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-group">
            <Sparkles size={20} color="var(--color-accent)" aria-hidden="true" />
            <span style={{ color: 'white' }}>Sunshine.</span>
          </div>
          <p>
            Premium auto detailing services in the heart of Texas.
            Quality work, honest pricing, and a passion for perfection.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h4>Navigation</h4>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-contact">
          <h4>Visit Us</h4>
          <p><MapPin size={16} aria-hidden="true" /> Elm Mott, Texas</p>
          <p><Phone size={16} aria-hidden="true" /> (254) 900-4049</p>
          <p><Mail size={16} aria-hidden="true" /> danielphillips1206@icloud.com</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {currentYear} Sunshine Detailing. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Packages />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
