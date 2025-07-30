import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for small businesses getting started',
      price: { monthly: 0, yearly: 0 },
      features: [
        'Up to 25 reviews per month',
        'Basic AI response templates',
        'Email review requests',
        'Basic analytics dashboard',
        'Google Business Profile integration',
        'Email support'
      ],
      limitations: [
        'Limited customization',
        'Basic reporting only',
        'No team collaboration'
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Best for growing businesses that want more control',
      price: { monthly: 49, yearly: 490 },
      features: [
        'Up to 500 reviews per month',
        'Advanced AI responses with brand voice training',
        'SMS & Email review requests',
        'Advanced analytics & competitor tracking',
        'All platform integrations (Google, Facebook, Yelp)',
        'Custom response templates',
        'Review request automation',
        'Priority email support',
        'Team collaboration (up to 3 users)'
      ],
      limitations: [],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'primary',
      popular: true,
      savings: isYearly ? 'Save $98/year' : null
    },
    {
      name: 'Agency',
      description: 'For agencies managing multiple client accounts',
      price: { monthly: 149, yearly: 1490 },
      features: [
        'Unlimited reviews',
        'White-label solution',
        'Advanced AI with custom training',
        'Multi-location management',
        'All integrations + API access',
        'Custom branding & templates',
        'Advanced automation workflows',
        'Dedicated account manager',
        'Unlimited team members',
        'Custom reporting & dashboards',
        'Priority phone & email support'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonVariant: 'accent',
      popular: false,
      savings: isYearly ? 'Save $298/year' : null
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Review Management',
      features: [
        { name: 'Monthly review limit', free: '25', pro: '500', agency: 'Unlimited' },
        { name: 'AI response generation', free: 'Basic', pro: 'Advanced', agency: 'Custom trained' },
        { name: 'Response templates', free: '5 basic', pro: 'Unlimited custom', agency: 'Unlimited + white-label' },
        { name: 'Review monitoring', free: '✓', pro: '✓', agency: '✓' },
        { name: 'Sentiment analysis', free: 'Basic', pro: 'Advanced', agency: 'Advanced + trends' }
      ]
    },
    {
      category: 'Review Requests',
      features: [
        { name: 'Email requests', free: '✓', pro: '✓', agency: '✓' },
        { name: 'SMS requests', free: '✗', pro: '✓', agency: '✓' },
        { name: 'Automated timing', free: 'Basic', pro: 'Smart AI timing', agency: 'Advanced + A/B testing' },
        { name: 'Personalization', free: 'Basic', pro: 'Advanced', agency: 'Fully custom' },
        { name: 'Multi-language support', free: '✗', pro: '5 languages', agency: 'Unlimited' }
      ]
    },
    {
      category: 'Analytics & Reporting',
      features: [
        { name: 'Basic analytics', free: '✓', pro: '✓', agency: '✓' },
        { name: 'Competitor tracking', free: '✗', pro: '✓', agency: '✓' },
        { name: 'Custom reports', free: '✗', pro: 'Monthly', agency: 'Real-time + custom' },
        { name: 'ROI tracking', free: '✗', pro: '✓', agency: 'Advanced + attribution' },
        { name: 'White-label reports', free: '✗', pro: '✗', agency: '✓' }
      ]
    },
    {
      category: 'Integrations & API',
      features: [
        { name: 'Google Business Profile', free: '✓', pro: '✓', agency: '✓' },
        { name: 'Facebook & Yelp', free: '✗', pro: '✓', agency: '✓' },
        { name: 'CRM integrations', free: '✗', pro: '5 popular CRMs', agency: 'Unlimited + custom' },
        { name: 'API access', free: '✗', pro: 'Limited', agency: 'Full access' },
        { name: 'Zapier integration', free: '✗', pro: '✓', agency: '✓' }
      ]
    },
    {
      category: 'Support & Team',
      features: [
        { name: 'Support channels', free: 'Email only', pro: 'Email + chat', agency: 'Phone + dedicated manager' },
        { name: 'Response time', free: '48 hours', pro: '24 hours', agency: '4 hours' },
        { name: 'Team members', free: '1', pro: '3', agency: 'Unlimited' },
        { name: 'Training & onboarding', free: 'Self-service', pro: 'Guided setup', agency: 'White-glove onboarding' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.'
    },
    {
      question: 'What happens if I exceed my review limit?',
      answer: 'If you exceed your monthly review limit, we\'ll send you a notification. You can either upgrade your plan or additional reviews will be processed at $0.50 per review.'
    },
    {
      question: 'Do you offer custom enterprise plans?',
      answer: 'Absolutely! For businesses with unique needs or high volume requirements, we offer custom enterprise plans. Contact our sales team for a personalized quote.'
    },
    {
      question: 'Is there a contract or can I cancel anytime?',
      answer: 'No contracts required! All plans are month-to-month and you can cancel anytime. Annual plans offer savings but can still be cancelled with 30 days notice.'
    },
    {
      question: 'What integrations are included?',
      answer: 'All plans include Google Business Profile. Pro and Agency plans include Facebook, Yelp, and popular CRM integrations. Agency plans get API access for custom integrations.'
    },
    {
      question: 'How does the free trial work?',
      answer: 'All paid plans come with a 14-day free trial. No credit card required to start. You can access all features during the trial period.'
    }
  ];

  return (
    <div className="pricing">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero__content animate-fade-in">
            <h1 className="pricing-hero__title">
              Simple, Transparent <span className="text-accent">Pricing</span>
            </h1>
            <p className="pricing-hero__subtitle">
              Choose the perfect plan for your business. Start free, upgrade as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="billing-toggle">
              <span className={`billing-option ${!isYearly ? 'billing-option--active' : ''}`}>
                Monthly
              </span>
              <button 
                className="toggle-switch"
                onClick={() => setIsYearly(!isYearly)}
                aria-label="Toggle billing period"
              >
                <span className={`toggle-slider ${isYearly ? 'toggle-slider--active' : ''}`}></span>
              </button>
              <span className={`billing-option ${isYearly ? 'billing-option--active' : ''}`}>
                Yearly
                <span className="savings-badge">Save 20%</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <Card key={index} className={`plan-card ${plan.popular ? 'plan-card--popular' : ''}`}>
                {plan.popular && <div className="plan-badge">Most Popular</div>}
                <Card.Header>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-price">
                    <span className="price-amount">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="price-period">
                      {plan.price.monthly === 0 ? '' : `/${isYearly ? 'year' : 'month'}`}
                    </span>
                  </div>
                  {plan.savings && isYearly && (
                    <div className="plan-savings">{plan.savings}</div>
                  )}
                </Card.Header>
                <Card.Body>
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="plan-feature">
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation, i) => (
                      <li key={i} className="plan-limitation">
                        <span className="limitation-icon">✗</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Link to={plan.name === 'Agency' ? '/contact' : '/signup'}>
                    <Button 
                      variant={plan.buttonVariant} 
                      size="lg" 
                      className="btn--full"
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="feature-comparison">
        <div className="container">
          <div className="section-header">
            <h2>Detailed Feature Comparison</h2>
            <p>See exactly what's included in each plan</p>
          </div>
          
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="feature-column-header">Features</div>
              <div className="plan-column-header">Free</div>
              <div className="plan-column-header plan-column--popular">Pro</div>
              <div className="plan-column-header">Agency</div>
            </div>
            
            {comparisonFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="comparison-category">
                <div className="category-title" colSpan="4">{category.category}</div>
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="comparison-row">
                    <div className="feature-name">{feature.name}</div>
                    <div className="feature-value">{feature.free}</div>
                    <div className="feature-value feature-value--popular">{feature.pro}</div>
                    <div className="feature-value">{feature.agency}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our pricing</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <Card key={index} className="faq-card">
                <Card.Body>
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta">
        <div className="container">
          <Card className="pricing-cta-card">
            <Card.Body>
              <div className="pricing-cta-content">
                <h2>Ready to Get Started?</h2>
                <p>Join thousands of businesses improving their online reputation with LocalR.io</p>
                <div className="pricing-cta-buttons">
                  <Link to="/signup">
                    <Button variant="primary" size="lg">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                <p className="pricing-cta-note">
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;