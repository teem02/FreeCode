import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Contact form submitted:', formData);
      // Show success message or redirect
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@localr.io',
      action: 'Send Email'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 9 AM - 6 PM EST',
      action: 'Start Chat'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: '📚',
      title: 'Help Center',
      description: 'Browse our comprehensive knowledge base',
      contact: 'Self-service resources',
      action: 'Visit Help Center'
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'features', name: 'Features' },
    { id: 'billing', name: 'Billing' },
    { id: 'integrations', name: 'Integrations' },
    { id: 'troubleshooting', name: 'Troubleshooting' }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I get started with LocalR.io?',
      answer: 'Getting started is easy! Sign up for a free account, connect your Google Business Profile, and LocalR.io will start monitoring your reviews automatically. Our onboarding wizard will guide you through the setup process in just 5 minutes.'
    },
    {
      category: 'getting-started',
      question: 'Do I need technical knowledge to use LocalR.io?',
      answer: 'Not at all! LocalR.io is designed to be user-friendly for business owners of all technical levels. Our intuitive interface and guided setup make it easy to start improving your online reputation right away.'
    },
    {
      category: 'features',
      question: 'How does the AI response feature work?',
      answer: 'Our AI analyzes each review and generates professional, personalized responses that match your brand voice. You can review and edit responses before they\'re posted, or set up automatic posting for certain types of reviews.'
    },
    {
      category: 'features',
      question: 'Can I customize the AI responses to match my brand voice?',
      answer: 'Yes! Our Pro and Agency plans include brand voice training. You can provide examples of your preferred responses, and our AI will learn to match your tone, style, and messaging preferences.'
    },
    {
      category: 'features',
      question: 'How do review requests work?',
      answer: 'LocalR.io can automatically send personalized review requests via email or SMS to customers after a purchase or interaction. Our smart timing feature identifies the best moments to ask for reviews to maximize response rates.'
    },
    {
      category: 'billing',
      question: 'Can I change or cancel my plan anytime?',
      answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes will be reflected in your next billing cycle, and we offer prorated billing for upgrades.'
    },
    {
      category: 'billing',
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day free trial so you can test all features before committing. If you\'re not satisfied within the first 30 days of your paid subscription, we\'ll provide a full refund.'
    },
    {
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely through Stripe with bank-level encryption.'
    },
    {
      category: 'integrations',
      question: 'Which review platforms do you support?',
      answer: 'We support Google Business Profile, Facebook, Yelp, and many other platforms. Our Pro and Agency plans include additional platform integrations and custom API access for other review sources.'
    },
    {
      category: 'integrations',
      question: 'How do I connect my Google Business Profile?',
      answer: 'During signup, you\'ll be prompted to connect your Google Business Profile. Simply click "Connect Google" and authorize LocalR.io to access your business information. The process takes less than 2 minutes.'
    },
    {
      category: 'integrations',
      question: 'Can LocalR.io integrate with my existing CRM or POS system?',
      answer: 'Yes! We offer integrations with popular CRM and POS systems like Salesforce, HubSpot, Square, and many others. We also provide Zapier integration and custom API access for unique setups.'
    },
    {
      category: 'troubleshooting',
      question: 'My reviews aren\'t showing up in the dashboard. What should I do?',
      answer: 'First, make sure your Google Business Profile is properly connected. Reviews typically sync within 15 minutes, but initial setup can take up to 24 hours. If you\'re still having issues, contact our support team.'
    },
    {
      category: 'troubleshooting',
      question: 'Why isn\'t the AI generating responses?',
      answer: 'AI response generation requires an active Pro or Agency subscription. Also, check that you haven\'t reached your monthly review limit and that AI responses are enabled in your settings.'
    },
    {
      category: 'troubleshooting',
      question: 'I\'m not receiving review request notifications. How can I fix this?',
      answer: 'Check your notification settings in your account dashboard. Also verify that our emails aren\'t going to your spam folder and add support@localr.io to your contacts.'
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content animate-fade-in">
            <h1 className="contact-hero__title">
              Get Help & <span className="text-accent">Support</span>
            </h1>
            <p className="contact-hero__subtitle">
              We're here to help you succeed. Get in touch with our team or find answers in our FAQ.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="section-header">
            <h2>How Can We Help You?</h2>
            <p>Choose the best way to get in touch with our support team</p>
          </div>
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <Card key={index} className="contact-method-card" hover>
                <Card.Body>
                  <div className="method-icon">{method.icon}</div>
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-description">{method.description}</p>
                  <div className="method-contact">{method.contact}</div>
                  <Button variant="outline" size="sm" className="method-button">
                    {method.action}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-content">
              <Card className="contact-form-card">
                <Card.Header>
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </Card.Header>
                <Card.Body>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <Input
                        type="text"
                        name="name"
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        label="Email Address"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-row">
                      <Input
                        type="text"
                        name="company"
                        label="Company Name"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <Input
                        type="tel"
                        name="phone"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-row">
                      <Input
                        type="text"
                        name="subject"
                        label="Subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <div className="priority-select">
                        <label className="input-label">Priority</label>
                        <select 
                          name="priority" 
                          value={formData.priority}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>

                    <div className="message-field">
                      <label className="input-label">Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell us more about your question or issue..."
                        value={formData.message}
                        onChange={handleChange}
                        className="input input--textarea"
                        rows="6"
                        required
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="btn--full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="loading-dots">
                          <span>Sending message</span>
                          <span>.</span>
                          <span>.</span>
                          <span>.</span>
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </div>

            <div className="contact-info">
              <h3>Other Ways to Reach Us</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Office Address</strong>
                    <p>123 Business Avenue<br />Suite 456<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="info-icon">🕒</span>
                  <div>
                    <strong>Business Hours</strong>
                    <p>Monday - Friday: 9 AM - 6 PM EST<br />Saturday: 10 AM - 4 PM EST<br />Sunday: Closed</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="info-icon">⚡</span>
                  <div>
                    <strong>Response Time</strong>
                    <p>Email: Within 24 hours<br />Live Chat: Immediate<br />Phone: Immediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions about LocalR.io</p>
          </div>

          {/* FAQ Categories */}
          <div className="faq-categories">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className={`faq-category ${activeCategory === category.id ? 'faq-category--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="faq-list">
            {filteredFaqs.map((faq, index) => (
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

      {/* Chatbot Placeholder */}
      <div className="chatbot-widget">
        <Button variant="primary" className="chatbot-trigger">
          💬 Chat with AI Assistant
        </Button>
      </div>
    </div>
  );
};

export default Contact;