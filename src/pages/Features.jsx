import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Features.css';

const Features = () => {
  const mainFeatures = [
    {
      icon: '🤖',
      title: 'AI-Powered Review Responses',
      description: 'Our advanced AI analyzes each review and generates professional, personalized responses that match your brand voice.',
      benefits: [
        'Responds to reviews in under 5 minutes',
        'Maintains consistent brand voice',
        'Learns from your preferred responses',
        'Available 24/7, never misses a review'
      ],
      demo: 'ai-responses'
    },
    {
      icon: '📱',
      title: 'Smart Review Requests',
      description: 'Automatically send review requests to satisfied customers at the perfect moment using smart timing and personalization.',
      benefits: [
        'Identifies the best customers to ask',
        'Sends requests at optimal times',
        'Personalized messaging for higher response rates',
        'Multiple channel support (SMS, Email)'
      ],
      demo: 'review-requests'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics & Insights',
      description: 'Track your reputation progress with detailed analytics, sentiment analysis, and competitor comparisons.',
      benefits: [
        'Real-time reputation monitoring',
        'Sentiment trend analysis',
        'Competitor benchmarking',
        'ROI tracking and reporting'
      ],
      demo: 'analytics'
    },
    {
      icon: '🔄',
      title: 'Seamless Integrations',
      description: 'Connect with your existing tools and workflows through our comprehensive integration ecosystem.',
      benefits: [
        'Google Business Profile sync',
        'CRM and POS integrations',
        'Zapier workflow automation',
        'Custom API access'
      ],
      demo: 'integrations'
    }
  ];

  const additionalFeatures = [
    {
      icon: '🚨',
      title: 'Review Monitoring',
      description: 'Get instant notifications when new reviews are posted across all platforms.'
    },
    {
      icon: '📈',
      title: 'SEO Optimization',
      description: 'Improve local search rankings with strategic review collection and keyword optimization.'
    },
    {
      icon: '👥',
      title: 'Team Management',
      description: 'Add team members, assign roles, and collaborate on review management.'
    },
    {
      icon: '🛡️',
      title: 'Reputation Protection',
      description: 'Proactive monitoring and rapid response to protect your online reputation.'
    },
    {
      icon: '📋',
      title: 'Custom Templates',
      description: 'Create and customize response templates for different review scenarios.'
    },
    {
      icon: '🎯',
      title: 'Targeting & Segmentation',
      description: 'Segment customers and target review requests based on purchase history and behavior.'
    }
  ];

  return (
    <div className="features">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="features-hero__content animate-fade-in">
            <h1 className="features-hero__title">
              Powerful Features to <span className="text-accent">Boost Your Reputation</span>
            </h1>
            <p className="features-hero__subtitle">
              Everything you need to collect more positive reviews, respond professionally to feedback, 
              and improve your local search visibility.
            </p>
            <div className="features-hero__cta">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="main-features">
        <div className="container">
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`feature-section ${index % 2 === 1 ? 'feature-section--reverse' : ''}`}>
              <div className="feature-content animate-slide-in-left">
                <div className="feature-icon">{feature.icon}</div>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-benefits">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="feature-benefit">
                      <span className="feature-benefit-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <Button variant="primary">
                    Try This Feature
                  </Button>
                </Link>
              </div>
              <div className="feature-demo animate-slide-in-right">
                <div className={`demo-container demo-${feature.demo}`}>
                  {feature.demo === 'ai-responses' && (
                    <div className="demo-ai-responses">
                      <div className="demo-header">
                        <h4>AI Response Generator</h4>
                      </div>
                      <div className="demo-content">
                        <div className="original-review">
                          <div className="review-stars">⭐⭐⭐⭐⭐</div>
                          <p>"Great service! The staff was very helpful and professional."</p>
                          <span className="review-author">- Sarah J.</span>
                        </div>
                        <div className="ai-processing">
                          <div className="loading-dots">
                            <span>Generating response</span>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                          </div>
                        </div>
                        <div className="ai-response-demo">
                          <div className="ai-badge">AI Generated Response</div>
                          <p>"Thank you so much for your wonderful review, Sarah! We're thrilled that our team was able to provide you with helpful and professional service. Your feedback means the world to us!"</p>
                          <Button variant="primary" size="sm">Send Response</Button>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.demo === 'review-requests' && (
                    <div className="demo-review-requests">
                      <div className="demo-header">
                        <h4>Smart Review Request System</h4>
                      </div>
                      <div className="demo-content">
                        <div className="customer-profile">
                          <div className="customer-info">
                            <strong>Mike Chen</strong>
                            <span>Recent Purchase: $150</span>
                            <span className="satisfaction-score">Satisfaction Score: 9.2/10</span>
                          </div>
                          <div className="timing-optimal">
                            <span className="timing-badge">Optimal Timing Detected</span>
                          </div>
                        </div>
                        <div className="request-preview">
                          <h5>Personalized Review Request</h5>
                          <p>"Hi Mike, thank you for choosing us for your recent $150 purchase. We'd love to hear about your experience!"</p>
                          <Button variant="accent" size="sm">Send Request</Button>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.demo === 'analytics' && (
                    <div className="demo-analytics">
                      <div className="demo-header">
                        <h4>Reputation Analytics Dashboard</h4>
                      </div>
                      <div className="demo-content">
                        <div className="analytics-charts">
                          <div className="chart-item">
                            <span className="chart-label">Average Rating</span>
                            <span className="chart-value text-success">4.8 ⭐</span>
                            <span className="chart-trend">↗ +0.3 this month</span>
                          </div>
                          <div className="chart-item">
                            <span className="chart-label">Total Reviews</span>
                            <span className="chart-value text-primary">247</span>
                            <span className="chart-trend">↗ +23 this month</span>
                          </div>
                          <div className="chart-item">
                            <span className="chart-label">Response Rate</span>
                            <span className="chart-value text-accent">98%</span>
                            <span className="chart-trend">↗ +15% this month</span>
                          </div>
                        </div>
                        <div className="sentiment-chart">
                          <span>Sentiment Analysis</span>
                          <div className="sentiment-bar">
                            <div className="sentiment-positive" style={{width: '85%'}}>85% Positive</div>
                            <div className="sentiment-neutral" style={{width: '10%'}}>10%</div>
                            <div className="sentiment-negative" style={{width: '5%'}}>5%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.demo === 'integrations' && (
                    <div className="demo-integrations">
                      <div className="demo-header">
                        <h4>Connected Integrations</h4>
                      </div>
                      <div className="demo-content">
                        <div className="integration-list">
                          <div className="integration-item connected">
                            <span className="integration-icon">🔍</span>
                            <span className="integration-name">Google Business Profile</span>
                            <span className="integration-status">Connected</span>
                          </div>
                          <div className="integration-item connected">
                            <span className="integration-icon">📧</span>
                            <span className="integration-name">Email Marketing</span>
                            <span className="integration-status">Connected</span>
                          </div>
                          <div className="integration-item">
                            <span className="integration-icon">🛍️</span>
                            <span className="integration-name">Shopify</span>
                            <Button variant="outline" size="sm">Connect</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="additional-features">
        <div className="container">
          <div className="section-header">
            <h2>More Powerful Features</h2>
            <p>Comprehensive tools to give you complete control over your online reputation</p>
          </div>
          <div className="additional-features-grid">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="additional-feature-card animate-slide-in-left" hover>
                <Card.Body>
                  <div className="additional-feature-icon">{feature.icon}</div>
                  <h3 className="additional-feature-title">{feature.title}</h3>
                  <p className="additional-feature-description">{feature.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <Card className="features-cta-card">
            <Card.Body>
              <div className="features-cta-content">
                <h2>Ready to Transform Your Online Reputation?</h2>
                <p>Join thousands of local businesses using LocalR.io to boost their reviews and grow their business.</p>
                <div className="features-cta-buttons">
                  <Link to="/signup">
                    <Button variant="primary" size="lg">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Get a Demo
                    </Button>
                  </Link>
                </div>
                <p className="features-cta-note">
                  14-day free trial • No credit card required • Setup in 5 minutes
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Features;