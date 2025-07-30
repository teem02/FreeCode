import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="nav__logo">
            <span className="nav__logo-text">LocalR.io</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav__links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav__link ${isActive(item.href) ? 'nav__link--active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav__cta">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" size="sm">
                Try Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`nav__mobile ${isMenuOpen ? 'nav__mobile--open' : ''}`}>
          <div className="nav__mobile-links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav__mobile-link ${isActive(item.href) ? 'nav__mobile-link--active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="nav__mobile-cta">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" size="md" className="btn--full">
                Login
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" size="md" className="btn--full">
                Try Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;