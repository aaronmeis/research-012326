import React from 'react';

const TierSelector = ({ tiers, selectedTier, onSelectTier }) => {
  return (
    <div className="tier-selector btn-group my-4" role="group" aria-label="Select Model Tier">
      {tiers.map((tier) => (
        <button
          key={tier}
          type="button"
          className={`btn ${selectedTier === tier ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => onSelectTier(tier)}
        >
          {tier.charAt(0).toUpperCase() + tier.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TierSelector;
