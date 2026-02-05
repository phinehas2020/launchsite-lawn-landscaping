import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Clock3,
  Droplets,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  TreePine,
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
  serviceArea: 'Fort Worth • Southlake • Arlington • Aledo',
};

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Plans', href: '#plans' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const metrics = [
  { value: '1,250+', label: 'Properties Elevated' },
  { value: '14 Years', label: 'Local Craft Experience' },
  { value: '4.9/5', label: 'Average Client Rating' },
  { value: '24h', label: 'Estimate Turnaround' },
];

const services = [
  {
    icon: Sprout,
    title: 'Estate Lawn Stewardship',
    description:
      'Precision mowing, edge geometry, fertilization, and weekly horticulture checks that keep curb appeal effortless.',
    highlights: [
      'Weekly or bi-weekly visits',
      'Seasonal turf tuning',
      'Photo updates after every service',
    ],
  },
  {
    icon: TreePine,
    title: 'Landscape Design + Build',
    description:
      'From concept sketches to installation day, we shape memorable outdoor spaces with layered planting and stonework.',
    highlights: [
      '3D concept previews',
      'Native + drought-wise palettes',
      'Hardscape, lighting, and grading',
    ],
  },
  {
    icon: Droplets,
    title: 'Irrigation Intelligence',
    description:
      'Smart-zone irrigation setup and optimization that keeps your property lush while reducing wasted water.',
    highlights: [
      'Controller diagnostics',
      'Seasonal run-time calibration',
      'Leak and pressure correction',
    ],
  },
];

const projects = [
  {
    name: 'Modern Prairie Estate',
    location: 'Westover Hills',
    category: 'Full Design + Build',
    image:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Poolside Botanical Retreat',
    location: 'Southlake',
    category: 'Planting + Lighting',
    image:
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Front Yard Statement Garden',
    location: 'Arlington',
    category: 'Curb Appeal Refresh',
    image:
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?auto=format&fit=crop&w=1400&q=80',
  },
];

const process = [
  {
    step: '01',
    title: 'On-site Vision Session',
    description:
      'We walk your property, map sunlight, drainage, and usage zones, then align the design to your lifestyle.',
  },
  {
    step: '02',
    title: 'Design + Material Strategy',
    description:
      'You receive a detailed plan with plant species, material palette, and phased investment options.',
  },
  {
    step: '03',
    title: 'Crafted Installation',
    description:
      'Our crew executes with surgical detail, then performs final refinement and handoff walkthrough.',
  },
  {
    step: '04',
    title: 'Ongoing Care',
    description:
      'We maintain the system so your landscape matures beautifully in every season.',
  },
];

const plans = [
  {
    name: 'Signature Care',
    price: '$320/mo',
    summary: 'For homes that want pristine consistency.',
    features: ['Weekly service visits', 'Seasonal color rotation', 'Irrigation monitoring'],
  },
  {
    name: 'Estate Concierge',
    price: '$590/mo',
    summary: 'Our highest-touch maintenance experience.',
    features: [
      'Everything in Signature',
      'Priority storm-response',
      'Monthly enhancement crew',
      'Dedicated account lead',
    ],
    featured: true,
  },
  {
    name: 'Design Sprint',
    price: '$1,800+',
    summary: 'Transform one key zone in 2-3 weeks.',
    features: ['Rapid design workshop', 'Install-ready plan set', 'Material sourcing and build crew'],
  },
];

const testimonials = [
  {
    name: 'Lauren W.',
    area: 'Tanglewood',
    quote:
      'Our yard looks like a boutique resort now. The team is punctual, sharp, and obsessed with detail in the best way.',
  },
  {
    name: 'Marcus P.',
    area: 'Aledo',
    quote:
      'They redesigned our slope and solved drainage issues that had plagued us for years. The result is unreal.',
  },
  {
    name: 'Sonia R.',
    area: 'Southlake',
    quote:
      'Neighbors literally stop and ask who did our landscaping. Every month it looks more intentional and beautiful.',
  },
];

const faqs = [
  {
    question: 'How quickly can we start?',
    answer:
      'Most design or maintenance projects begin within 7-14 days after approval. For full builds, we reserve a dedicated production window.',
  },
  {
    question: 'Do you work with HOA and city requirements?',
    answer:
      'Yes. We account for neighborhood guidelines, visibility restrictions, and local irrigation ordinances during planning.',
  },
  {
    question: 'Can we phase larger outdoor transformations?',
    answer:
      'Absolutely. We frequently stage projects by zone so the work aligns with your budget and seasonal timing.',
  },
];

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const MotionArticle = motion.article;
const MotionDiv = motion.div;
const MotionFigure = motion.figure;
const MotionH1 = motion.h1;
const MotionHeader = motion.header;
const MotionP = motion.p;
const MotionUl = motion.ul;

