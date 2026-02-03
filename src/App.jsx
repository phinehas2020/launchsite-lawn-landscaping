import { useState, useEffect, useRef } from 'react';
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

const site = {
  name: 'Sunshine Detailing',
  shortName: 'Sunshine',
  phone: '(254) 900-4049',
  phoneHref: '+12549004049',
  address: '2417 N Katy Rd, Elm Mott, TX',
  mapLink: 'https://maps.google.com/?q=2417+N+Katy+Rd+Elm+Mott+TX+76640',
  email: 'danielphillips1206@icloud.com',
  city: 'Elm Mott',
  state: 'Texas',
  years: '5+',
  cars: '1k+'
};

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Packages', href: '#packages' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#reviews' }
];

const heroHighlights = [
  {
    title: '5.0 Rating',
    desc: '120+ verified reviews'
  },
  {
    title: 'Insured & Certified',
    desc: 'Paint-safe, studio-grade tools'
  },
  {
    title: 'Mobile Concierge',
    desc: 'We bring water, power, and shade'
  }
];

const services = [
  {
    title: 'Paint Correction',
    desc: 'Eliminating swirls, scratches, and oxidation to reveal pure reflection.',
    icon: <Car size={28} aria-hidden="true" />
  },
  {
    title: 'Interior Deep Clean',
    desc: 'Leather conditioning, steam cleaning, and meticulous extraction.',
    icon: <Sparkles size={28} aria-hidden="true" />
  },
  {
    title: 'Ceramic Coating',
    desc: 'Long-term hydrophobic protection that locks in the shine for years.',
    icon: <ShieldCheck size={28} aria-hidden="true" />
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Inspect & Protect',
    desc: 'We assess paint depth, trim, and interior materials before starting.'
  },
  {
    step: '02',
    title: 'Restore & Refine',
    desc: 'Multi-stage decontamination removes embedded grit and micro-marring.'
  },
  {
    step: '03',
    title: 'Seal & Deliver',
    desc: 'We lock in the finish with durable protection and meticulous finishing touches.'
  }
];

const packages = [
  {
    name: 'The Daily Driver',
    price: '$150',
    description: 'Perfect for regular maintenance.',
    features: [
      'Exterior Hand Wash',
      'Wheel & Tire Detail',
      'Interior Vacuum',
      'Windows & Mirrors'
    ],
    highlighted: false
  },
  {
    name: 'The Enthusiast',
    price: '$295',
    description: 'The deep clean your car deserves.',
    features: [
      'All Daily Driver Features',
      'Clay Bar Treatment',
      '6-Month Sealant',
      'Leather Conditioning',
      'Steam Clean Carpets'
    ],
    highlighted: true
  },
  {
    name: 'The Showroom',
    price: '$550+',
    description: 'Complete restoration & protection.',
    features: [
      'All Enthusiast Features',
      '1-Step Paint Correction',
      'Ceramic Coating (1 Year)',
      'Engine Bay Detail'
    ],
    highlighted: false
  }
];

const values = [
  'Concierge scheduling with text updates',
  'Museum-safe products and tools',
  'Respectful of your time, property, and driveway'
];

