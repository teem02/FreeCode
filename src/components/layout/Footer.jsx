import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">LocalR.io</span>
            </Link>
            <p className="footer__description">
              AI-powered platform helping local businesses collect more positive Google reviews 
              and improve their online reputation.
            </p>
            <div className="footer__social">
              {/* Social media icons would go here */}
              <span className="footer__social-text">Follow us on social media</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__title">Product</h4>
            <ul className="footer__links">
              <li><Link to="/features" className="footer__link">Features</Link></li>
              <li><Link to="/pricing" className="footer__link">Pricing</Link></li>
              <li><Link to="/integrations" className="footer__link">Integrations</Link></li>
              <li><Link to="/dashboard" className="footer__link">Dashboard</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer__section">
            <h4 className="footer__title">Company</h4>
            <ul className="footer__links">
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/blog" className="footer__link">Blog</Link></li>
              <li><Link to="/careers" className="footer__link">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer__section">
            <h4 className="footer__title">Support</h4>
            <ul className="footer__links">
              <li><Link to="/help" className="footer__link">Help Center</Link></li>
              <li><Link to="/contact" className="footer__link">Contact Support</Link></li>
              <li><Link to="/api" className="footer__link">API Docs</Link></li>
              <li><Link to="/status" className="footer__link">System Status</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__section">
            <h4 className="footer__title">Stay Updated</h4>
            <p className="footer__newsletter-text">
              Get the latest updates on new features and best practices.
            </p>
            <div className="footer__newsletter">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="footer__newsletter-input"
              />
              <button className="footer__newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <span>&copy; {currentYear} LocalR.io. All rights reserved.</span>
            <div className="footer__legal-links">
              <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
              <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
              <Link to="/cookies" className="footer__legal-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;