import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, Navigation, Compass, Train, Ship, Camera, TreePine, Sunrise, Calendar, CheckCircle, Quote, Mail, Phone, MapPin as LocationIcon, Globe, MessageCircle, Share2, Menu, X } from 'lucide-react';
import './index.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const menuVariants = {
  hidden: { opacity: 0, y: -20, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, pointerEvents: 'none', transition: { duration: 0.2 } }
};

const destinations = [
  { name: 'Ella', desc: 'Famous for scenic train rides, waterfalls, tea plantations, and mountain views.', img: '/ella_train_ride.png' },
  { name: 'Sigiriya', desc: "Ancient rock fortress and one of Sri Lanka's most iconic landmarks.", img: '/sigiriya_rock.png' },
  { name: 'Mirissa', desc: 'Tropical beach paradise famous for whale watching and nightlife.', img: '/mirissa_beach.png' },
  { name: 'Kandy', desc: 'Cultural capital known for temples, traditions, and lake views.', img: '/kandy_temple.png' },
  { name: 'Nuwara Eliya', desc: 'Cool-climate tea country surrounded by lush green hills.', img: '/tea_plantation.png' }
];

const activities = [
  { icon: <Train size={28} />, title: 'Train Adventures', desc: "Experience one of the world's most beautiful train journeys through Sri Lanka's hill country." },
  { icon: <Camera size={28} />, title: 'Safari Tours', desc: 'Discover elephants, leopards, and exotic wildlife in national parks.' },
  { icon: <Sunrise size={28} />, title: 'Beach Escapes', desc: 'Relax on crystal-clear beaches with unforgettable sunsets.' },
  { icon: <TreePine size={28} />, title: 'Hiking & Camping', desc: 'Conquer misty peaks and camp under starry skies in nature.' },
];

const packages = [
  { title: 'Hill Country Escape', duration: '3 Days / 2 Nights', route: 'Ella • Nuwara Eliya • Kandy' },
  { title: 'South Coast Adventure', duration: '4 Days / 3 Nights', route: 'Beaches • Whale Watching • Galle' },
  { title: 'Cultural Heritage Tour', duration: '5 Days / 4 Nights', route: 'Sigiriya • Dambulla • Kandy' },
];

const whyUs = [
  { icon: <CheckCircle size={32} />, title: 'Experienced Local Guides' },
  { icon: <CheckCircle size={32} />, title: 'Affordable Travel Packages' },
  { icon: <CheckCircle size={32} />, title: '24/7 Support' },
  { icon: <CheckCircle size={32} />, title: 'Customized Trips' }
];

const testimonials = [
  { text: "Sri Lanka was the most beautiful country we've ever visited. Amazing experience!", author: 'Emma', country: 'UK' },
  { text: "The train ride through Ella was unforgettable.", author: "Daniel", country: "Australia" },
  { text: "Friendly people, incredible food, and breathtaking beaches.", author: "Sophia", country: "Germany" }
];

