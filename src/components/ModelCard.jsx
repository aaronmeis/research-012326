import React from 'react';

const ModelCard = ({ model }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{model.name}</h5>
        <div className="mt-auto">
          <ul className="list-group list-group-flush">
            {Object.entries(model.specs).map(([key, value]) => (
              <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                <strong>{key}:</strong>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
