import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '⭐',
      title: 'AI Review Management',
      description: 'Automatically respond to negative reviews with AI-powered responses that maintain your brand voice.'
    },
    {
      icon: '📈',
      title: 'Local SEO Boost',
      description: 'Improve your local search rankings with strategic review collection and management.'
    },
    {
      icon: '🎯',
      title: 'Smart Review Requests',
      description: 'Send personalized review requests to satisfied customers at the perfect moment.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track your reputation progress with detailed analytics and sentiment analysis.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Johnson\'s Bakery',
      rating: 5,
      text: 'LocalR.io helped us increase our positive reviews by 300% in just 3 months. The AI responses are incredibly natural!'
    },
    {
      name: 'Mike Chen',
      business: 'Chen\'s Auto Repair',
      rating: 5,
      text: 'The automated review requests have been a game changer. We went from 20 reviews to over 200 in 6 months.'
    },
    {
      name: 'Lisa Rodriguez',
      business: 'Rodriguez Law Firm',
      rating: 5,
      text: 'Professional, efficient, and effective. Our online reputation has never looked better.'
    }
  ];

  const integrations = [
    { name: 'Google Business Profile', logo: '🔍' },
    { name: 'Facebook', logo: '📘' },
    { name: 'Yelp', logo: '🌟' },
    { name: 'Shopify', logo: '🛍️' },
    { name: 'Zapier', logo: '⚡' },
    { name: 'Stripe', logo: '💳' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content animate-fade-in">
            <h1 className="hero__title">
              Get More <span className="text-accent">Positive Reviews</span> 
              <br />with AI-Powered Automation
            </h1>
            <p className="hero__subtitle">
              LocalR.io helps local businesses collect more Google reviews, 
              automatically respond to feedback, and boost their local search visibility.
            </p>
            <div className="hero__cta">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Try It Free
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="secondary" size="lg">
                  View Features
                </Button>
              </Link>
            </div>
            <p className="hero__note">
              No credit card required • 14-day free trial • Setup in 5 minutes
            </p>
          </div>
          <div className="hero__visual animate-slide-in-right">
            <div className="hero__mockup">
              <div className="mockup-content">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="mockup-title">LocalR.io Dashboard</span>
                </div>
                <div className="mockup-body">
                  <div className="review-item">
                    <div className="review-stars">⭐⭐⭐⭐⭐</div>
                    <p>"Amazing service! Highly recommended."</p>
                    <div className="ai-response">
                      <span className="ai-badge">AI Response</span>
                      <p>"Thank you for the wonderful review!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-overview">
        <div className="container">
          <div className="section-header">
            <h2>Everything You Need to Boost Your Online Reputation</h2>
            <p>Comprehensive tools to manage, improve, and showcase your customer reviews.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card animate-slide-in-left" hover>
                <Card.Body>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits__content">
            <div className="benefits__text animate-slide-in-left">
              <h2>Why Local Businesses Choose LocalR.io</h2>
              <div className="benefits__list">
                <div className="benefit-item">
                  <div className="benefit-icon">✅</div>
                  <div className="benefit-text">
                    <h4>Increase Positive Reviews by 300%</h4>
                    <p>Smart timing and personalized requests get more customers to leave reviews</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🤖</div>
                  <div className="benefit-text">
                    <h4>AI-Powered Response Management</h4>
                    <p>Professionally respond to every review in your brand voice, automatically</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📍</div>
                  <div className="benefit-text">
                    <h4>Boost Local Search Rankings</h4>
                    <p>More reviews and better ratings improve your visibility in local search results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits__visual animate-slide-in-right">
              <div className="stats-card">
                <h3>Average Results After 3 Months</h3>
                <div className="stat-item">
                  <span className="stat-number">300%</span>
                  <span className="stat-label">More Reviews</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.8★</span>
                  <span className="stat-label">Average Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Response Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Join thousands of local businesses improving their online reputation</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card" hover>
                <Card.Body>
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.business}</span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations">
        <div className="container">
          <div className="section-header">
            <h2>Seamless Integrations</h2>
            <p>Connect with the tools you already use</p>
          </div>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-item">
                <div className="integration-logo">{integration.logo}</div>
                <span className="integration-name">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="pricing-teaser">
        <div className="container">
          <Card className="pricing-teaser-card">
            <Card.Body>
              <div className="pricing-teaser-content">
                <h2>Ready to Transform Your Online Reputation?</h2>
                <p>Start your free trial today. No credit card required.</p>
                <div className="pricing-teaser-cta">
                  <Link to="/signup">
                    <Button variant="primary" size="lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" size="lg">
                      View Plans
                    </Button>
                  </Link>
                </div>
                <p className="pricing-note">
                  14-day free trial • Cancel anytime • Setup takes 5 minutes
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;