import { useState, useEffect } from 'react';
import modelData from './data/models.json';
import TierSelector from './components/TierSelector';
import ModelList from './components/ModelList';
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

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4">Model Specifications</h1>
        <p className="lead text-muted">A professional comparison of our model tiers.</p>
        <p className="text-muted"><em>As of {asOfDate}</em></p>
      </header>
      <main>
        <div className="d-flex justify-content-center">
          <TierSelector
            tiers={tiers}
            selectedTier={selectedTier}
            onSelectTier={setSelectedTier}
          />
        </div>
        <div className="tier-description text-center text-muted my-4">
          <p>{tierDescription}</p>
        </div>
        <ModelList models={models} />
      </main>
      <footer className="text-center mt-5 py-3">
        <p className="text-muted">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
