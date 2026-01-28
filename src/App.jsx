import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import modelData from './data/models.json';
import TierSelector from './components/TierSelector';
import ModelList from './components/ModelList';
import ImageCard from './components/ImageCard';
import EnterpriseStrategy from './pages/EnterpriseStrategy';
import './App.css';

function App() {
  const [selectedTier, setSelectedTier] = useState('enterprise');
  const [models, setModels] = useState([]);
  const [tierDescription, setTierDescription] = useState('');

  useEffect(() => {
    setModels(modelData[selectedTier].models);
    setTierDescription(modelData[selectedTier].description);
  }, [selectedTier]);

  const tiers = Object.keys(modelData);
  const asOfDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const images = [
    {
      src: '/research-012326/unnamed (2).png',
      title: 'Image 1'
    },
    {
      src: '/research-012326/unnamed (3).png',
      title: 'Image 2'
    }
  ];

  return (
    <Routes>
      <Route path="/enterprise-strategy" element={<EnterpriseStrategy />} />
      <Route path="/" element={
        <div className="container">
          <header>
            <h1>AI Agents & Models</h1>
            <p className="subtitle">Current State - January 2026</p>
            <p className="text-muted"><em>As of {asOfDate}</em></p>
          </header>
          <main>
            {/* Enterprise Strategy Link */}
            <section className="enterprise-strategy-section">
              <Link to="/enterprise-strategy" className="enterprise-strategy-card">
                <div className="enterprise-strategy-content">
                  <h3>📊 Enterprise AI Strategy 2026</h3>
                  <p>View the comprehensive strategic guide for Enterprise AI implementation</p>
                  <span className="enterprise-strategy-arrow">View Strategy →</span>
                </div>
              </Link>
            </section>

            {/* Image Cards Section */}
            <section className="images-section">
              <h2 className="section-title">Visualizations</h2>
              <div className="images-grid">
                {images.map((image, index) => (
                  <ImageCard key={index} image={image.src} title={image.title} />
                ))}
              </div>
            </section>

            <TierSelector
              tiers={tiers}
              selectedTier={selectedTier}
              onSelectTier={setSelectedTier}
            />
            {tierDescription && (
              <div className="tier-description">
                <p>{tierDescription}</p>
              </div>
            )}
            <ModelList models={models} />
          </main>
          <footer>
            <p>&copy; {new Date().getFullYear()} AI Research. All rights reserved.</p>
          </footer>
        </div>
      } />
    </Routes>
  );
}

export default App;
