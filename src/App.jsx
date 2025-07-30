import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Integrations from './pages/Integrations';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
