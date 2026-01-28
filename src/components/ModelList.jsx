import React from 'react';
import ModelCard from './ModelCard';

const ModelList = ({ models }) => {
  return (
    <div className="grid">
      {models.map((model, index) => (
        <ModelCard key={model.name} model={model} index={index} />
      ))}
    </div>
  );
};

export default ModelList;