const testimonials = [
  {
    name: 'Alyssa P.',
    vehicle: '2021 Range Rover',
    quote: 'They treated my car like a collector piece. The finish looks liquid and the interior smells brand new.'
  },
  {
    name: 'Miguel R.',
    vehicle: '2018 Tacoma',
    quote: 'Professional, on-time, and the ceramic coat survived the whole summer. Worth every dollar.'
  },
  {
    name: 'Jordan C.',
    vehicle: '1969 Camaro',
    quote: 'The before-and-after was unreal. They brought back depth I thought was gone forever.'
  }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="container nav-content">
        <a href="#" className="logo-group" aria-label={`${site.name} Home`}>
          <div className="logo-icon">
            <Sparkles size={24} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span className="logo-text">
            {site.shortName}
            <span className="accent-dot">.</span>
          </span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">Book Now</a>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu" role="menu" id="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} role="menuitem">
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
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-kicker reveal" style={{ '--delay': '0.05s' }}>
            <Star size={14} fill="currentColor" aria-hidden="true" />
            <span>{site.city}'s Boutique Auto Care</span>
          </div>
          <h1 className="reveal" style={{ '--delay': '0.12s' }}>
            Crafted shine, <br />
            delivered to your driveway.
          </h1>
          <p className="reveal" style={{ '--delay': '0.2s' }}>
            Concierge detailing that restores depth, clarity, and protection. We blend old-school
            technique with modern coatings for a finish that feels brand new.
          </p>
          <div className="hero-actions reveal" style={{ '--delay': '0.28s' }}>
            <a href="#packages" className="btn btn-primary">
              View Packages <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#before-after" className="btn btn-secondary">
              See Transformations
            </a>
          </div>
          <div className="hero-highlights">
            {heroHighlights.map((item, index) => (
              <div
                key={item.title}
                className="highlight-card reveal"
                style={{ '--delay': `${0.36 + index * 0.08}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-media reveal" style={{ '--delay': '0.24s' }}>
          <div className="hero-frame">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury car with a high-gloss finish after detailing"
              className="hero-image"
              width="1000"
              height="750"
              loading="eager"
            />
            <div className="hero-caption">
              <div>
                <span className="caption-label">Trusted Since</span>
                <strong>2018</strong>
              </div>
              <div>
                <span className="caption-label">Detailing</span>
                <strong>{site.city}, {site.state}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="services section tone-muted">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Our Expertise</p>
          <h2 className="section-title">Meticulous attention to every panel</h2>
          <p className="section-intro">
            Whether it is a weekend classic or your daily driver, our method is designed to protect
            your investment and elevate every surface.
          </p>
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="icon-box">{s.icon}</div>
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

const Process = () => {
  return (
    <section id="process" className="section process">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Our Method</p>
          <h2 className="section-title">A studio-grade process in three acts</h2>
        </header>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.step} className="process-card">
              <div className="process-index">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
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
    <section id="before-after" className="section before-after">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">The Transformation</p>
          <h2 className="section-title">See the difference a true detail makes</h2>
          <p className="section-intro">
            Drag the slider to reveal the magic of professional detailing.
          </p>
        </header>

        <div className="before-after-shell">
          <div
            ref={containerRef}
            className="before-after-container"
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
          >
            <img
              src="/after-interior.png"
              alt="After professional detailing"
              className="before-after-image"
            />

            <div className="before-layer" style={{ width: `${sliderPosition}%` }}>
              <img
                src="/before-interior.png"
                alt="Before detailing - dirty interior"
                className="before-after-image"
                style={{
                  width: containerRef.current ? containerRef.current.offsetWidth : '100%'
                }}
              />
            </div>

            <div className="slider" style={{ left: `${sliderPosition}%` }}>
              <div className="slider-handle">
                <ChevronRight size={16} style={{ transform: 'rotate(180deg)', color: 'var(--color-primary)' }} />
                <ChevronRight size={16} style={{ color: 'var(--color-primary)' }} />
              </div>
            </div>

            <div className="before-after-label before">Before</div>
            <div className="before-after-label after">After</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  return (
    <section id="packages" className="section packages tone-muted">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Packages</p>
          <h2 className="section-title">Curated packages for every vehicle</h2>
          <p className="section-intro">Simple pricing. No hidden fees. Just exceptional results.</p>
        </header>

        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <article key={i} className={`package-card ${pkg.highlighted ? 'highlight' : ''}`}>
              {pkg.highlighted && <div className="package-badge">Most Popular</div>}
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
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p className="section-eyebrow">Our Story</p>
            <h2>Born in Texas. Raised on vinyl & gasoline.</h2>
            <p>
              {site.shortName} isn&apos;t just a business; it&apos;s a tribute to the golden age of motoring.
              We believe that every car has a story, and our job is to make sure it shines. Using
              traditional techniques combined with modern technology, we treat your vehicle with the
              respect it deserves.
            </p>
            <ul className="value-list">
              {values.map((value) => (
                <li key={value}>
                  <Check size={18} aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
            <div className="stats-grid">
              <div className="stat-item">
                <h4>{site.years}</h4>
                <span>Years Experience</span>
              </div>
              <div className="stat-item">
                <h4>{site.cars}</h4>
                <span>Cars Detailed</span>
              </div>
            </div>
          </div>
          <div className="hero-frame about-frame">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000"
              alt="Professional car detailing in progress"
              className="about-image"
              width="900"
              height="700"
              loading="lazy"
            />
            <div className="hero-caption">
              <div>
                <span className="caption-label">Studio</span>
                <strong>Mobile + Shop</strong>
              </div>
              <div>
                <span className="caption-label">Service Area</span>
                <strong>Central Texas</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="section testimonials tone-muted">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Client Reviews</p>
          <h2 className="section-title">The kind words that keep us polishing</h2>
        </header>

        <div className="testimonials-grid">
          {testimonials.map((review) => (
            <article key={review.name} className="testimonial-card">
              <div className="testimonial-stars" aria-label="Five star rating">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="testimonial-body">"{review.quote}"</p>
              <div className="testimonial-meta">
                <span>{review.name}</span>
                <span>{review.vehicle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="banner">
          <h2>Ready for that new-car feeling?</h2>
          <p>Schedule your appointment today. Spaces fill up fast.</p>
          <a href={`tel:${site.phoneHref}`} className="btn">Book Appointment</a>

          <div className="contact-info">
            <a href={`tel:${site.phoneHref}`} className="contact-item">
              <Phone size={18} aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MapPin size={18} aria-hidden="true" />
              {site.address}
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
            <span className="logo-text" style={{ color: 'white' }}>{site.shortName}.</span>
          </div>
          <p>
            Premium auto detailing services in the heart of Texas.
            Quality work, honest pricing, and a passion for perfection.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h4>Navigation</h4>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-contact">
          <h4>Visit Us</h4>
          <p><MapPin size={16} aria-hidden="true" /> {site.city}, {site.state}</p>
          <p><Phone size={16} aria-hidden="true" /> {site.phone}</p>
          <p><Mail size={16} aria-hidden="true" /> {site.email}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {currentYear} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <BeforeAfter />
        <Packages />
        <AboutSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
