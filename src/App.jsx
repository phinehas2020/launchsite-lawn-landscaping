import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  Flower2,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Shield,
  Sprout,
  Star,
  Trees,
  Wrench,
  X,
} from 'lucide-react';
import './App.css';

const site = {
  name: 'Evergrove Lawn + Landscape',
  shortName: 'Evergrove',
  phone: '(817) 555-0142',
  phoneHref: '+18175550142',
  email: 'hello@evergrovelandscape.com',
  address: '4201 Greenfield Way, Fort Worth, TX 76107',
  mapLink: 'https://maps.google.com/?q=4201+Greenfield+Way+Fort+Worth+TX+76107',
  serviceArea: 'Fort Worth, Southlake, Arlington, and Aledo',
};

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Recent Work', href: '#work' },
  { label: 'How We Work', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const trustItems = [
  { label: 'Local crews only', value: 'No subcontractors' },
  { label: 'Response time', value: 'Within 1 business day' },
  { label: 'Average client tenure', value: '3.8 years' },
];

const serviceBlocks = [
  {
    icon: Sprout,
    title: 'Lawn Care',
    intro:
      'Weekly mowing, edge work, seasonal feed, and cleanups delivered by the same neighborhood crew each visit.',
    bullets: [
      'Weekly and bi-weekly routes',
      'Blade-height tuning by season',
      'Digital visit notes and photos',
    ],
  },
  {
    icon: Flower2,
    title: 'Landscape Install',
    intro:
      'Planting plans, bed reshaping, and hardscape accents built to match your architecture and water conditions.',
    bullets: ['Plant sourcing included', 'Drainage-first planning', 'Clean install and haul-off'],
  },
  {
    icon: Wrench,
    title: 'Irrigation + Repair',
    intro:
      'Controller upgrades, valve repairs, leak diagnosis, and smart scheduling to protect turf without waste.',
    bullets: ['Controller optimization', 'Zone balancing', 'Water bill reduction checks'],
  },
];

const featuredWork = [
  {
    title: 'Courtyard Refresh',
    area: 'Westover Hills',
    note: 'Low-water plant palette + limestone edging',
    image:
      'https://images.unsplash.com/photo-1623050780546-67f6f7f7c8d2?auto=format&fit=crop&w=1500&q=80',
  },
  {
    title: 'Poolside Makeover',
    area: 'Southlake',
    note: 'Lighting, ornamental grasses, and privacy planting',
    image:
      'https://images.unsplash.com/photo-1617104551722-3b2d513664d0?auto=format&fit=crop&w=1500&q=80',
  },
  {
    title: 'Front Curb Upgrade',
    area: 'Arlington',
    note: 'Native shrubs + fresh bed geometry',
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1500&q=80',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Walkthrough',
    description:
      'We visit the property, discuss pain points, and note sun, drainage, and maintenance expectations.',
  },
  {
    step: '02',
    title: 'Written plan',
    description:
      'You receive a plain-language estimate with options, timeline, and material notes. No vague line items.',
  },
  {
    step: '03',
    title: 'Build + maintain',
    description:
      'Work is scheduled, completed, then protected with a recurring maintenance cadence if you want continuity.',
  },
];

const pricing = [
  {
    name: 'Routine Care',
    price: '$280/mo',
    description: 'For homes that want weekly polish and reliable communication.',
    features: ['Weekly mowing + edging', 'Seasonal treatment plan', 'Monthly quality walkthrough'],
  },
  {
    name: 'Property Stewardship',
    price: '$540/mo',
    description: 'Priority scheduling and deeper horticultural management.',
    features: [
      'Everything in Routine Care',
      'Priority weather-response visits',
      'Quarterly enhancement installs',
      'Dedicated service lead',
    ],
    featured: true,
  },
  {
    name: 'One-Time Project',
    price: '$1,500+',
    description: 'Focused redesigns for a front yard, backyard zone, or bed reset.',
    features: ['Site planning session', 'Material and plant sourcing', 'Install with full cleanup'],
  },
];

const reviews = [
  {
    name: 'Andrea M.',
    area: 'Tanglewood',
    quote:
      'They fixed a drainage issue two other companies missed. The yard finally looks intentional, not patched together.',
  },
  {
    name: 'Derrick L.',
    area: 'Aledo',
    quote:
      'Our service is consistent every single week. The communication is clear and the quality is genuinely high.',
  },
];

const faqs = [
  {
    question: 'Do you require long-term contracts?',
    answer:
      'No. Most clients stay because the work is consistent, but we keep terms straightforward and month-to-month.',
  },
  {
    question: 'Can you work in phases if budget is limited?',
    answer:
      'Yes. We can prioritize high-impact areas first, then phase the rest as time and budget allow.',
  },
  {
    question: 'Do you handle HOA constraints?',
    answer:
      'We do. We account for common HOA restrictions while still keeping the design clean and distinctive.',
  },
];

function SectionTitle({ eyebrow, title, body }) {
  return (
    <header className="section-title-block">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </header>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    const onResize = () => {
      if (window.innerWidth >= 960) {
        setMobileMenuOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const year = new Date().getFullYear();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label={`${site.name} home`}>
            <span className="brand-mark" aria-hidden="true">
              <Leaf size={16} />
            </span>
            <span className="brand-word">{site.shortName}</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button button--outline desktop-cta">
            Request estimate
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav--open' : ''}`}>
          <nav className="container mobile-nav-list" aria-label="Mobile primary">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="button button--solid"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start consultation <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Residential lawn and landscape specialists</p>
              <h1>
                Clean lines.
                <br />
                Healthy turf.
                <br />
                Better curb appeal.
              </h1>
              <p className="hero-text">
                We help homeowners keep their outdoor spaces sharp year-round. No overpromises,
                no mystery invoices, and no rotating crews that forget your property.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button button--solid">
                  Book a walkthrough <ArrowRight size={16} />
                </a>
                <a href="#work" className="button button--outline">
                  View recent work
                </a>
              </div>

              <ul className="hero-checks">
                <li>
                  <Shield size={16} aria-hidden="true" />
                  Licensed and insured
                </li>
                <li>
                  <Trees size={16} aria-hidden="true" />
                  Horticulture-trained team leads
                </li>
              </ul>
            </div>

            <figure className="hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80"
                alt="Well-maintained residential lawn with structured planting beds"
                width="1600"
                height="1200"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>
                <strong>Fort Worth route crew</strong>
                <span>Weekly service logs and photo updates included</span>
              </figcaption>
            </figure>
          </div>

          <div className="container trust-grid" aria-label="Trust markers">
            {trustItems.map((item) => (
              <article key={item.label} className="trust-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section section--alt">
          <div className="container">
            <SectionTitle
              eyebrow="Services"
              title="A practical service mix that keeps your property looking intentional"
              body="We focus on fundamentals done well, then layer in enhancements where they actually add value."
            />

            <div className="service-grid">
              {serviceBlocks.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className="service-card">
                    <span className="service-icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.intro}</p>
                    <ul>
                      {service.bullets.map((item) => (
                        <li key={item}>
                          <Check size={14} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Recent work"
              title="Three recent projects with very different goals"
              body="The right landscape depends on how you use the property, not on repeating the same template every time."
            />

            <div className="work-grid">
              {featuredWork.map((project, index) => (
                <article
                  key={project.title}
                  className={`work-card ${index === 0 ? 'work-card--wide' : ''}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} landscaping project in ${project.area}`}
                    width="1500"
                    height="1100"
                    loading="lazy"
                  />
                  <div className="work-overlay" />
                  <div className="work-content">
                    <p>{project.note}</p>
                    <h3>{project.title}</h3>
                    <span>
                      <MapPin size={14} aria-hidden="true" />
                      {project.area}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section--alt">
          <div className="container">
            <SectionTitle
              eyebrow="How we work"
              title="A straightforward process so you always know what comes next"
            />

            <div className="process-grid">
              {processSteps.map((item) => (
                <article key={item.step} className="process-card">
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Pricing"
              title="Service plans sized for routine care or deeper stewardship"
            />

            <div className="pricing-grid">
              {pricing.map((plan) => (
                <article
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
                >
                  {plan.featured ? <span className="badge">Most chosen</span> : null}
                  <h3>{plan.name}</h3>
                  <strong>{plan.price}</strong>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={14} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container review-layout">
            <div>
              <SectionTitle
                eyebrow="Client feedback"
                title="What homeowners say after the first few months"
              />
              <div className="rating-inline">
                <div className="stars" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
                <span>4.9 average from long-term clients</span>
              </div>
            </div>

            <div className="review-list">
              {reviews.map((review) => (
                <article key={review.name} className="review-card">
                  <p>“{review.quote}”</p>
                  <footer>
                    <strong>{review.name}</strong>
                    <span>{review.area}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container faq-layout">
            <SectionTitle
              eyebrow="FAQ"
              title="Common questions before we start"
              body="If your property has unusual grading, runoff, or shade constraints, we can evaluate that during the walkthrough."
            />

            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Tell us about your property and what you want to improve.</h2>
              <p>
                We’ll schedule a walkthrough, then send a clear estimate with timing and scope.
              </p>
              <a href={`tel:${site.phoneHref}`} className="button button--light">
                Call {site.phone}
              </a>
            </div>

            <div className="contact-links">
              <a href={`tel:${site.phoneHref}`}>
                <Phone size={16} aria-hidden="true" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.mapLink} target="_blank" rel="noreferrer">
                <MapPin size={16} aria-hidden="true" />
                {site.address}
              </a>
              <p>{site.serviceArea}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a href="#top" className="brand" aria-label={`${site.name} home`}>
              <span className="brand-mark" aria-hidden="true">
                <Leaf size={16} />
              </span>
              <span className="brand-word">{site.shortName}</span>
            </a>
            <p>
              Thoughtful lawn maintenance and landscape work for homeowners who want clean,
              reliable results.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="container footer-meta">
          <span>
            © {year} {site.name}
          </span>
          <span>Built to load fast and stay maintainable.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
