import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import './Auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Basic Info, 2: Business Info, 3: Google Business Profile

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (step < 3) {
        setStep(step + 1);
      } else {
        console.log('Signup complete:', formData);
        // Redirect to dashboard would happen here
      }
    }, 2000);
  };

  const handleGoogleSignup = () => {
    console.log('Google OAuth signup initiated');
    // Google OAuth flow would be triggered here
  };

  const handleGoogleBusinessConnect = () => {
    console.log('Google Business Profile connection initiated');
    // Google Business Profile OAuth flow would be triggered here
    setStep(3);
  };

  const skipGoogleBusiness = () => {
    console.log('Skipping Google Business Profile integration');
    // Redirect to dashboard
  };

  const renderStep1 = () => (
    <>
      <Card.Header>
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <span className="auth-logo-text">LocalR.io</span>
          </Link>
          <h1 className="auth-title">Create Your Account</h1>
          <p className="auth-subtitle">Join thousands of businesses improving their reputation</p>
        </div>
      </Card.Header>
      
      <Card.Body>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
            <Input
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          
          <Input
            type="email"
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="terms-agreement">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>
                I agree to the{' '}
                <Link to="/terms" className="auth-link">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="auth-link">Privacy Policy</Link>
              </span>
            </label>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            className="btn--full"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-dots">
                <span>Creating account</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            ) : (
              'Continue'
            )}
          </Button>

          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          <Button 
            type="button"
            variant="outline" 
            size="lg" 
            className="btn--full google-btn"
            onClick={handleGoogleSignup}
          >
            <span className="google-icon">🔍</span>
            Continue with Google
          </Button>
        </form>
      </Card.Body>

      <Card.Footer>
        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </Card.Footer>
    </>
  );

  const renderStep2 = () => (
    <>
      <Card.Header>
        <div className="auth-header">
          <div className="step-indicator">
            <span className="step-number">2</span>
            <span className="step-title">Business Information</span>
          </div>
          <h1 className="auth-title">Tell Us About Your Business</h1>
          <p className="auth-subtitle">Help us personalize your experience</p>
        </div>
      </Card.Header>
      
      <Card.Body>
        <form onSubmit={handleSubmit} className="auth-form">
          <Input
            type="text"
            name="businessName"
            label="Business Name"
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
          
          <Input
            type="tel"
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <div className="business-type">
            <label className="input-label">Business Type</label>
            <select className="input" name="businessType" required>
              <option value="">Select your business type</option>
              <option value="restaurant">Restaurant</option>
              <option value="retail">Retail Store</option>
              <option value="service">Service Provider</option>
              <option value="healthcare">Healthcare</option>
              <option value="automotive">Automotive</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-actions">
            <Button 
              type="button"
              variant="ghost" 
              size="lg" 
              className="btn--full"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="btn--full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading-dots">
                  <span>Setting up</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              ) : (
                'Continue'
              )}
            </Button>
          </div>
        </form>
      </Card.Body>
    </>
  );

  const renderStep3 = () => (
    <>
      <Card.Header>
        <div className="auth-header">
          <div className="step-indicator">
            <span className="step-number">3</span>
            <span className="step-title">Connect Google Business Profile</span>
          </div>
          <h1 className="auth-title">Connect Your Google Business Profile</h1>
          <p className="auth-subtitle">Link your Google Business Profile to start managing reviews automatically</p>
        </div>
      </Card.Header>
      
      <Card.Body>
        <div className="google-business-setup">
          <div className="integration-preview">
            <div className="integration-icon">🔍</div>
            <h3>Google Business Profile</h3>
            <p>
              Connecting your Google Business Profile allows LocalR.io to automatically monitor 
              and respond to your Google reviews, request reviews from customers, and provide 
              detailed analytics.
            </p>
          </div>

          <div className="benefits-preview">
            <h4>What you'll get:</h4>
            <ul>
              <li>✓ Automatic review monitoring</li>
              <li>✓ AI-powered response generation</li>
              <li>✓ Review request automation</li>
              <li>✓ Detailed analytics and insights</li>
            </ul>
          </div>

          <div className="auth-actions">
            <Button 
              variant="primary" 
              size="lg" 
              className="btn--full"
              onClick={handleGoogleBusinessConnect}
            >
              <span className="google-icon">🔍</span>
              Connect Google Business Profile
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="btn--full"
              onClick={skipGoogleBusiness}
            >
              Skip for now (can connect later)
            </Button>
          </div>
        </div>
      </Card.Body>
    </>
  );

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <Card className="auth-card auth-card--wide">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </Card>

          {step === 1 && (
            <div className="auth-benefits">
              <h2>Join 10,000+ Local Businesses</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">⭐</div>
                  <div className="benefit-text">
                    <h4>More Positive Reviews</h4>
                    <p>Increase reviews by 300% on average</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🤖</div>
                  <div className="benefit-text">
                    <h4>AI-Powered Responses</h4>
                    <p>Professional responses in your brand voice</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📈</div>
                  <div className="benefit-text">
                    <h4>Better Local Rankings</h4>
                    <p>Improve visibility in local search results</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;