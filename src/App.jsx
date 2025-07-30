import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper';
import Home from './pages/Home';
import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Placeholder routes - will be implemented next */}
          <Route path="/features" element={<div className="container p-8"><h1>Features - Coming Soon</h1></div>} />
          <Route path="/pricing" element={<div className="container p-8"><h1>Pricing - Coming Soon</h1></div>} />
          <Route path="/contact" element={<div className="container p-8"><h1>Contact - Coming Soon</h1></div>} />
          <Route path="/login" element={<div className="container p-8"><h1>Login - Coming Soon</h1></div>} />
          <Route path="/signup" element={<div className="container p-8"><h1>Signup - Coming Soon</h1></div>} />
          <Route path="/dashboard" element={<div className="container p-8"><h1>Dashboard - Coming Soon</h1></div>} />
          <Route path="/integrations" element={<div className="container p-8"><h1>Integrations - Coming Soon</h1></div>} />
          <Route path="/privacy" element={<div className="container p-8"><h1>Privacy Policy - Coming Soon</h1></div>} />
          <Route path="/terms" element={<div className="container p-8"><h1>Terms of Service - Coming Soon</h1></div>} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
