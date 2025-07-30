import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

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
      console.log('Login attempt:', formData);
      // Redirect to dashboard would happen here
    }, 2000);
  };

  const handleGoogleLogin = () => {
    console.log('Google OAuth login initiated');
    // Google OAuth flow would be triggered here
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <Card className="auth-card">
            <Card.Header>
              <div className="auth-header">
                <Link to="/" className="auth-logo">
                  <span className="auth-logo-text">LocalR.io</span>
                </Link>
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">Sign in to your account to continue</p>
              </div>
            </Card.Header>
            
            <Card.Body>
              <form onSubmit={handleSubmit} className="auth-form">
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <div className="auth-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="forgot-password">
                    Forgot password?
                  </Link>
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
                      <span>Signing in</span>
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  ) : (
                    'Sign In'
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
                  onClick={handleGoogleLogin}
                >
                  <span className="google-icon">🔍</span>
                  Continue with Google
                </Button>
              </form>
            </Card.Body>

            <Card.Footer>
              <div className="auth-footer">
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup" className="auth-link">
                    Sign up for free
                  </Link>
                </p>
              </div>
            </Card.Footer>
          </Card>

          <div className="auth-benefits">
            <h2>Why Choose LocalR.io?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <div className="benefit-text">
                  <h4>Quick Setup</h4>
                  <p>Get started in just 5 minutes</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🤖</div>
                <div className="benefit-text">
                  <h4>AI-Powered</h4>
                  <p>Smart automation for better results</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📈</div>
                <div className="benefit-text">
                  <h4>Proven Results</h4>
                  <p>300% increase in positive reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;