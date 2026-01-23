import React from 'react';
import ModelCard from './ModelCard';

const ModelList = ({ models }) => {
  return (
    <div className="row g-4">
      {models.map((model) => (
        <div key={model.name} className="col-md-6 col-lg-4">
          <ModelCard model={model} />
        </div>
      ))}
    </div>
  );
};

export default ModelList;
