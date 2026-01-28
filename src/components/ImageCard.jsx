import React from 'react';

const ImageCard = ({ image, title }) => {
  return (
    <div className="image-card">
      <div className="image-card-content">
        {title && <h5 className="image-card-title">{title}</h5>}
        <div className="image-wrapper">
          <img src={image} alt={title || 'Image'} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
