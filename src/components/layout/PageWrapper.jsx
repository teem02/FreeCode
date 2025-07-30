import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './PageWrapper.css';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <div className={`page-wrapper ${className}`}>
      <Header />
      <main className="page-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;