const navLinks = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#activities', label: 'Experiences' },
  { href: '#packages', label: 'Packages' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <MapPin size={26} />
            Emerald Lanka
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="mobile-nav-links">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} onClick={closeMenu}>{link.label}</a>
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary mobile-menu-cta" onClick={closeMenu}>
                Book Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src="/ella_train_ride.png" alt="Sri Lanka Hero" className="hero-bg" />
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p className="hero-badge" variants={fadeUp}>🌿 Paradise Island</motion.p>
          <motion.h1 variants={fadeUp}>Discover the Beauty of Sri Lanka</motion.h1>
          <motion.p variants={fadeUp}>From golden beaches to misty mountains, explore unforgettable experiences across the paradise island.</motion.p>
          <motion.div className="hero-buttons" variants={fadeUp}>
            <a href="#destinations" className="btn btn-primary">Explore Destinations</a>
            <a href="#packages" className="btn btn-secondary">Plan Your Trip</a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon"><MapPin size={22} /></div>
              <div className="stat-number">25+</div>
              <div className="stat-label">Famous Destinations</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon"><Users size={22} /></div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Travelers</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon"><Compass size={22} /></div>
              <div className="stat-number">9</div>
              <div className="stat-label">Provinces to Explore</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon"><Navigation size={22} /></div>
              <div className="stat-number">∞</div>
              <div className="stat-label">Endless Adventures</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="section destinations-section">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-subtitle">Discover the most iconic and breathtaking locations our paradise island has to offer.</p>
          </motion.div>
          <motion.div
            className="destinations-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {destinations.map((dest, idx) => (
              <motion.div key={idx} className="dest-card" variants={fadeUp}>
                <div className="dest-img-wrapper">
                  <img src={dest.img} alt={dest.name} className="dest-img" loading="lazy" />
                </div>
                <div className="dest-content">
                  <h3>{dest.name}</h3>
                  <p>{dest.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Wave merge — desktop only */}
        <div className="section-wave section-wave--dark" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#1c1917" />
          </svg>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="section activities-section">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Unforgettable Experiences</h2>
            <p className="section-subtitle">Immerse yourself in thrilling adventures and cultural journeys tailored for you.</p>
          </motion.div>
          <motion.div
            className="activities-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {activities.map((act, idx) => (
              <motion.div key={idx} className="activity-card" variants={fadeUp}>
                <div className="activity-icon">
                  {act.icon}
                </div>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section packages-section">
        {/* Wave merge top — desktop only */}
        <div className="section-wave section-wave--light" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#1c1917" />
          </svg>
        </div>
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Featured Tour Packages</h2>
            <p className="section-subtitle">Carefully crafted itineraries for the perfect getaway.</p>
          </motion.div>
          <motion.div
            className="packages-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {packages.map((pkg, idx) => (
              <motion.div key={idx} className="package-card" variants={fadeUp}>
                <div className="package-duration">{pkg.duration}</div>
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-route">
                  <span><MapPin size={15} /> {pkg.route}</span>
                </div>
                <button className="btn btn-primary package-btn">View Full Details</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Wave merge bottom — desktop only */}
        <div className="section-wave section-wave--why" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f1f5f9" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">We guarantee a seamless and magical travel experience.</p>
          </motion.div>
          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {whyUs.map((item, idx) => (
              <motion.div key={idx} className="feature-item" variants={fadeUp}>
                <div className="feature-icon">{item.icon}</div>
                <h4>{item.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">What Our Travelers Say</h2>
            <p className="section-subtitle">Real experiences from real adventurers.</p>
          </motion.div>
          <motion.div
            className="testi-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((t, idx) => (
              <motion.div key={idx} className="testi-card" variants={fadeUp}>
                <Quote className="quote-icon" />
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="author-avatar">{t.author[0]}</div>
                  <div className="author-info">
                    <h4>{t.author}</h4>
                    <p>{t.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <img src="/mirissa_beach.png" alt="Mirissa Sunset" className="cta-bg" />
        <div className="cta-overlay"></div>
        <motion.div
          className="cta-content container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Ready to Explore Sri Lanka?</h2>
          <p>Start your unforgettable journey today with our expert travel guides.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
            <a href="#packages" className="btn btn-secondary">Book Your Tour</a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <div className="logo footer-logo">
                <MapPin size={22} color="var(--primary)" /> Emerald Lanka
              </div>
              <p className="footer-desc">
                Your gateway to the majestic beauty of Sri Lanka. We craft journeys that turn into lifelong memories.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Website"><Globe size={17} /></a>
                <a href="#" aria-label="Chat"><MessageCircle size={17} /></a>
                <a href="#" aria-label="Share"><Share2 size={17} /></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <a href="#destinations">Destinations</a>
                <a href="#activities">Experiences</a>
                <a href="#packages">Tour Packages</a>
                <a href="#">About Us</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <div className="footer-links">
                <span className="contact-item">
                  <Mail size={15} /> hello@emeraldlanka.com
                </span>
                <span className="contact-item">
                  <Phone size={15} /> +94 77 123 4567
                </span>
                <span className="contact-item">
                  <LocationIcon size={15} /> Colombo, Sri Lanka
                </span>
              </div>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p className="footer-newsletter-text">Subscribe for travel tips and updates.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Emerald Lanka Tours. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
