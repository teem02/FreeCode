import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Integrations.css';

const Integrations = () => {
  const [connectedIntegrations, setConnectedIntegrations] = useState(['google-business']);

  const handleConnect = (integrationId) => {
    if (connectedIntegrations.includes(integrationId)) {
      // Disconnect
      setConnectedIntegrations(prev => prev.filter(id => id !== integrationId));
    } else {
      // Connect
      setConnectedIntegrations(prev => [...prev, integrationId]);
    }
  };

  const primaryIntegrations = [
    {
      id: 'google-business',
      name: 'Google Business Profile',
      icon: '🔍',
      description: 'Automatically monitor and respond to Google reviews. Get review request automation and detailed analytics.',
      features: [
        'Review monitoring',
        'AI response generation',
        'Review request automation',
        'Analytics & insights',
        'Local SEO optimization'
      ],
      category: 'Review Platforms',
      plan: 'All Plans',
      isPopular: true
    },
    {
      id: 'facebook',
      name: 'Facebook Reviews',
      icon: '📘',
      description: 'Monitor and manage Facebook page reviews. Respond automatically and track sentiment.',
      features: [
        'Facebook review monitoring',
        'Automated responses',
        'Sentiment tracking',
        'Page insights integration'
      ],
      category: 'Review Platforms',
      plan: 'Pro & Agency'
    },
    {
      id: 'yelp',
      name: 'Yelp Business',
      icon: '🌟',
      description: 'Track Yelp reviews and ratings. Get notified of new reviews and respond professionally.',
      features: [
        'Yelp review monitoring',
        'Response management',
        'Rating tracking',
        'Business insights'
      ],
      category: 'Review Platforms',
      plan: 'Pro & Agency'
    },
    {
      id: 'trustpilot',
      name: 'Trustpilot',
      icon: '⭐',
      description: 'Monitor Trustpilot reviews and maintain your business reputation on this trusted platform.',
      features: [
        'Review monitoring',
        'Response automation',
        'Trust score tracking',
        'Review invitations'
      ],
      category: 'Review Platforms',
      plan: 'Agency Only'
    }
  ];

  const businessIntegrations = [
    {
      id: 'shopify',
      name: 'Shopify',
      icon: '🛍️',
      description: 'Connect your Shopify store to automatically request reviews from customers after purchase.',
      features: [
        'Post-purchase review requests',
        'Customer segmentation',
        'Order-based triggers',
        'Product review management'
      ],
      category: 'E-commerce',
      plan: 'Pro & Agency'
    },
    {
      id: 'square',
      name: 'Square POS',
      icon: '📊',
      description: 'Integrate with Square to send review requests after in-person transactions.',
      features: [
        'Transaction-based triggers',
        'Customer contact sync',
        'Automated follow-ups',
        'Sales analytics integration'
      ],
      category: 'POS Systems',
      plan: 'Pro & Agency'
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      icon: '📧',
      description: 'Sync customer data and automate review request campaigns through Mailchimp.',
      features: [
        'Customer list sync',
        'Email campaign automation',
        'Segmentation support',
        'Analytics integration'
      ],
      category: 'Email Marketing',
      plan: 'Pro & Agency'
    },
    {
      id: 'hubspot',
      name: 'HubSpot CRM',
      icon: '🎯',
      description: 'Connect your HubSpot CRM to trigger review requests based on customer interactions.',
      features: [
        'Contact sync',
        'Deal-based triggers',
        'Pipeline integration',
        'Activity tracking'
      ],
      category: 'CRM',
      plan: 'Agency Only'
    }
  ];

  const automationIntegrations = [
    {
      id: 'zapier',
      name: 'Zapier',
      icon: '⚡',
      description: 'Connect LocalR.io with 5000+ apps through Zapier for custom workflow automation.',
      features: [
        '5000+ app connections',
        'Custom trigger setups',
        'Multi-step workflows',
        'Data synchronization'
      ],
      category: 'Automation',
      plan: 'Pro & Agency'
    },
    {
      id: 'webhooks',
      name: 'Custom Webhooks',
      icon: '🔗',
      description: 'Set up custom webhooks to integrate LocalR.io with your existing systems.',
      features: [
        'Real-time notifications',
        'Custom payload formatting',
        'Secure authentication',
        'Error handling & retries'
      ],
      category: 'Developer Tools',
      plan: 'Agency Only'
    },
    {
      id: 'api',
      name: 'REST API',
      icon: '💻',
      description: 'Full API access to integrate LocalR.io functionality into your custom applications.',
      features: [
        'Complete API access',
        'Rate limiting',
        'Authentication tokens',
        'Comprehensive documentation'
      ],
      category: 'Developer Tools',
      plan: 'Agency Only'
    }
  ];

  const allIntegrations = [...primaryIntegrations, ...businessIntegrations, ...automationIntegrations];

  const categories = [
    'All Integrations',
    'Review Platforms',
    'E-commerce',
    'POS Systems',
    'Email Marketing',
    'CRM',
    'Automation',
    'Developer Tools'
  ];

  const [activeCategory, setActiveCategory] = useState('All Integrations');

  const filteredIntegrations = activeCategory === 'All Integrations' 
    ? allIntegrations 
    : allIntegrations.filter(integration => integration.category === activeCategory);

  const isConnected = (integrationId) => connectedIntegrations.includes(integrationId);

  return (
    <div className="integrations">
      {/* Hero Section */}
      <section className="integrations-hero">
        <div className="container">
          <div className="integrations-hero__content animate-fade-in">
            <h1 className="integrations-hero__title">
              Connect Your <span className="text-accent">Business Tools</span>
            </h1>
            <p className="integrations-hero__subtitle">
              Seamlessly integrate LocalR.io with your existing business tools and platforms 
              for automated review management.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Integrations</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Apps via Zapier</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="integration-categories">
        <div className="container">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter ${activeCategory === category ? 'category-filter--active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Integrations */}
      {(activeCategory === 'All Integrations' || activeCategory === 'Review Platforms') && (
        <section className="primary-integrations">
          <div className="container">
            <div className="section-header">
              <h2>Review Platform Integrations</h2>
              <p>Connect with the major review platforms where your customers leave feedback</p>
            </div>
            <div className="integrations-grid">
              {primaryIntegrations
                .filter(integration => activeCategory === 'All Integrations' || integration.category === activeCategory)
                .map((integration) => (
                <Card key={integration.id} className={`integration-card ${isConnected(integration.id) ? 'integration-card--connected' : ''} ${integration.isPopular ? 'integration-card--popular' : ''}`}>
                  {integration.isPopular && <div className="integration-badge">Most Popular</div>}
                  {isConnected(integration.id) && <div className="connection-badge">Connected</div>}
                  <Card.Body>
                    <div className="integration-header">
                      <div className="integration-icon">{integration.icon}</div>
                      <div className="integration-info">
                        <h3 className="integration-name">{integration.name}</h3>
                        <span className="integration-plan">{integration.plan}</span>
                      </div>
                    </div>
                    <p className="integration-description">{integration.description}</p>
                    <ul className="integration-features">
                      {integration.features.map((feature, index) => (
                        <li key={index} className="integration-feature">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    <Button 
                      variant={isConnected(integration.id) ? "outline" : "primary"}
                      size="lg"
                      className="btn--full"
                      onClick={() => handleConnect(integration.id)}
                    >
                      {isConnected(integration.id) ? 'Disconnect' : 'Connect'}
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Business Integrations */}
      {(activeCategory === 'All Integrations' || ['E-commerce', 'POS Systems', 'Email Marketing', 'CRM'].includes(activeCategory)) && (
        <section className="business-integrations">
          <div className="container">
            <div className="section-header">
              <h2>Business Tool Integrations</h2>
              <p>Connect your existing business tools to automate review collection</p>
            </div>
            <div className="integrations-grid">
              {businessIntegrations
                .filter(integration => activeCategory === 'All Integrations' || integration.category === activeCategory)
                .map((integration) => (
                <Card key={integration.id} className={`integration-card ${isConnected(integration.id) ? 'integration-card--connected' : ''}`}>
                  {isConnected(integration.id) && <div className="connection-badge">Connected</div>}
                  <Card.Body>
                    <div className="integration-header">
                      <div className="integration-icon">{integration.icon}</div>
                      <div className="integration-info">
                        <h3 className="integration-name">{integration.name}</h3>
                        <span className="integration-plan">{integration.plan}</span>
                      </div>
                    </div>
                    <p className="integration-description">{integration.description}</p>
                    <ul className="integration-features">
                      {integration.features.map((feature, index) => (
                        <li key={index} className="integration-feature">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    <Button 
                      variant={isConnected(integration.id) ? "outline" : "primary"}
                      size="lg"
                      className="btn--full"
                      onClick={() => handleConnect(integration.id)}
                    >
                      {isConnected(integration.id) ? 'Disconnect' : 'Connect'}
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Automation Integrations */}
      {(activeCategory === 'All Integrations' || ['Automation', 'Developer Tools'].includes(activeCategory)) && (
        <section className="automation-integrations">
          <div className="container">
            <div className="section-header">
              <h2>Automation & Developer Tools</h2>
              <p>Advanced integrations for custom workflows and automation</p>
            </div>
            <div className="integrations-grid">
              {automationIntegrations
                .filter(integration => activeCategory === 'All Integrations' || integration.category === activeCategory)
                .map((integration) => (
                <Card key={integration.id} className={`integration-card ${isConnected(integration.id) ? 'integration-card--connected' : ''}`}>
                  {isConnected(integration.id) && <div className="connection-badge">Connected</div>}
                  <Card.Body>
                    <div className="integration-header">
                      <div className="integration-icon">{integration.icon}</div>
                      <div className="integration-info">
                        <h3 className="integration-name">{integration.name}</h3>
                        <span className="integration-plan">{integration.plan}</span>
                      </div>
                    </div>
                    <p className="integration-description">{integration.description}</p>
                    <ul className="integration-features">
                      {integration.features.map((feature, index) => (
                        <li key={index} className="integration-feature">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    <Button 
                      variant={isConnected(integration.id) ? "outline" : "primary"}
                      size="lg"
                      className="btn--full"
                      onClick={() => handleConnect(integration.id)}
                    >
                      {isConnected(integration.id) ? 'Disconnect' : 'Connect'}
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integration Benefits */}
      <section className="integration-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Why Integrate with LocalR.io?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🔄</div>
                  <div className="benefit-text">
                    <h4>Automated Workflows</h4>
                    <p>Set up once and let automation handle review requests and responses</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📊</div>
                  <div className="benefit-text">
                    <h4>Unified Dashboard</h4>
                    <p>See all your review data from multiple platforms in one place</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-text">
                    <h4>Real-time Sync</h4>
                    <p>Get instant notifications and updates across all connected platforms</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🔒</div>
                  <div className="benefit-text">
                    <h4>Secure & Reliable</h4>
                    <p>Enterprise-grade security with 99.9% uptime guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-visual">
              <div className="integration-diagram">
                <div className="center-node">
                  <span className="node-icon">🎯</span>
                  <span className="node-label">LocalR.io</span>
                </div>
                <div className="connected-node node-1">
                  <span className="node-icon">🔍</span>
                  <span className="node-label">Google</span>
                </div>
                <div className="connected-node node-2">
                  <span className="node-icon">📘</span>
                  <span className="node-label">Facebook</span>
                </div>
                <div className="connected-node node-3">
                  <span className="node-icon">🛍️</span>
                  <span className="node-label">Shopify</span>
                </div>
                <div className="connected-node node-4">
                  <span className="node-icon">⚡</span>
                  <span className="node-label">Zapier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="integrations-cta">
        <div className="container">
          <Card className="integrations-cta-card">
            <Card.Body>
              <div className="integrations-cta-content">
                <h2>Need a Custom Integration?</h2>
                <p>
                  Don't see the integration you need? Our team can help you build custom 
                  connections to fit your specific business requirements.
                </p>
                <div className="integrations-cta-buttons">
                  <Button variant="primary" size="lg">
                    Contact Our Team
                  </Button>
                  <Button variant="outline" size="lg">
                    View API Documentation
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Integrations;