function SectionHeading({ eyebrow, title, body, align = 'left' }) {
  return (
    <MotionHeader
      className={`section-heading section-heading--${align}`}
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </MotionHeader>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 18);
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 980) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header ${headerScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-row">
          <a href="#top" className="brand" aria-label={`${site.name} home`}>
            <span className="brand-icon" aria-hidden="true">
              <Leaf size={16} />
            </span>
            <span className="brand-text">{site.shortName}</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn--ghost desktop-cta">
            Book consultation
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}>
          <nav aria-label="Mobile primary" className="mobile-nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
              Request estimate <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero">
          <div className="hero-glow" aria-hidden="true" />

          <div className="container hero-grid">
            <MotionDiv className="hero-copy" variants={stagger} initial="hidden" animate="show">
              <MotionP className="hero-eyebrow" variants={revealUp}>
                Award-level landscaping for modern homes
              </MotionP>

              <MotionH1 variants={revealUp}>
                We sculpt lawns into
                <span> living landmarks.</span>
              </MotionH1>

              <MotionP className="hero-description" variants={revealUp}>
                Evergrove combines architectural planting, intelligent irrigation, and meticulous lawn
                stewardship so your exterior feels as curated as your interior.
              </MotionP>

              <MotionDiv className="hero-actions" variants={revealUp}>
                <a href="#contact" className="btn btn--primary">
                  Start your transformation <ArrowRight size={16} />
                </a>
                <a href="#projects" className="btn btn--ghost">
                  Explore projects
                </a>
              </MotionDiv>

              <MotionUl className="hero-trust" variants={revealUp}>
                <li>
                  <ShieldCheck size={16} aria-hidden="true" />
                  Licensed + insured crews
                </li>
                <li>
                  <Clock3 size={16} aria-hidden="true" />
                  Same-week consultations
                </li>
                <li>
                  <Sparkles size={16} aria-hidden="true" />
                  White-glove property care
                </li>
              </MotionUl>
            </MotionDiv>

            <MotionFigure
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.14 }}
            >
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1500&q=80"
                alt="Architectural backyard landscaping with layered planting and stone path"
                width="1500"
                height="1100"
                loading="eager"
                fetchPriority="high"
              />

              <figcaption className="hero-stat-card">
                <span>Signature design install</span>
                <strong>$120K estate refresh delivered in 23 days</strong>
              </figcaption>

              <div className="hero-badge" aria-label="Client rating">
                <Star size={16} fill="currentColor" />
                4.9 average score
              </div>
            </MotionFigure>
          </div>

          <div className="container metric-grid" aria-label="Company highlights">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="What we do"
              title="Landscape services engineered for wow-factor and longevity"
              body="Every service is built to improve immediate beauty, long-term plant health, and day-to-day usability of your outdoor space."
            />

            <MotionDiv
              className="service-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <MotionArticle key={service.title} className="service-card" variants={revealUp}>
                    <span className="service-icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.highlights.map((item) => (
                        <li key={item}>
                          <Check size={14} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </MotionArticle>
                );
              })}
            </MotionDiv>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <SectionHeading
              eyebrow="Featured work"
              title="Projects that stop scrolls and turn heads in real life"
              body="Each property receives a custom visual language driven by architecture, maintenance goals, and seasonal color rhythm."
            />

            <MotionDiv
              className="project-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {projects.map((project, index) => (
                <MotionArticle
                  key={project.name}
                  className={`project-card ${index === 0 ? 'project-card--wide' : ''}`}
                  variants={revealUp}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} landscaping project`}
                    loading="lazy"
                    width="1400"
                    height="1000"
                  />
                  <div className="project-overlay" />
                  <div className="project-content">
                    <p>{project.category}</p>
                    <h3>{project.name}</h3>
                    <span>
                      <MapPin size={14} aria-hidden="true" />
                      {project.location}
                    </span>
                  </div>
                </MotionArticle>
              ))}
            </MotionDiv>
          </div>
        </section>

        <section id="process" className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Our method"
              title="A clear process built around craftsmanship, communication, and speed"
              body="No vague timelines. No chaotic crews. You get a structured delivery process from discovery through long-term care."
            />

            <MotionDiv
              className="process-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {process.map((item) => (
                <MotionArticle key={item.step} className="process-card" variants={revealUp}>
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </MotionArticle>
              ))}
            </MotionDiv>
          </div>
        </section>

        <section id="plans" className="section plans">
          <div className="container">
            <SectionHeading
              eyebrow="Plans + pricing"
              title="Choose the level of attention your landscape deserves"
              body="Simple packages that cover maintenance, concierge-level care, and focused transformation projects."
              align="center"
            />

            <MotionDiv
              className="plan-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {plans.map((plan) => (
                <MotionArticle
                  key={plan.name}
                  className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`}
                  variants={revealUp}
                >
                  {plan.featured ? <span className="plan-badge">Most Popular</span> : null}
                  <h3>{plan.name}</h3>
                  <strong>{plan.price}</strong>
                  <p>{plan.summary}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={14} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </MotionArticle>
              ))}
            </MotionDiv>
          </div>
        </section>

        <section id="reviews" className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Client voice"
              title="Loved by homeowners who care about beautiful, livable exteriors"
              align="center"
            />

            <MotionDiv
              className="testimonial-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {testimonials.map((testimonial) => (
                <MotionArticle key={testimonial.name} className="testimonial-card" variants={revealUp}>
                  <div className="stars" aria-label="Five stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={`${testimonial.name}-${index}`} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{testimonial.quote}”</p>
                  <footer>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.area}</span>
                  </footer>
                </MotionArticle>
              ))}
            </MotionDiv>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions homeowners ask before we begin"
              body="Need more detail? We can walk your property and provide a custom roadmap in one consultation."
            />

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-panel">
            <MotionDiv
              className="contact-copy"
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="section-eyebrow">Get started</p>
              <h2>Let’s make your exterior impossible to ignore.</h2>
              <p>
                Tell us what you want to change and we will send a scoped estimate within one business
                day.
              </p>
              <a href={`tel:${site.phoneHref}`} className="btn btn--light">
                Call {site.phone}
              </a>
            </MotionDiv>

            <MotionDiv
              className="contact-details"
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
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
            </MotionDiv>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#top" className="brand brand--footer" aria-label={`${site.name} home`}>
              <span className="brand-icon" aria-hidden="true">
                <Leaf size={16} />
              </span>
              <span className="brand-text">{site.shortName}</span>
            </a>
            <p>
              Premium lawn stewardship, refined landscape design, and world-class curb appeal for
              discerning homeowners.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="footer-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="container footer-bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Built for performance, accessibility, and modern browsers.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
