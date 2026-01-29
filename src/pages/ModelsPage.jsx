import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import modelData from '../data/models.json';
import TierSelector from '../components/TierSelector';
import ModelList from '../components/ModelList';
import './ModelsPage.css';

const ModelsPage = () => {
  const [selectedTier, setSelectedTier] = useState('enterprise');
  const [models, setModels] = useState([]);
  const [tierDescription, setTierDescription] = useState('');

  useEffect(() => {
    setModels(modelData[selectedTier].models);
    setTierDescription(modelData[selectedTier].description);
  }, [selectedTier]);

  const tiers = Object.keys(modelData);

  return (
    <div className="container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav">
        <Link to="/" className="breadcrumb-link">
          ← Back to Home
        </Link>
      </nav>

      <header>
        <h1>AI Models</h1>
        <p className="subtitle">Browse models by tier</p>
      </header>

      <main>
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
    </div>
  );
};

export default ModelsPage;
