import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Navigation, Compass, Train, Ship, Camera, TreePine, Sunrise, Calendar, CheckCircle, Quote, Mail, Phone, MapPin as LocationIcon, Globe, MessageCircle, Share2 } from 'lucide-react';
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
      staggerChildren: 0.2
    }
  }
};

const destinations = [
  { name: 'Ella', desc: 'Famous for scenic train rides, waterfalls, tea plantations, and mountain views.', img: '/ella_train_ride.png' },
  { name: 'Sigiriya', desc: 'Ancient rock fortress and one of Sri Lanka’s most iconic landmarks.', img: '/sigiriya_rock.png' },
  { name: 'Mirissa', desc: 'Tropical beach paradise famous for whale watching and nightlife.', img: '/mirissa_beach.png' },
  { name: 'Kandy', desc: 'Cultural capital known for temples, traditions, and lake views.', img: '/kandy_temple.png' },
  { name: 'Nuwara Eliya', desc: 'Cool-climate tea country surrounded by lush green hills.', img: '/tea_plantation.png' }
];

const activities = [
  { icon: <Train size={30} />, title: 'Train Adventures', desc: 'Experience one of the world’s most beautiful train journeys through Sri Lanka’s hill country.' },
  { icon: <Camera size={30} />, title: 'Safari Tours', desc: 'Discover elephants, leopards, and exotic wildlife in national parks.' },
  { icon: <Sunrise size={30} />, title: 'Beach Escapes', desc: 'Relax on crystal-clear beaches with unforgettable sunsets.' },
  { icon: <TreePine size={30} />, title: 'Hiking & Camping', desc: 'Conquer misty peaks and camp under starry skies in nature.' },
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
  { text: "Sri Lanka was the most beautiful country we’ve ever visited. Amazing experience!", author: "Emma", country: "UK" },
  { text: "The train ride through Ella was unforgettable.", author: "Daniel", country: "Australia" },
  { text: "Friendly people, incredible food, and breathtaking beaches.", author: "Sophia", country: "Germany" }
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <MapPin size={28} />
            Emerald Lanka
          </div>
          <div className="nav-links">
            <a href="#destinations">Destinations</a>
            <a href="#activities">Experiences</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
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
          <motion.h1 variants={fadeUp}>Discover the Beauty of Sri Lanka</motion.h1>
          <motion.p variants={fadeUp}>From golden beaches to misty mountains, explore unforgettable experiences across the paradise island.</motion.p>
          <motion.div className="hero-buttons" variants={fadeUp}>
            <button className="btn btn-primary">Explore Destinations</button>
            <button className="btn btn-secondary">Plan Your Trip</button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section container">
        <motion.div 
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-icon"><MapPin size={24} /></div>
            <div className="stat-number">25+</div>
            <div className="stat-label">Famous Destinations</div>
          </motion.div>
          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-icon"><Users size={24} /></div>
            <div className="stat-number">1000+</div>
            <div className="stat-label">Happy Travelers</div>
          </motion.div>
          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-icon"><Compass size={24} /></div>
            <div className="stat-number">9</div>
            <div className="stat-label">Provinces to Explore</div>
          </motion.div>
          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-icon"><Navigation size={24} /></div>
            <div className="stat-number">∞</div>
            <div className="stat-label">Endless Adventures</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="section container">
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
                <img src={dest.img} alt={dest.name} className="dest-img" />
              </div>
              <div className="dest-content">
                <h3>{dest.name}</h3>
                <p>{dest.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
      <section id="packages" className="section container">
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
                <span><MapPin size={16} /> {pkg.route}</span>
              </div>
              <button className="btn btn-primary package-btn">View Full Details</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: '#f1f5f9' }}>
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
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-secondary">Book Your Tour</button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo" style={{ marginBottom: '1.5rem' }}>
                <MapPin size={24} color="var(--primary)" /> Emerald Lanka
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                Your gateway to the majestic beauty of Sri Lanka. We craft journeys that turn into lifelong memories.
              </p>
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
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>
                  <Mail size={16} /> hello@emeraldlanka.com
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>
                  <Phone size={16} /> +94 77 123 4567
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>
                  <LocationIcon size={16} /> Colombo, Sri Lanka
                </span>
              </div>
              <div className="social-links">
                <a href="#"><Globe size={18} /></a>
                <a href="#"><MessageCircle size={18} /></a>
                <a href="#"><Share2 size={18} /></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Subscribe for travel tips and updates.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" required />
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
