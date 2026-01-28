import React from 'react';

const ModelCard = ({ model, index }) => {
  return (
    <div className="card">
      <h5 className="card-title">{model.name}</h5>
      <ul className="list-group">
        {Object.entries(model.specs).map(([key, value]) => (
          <li key={key} className="list-group-item">
            <strong>{key}:</strong>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelCard;
