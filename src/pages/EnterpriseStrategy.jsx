import React from 'react';
import { Link } from 'react-router-dom';
import './EnterpriseStrategy.css';

const EnterpriseStrategy = () => {
  return (
    <div className="container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav">
        <Link to="/" className="breadcrumb-link">
          ← Back to Home
        </Link>
      </nav>

      <header className="pdf-header">
        <h1>Enterprise AI Strategy 2026</h1>
        <p className="subtitle">Strategic Guide for Enterprise AI Implementation</p>
      </header>

      <main className="pdf-viewer-container">
        <div className="pdf-wrapper">
          <iframe
            src="/research-012326/Enterprise_AI_Strategy_2026.pdf"
            title="Enterprise AI Strategy 2026"
            className="pdf-viewer"
          >
            <p>
              Your browser does not support PDFs. 
              <a href="/research-012326/Enterprise_AI_Strategy_2026.pdf" download>
                Download the PDF instead
              </a>
            </p>
          </iframe>
        </div>
        
        <div className="pdf-actions">
          <a
            href="/research-012326/Enterprise_AI_Strategy_2026.pdf"
            download
            className="download-btn"
          >
            📥 Download PDF
          </a>
        </div>
      </main>
    </div>
  );
};

export default EnterpriseStrategy;
