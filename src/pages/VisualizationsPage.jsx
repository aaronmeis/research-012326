import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VisualizationsPage.css';

const VisualizationsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/research-012326/unnamed (2).png',
      title: 'Visualization 1'
    },
    {
      src: '/research-012326/unnamed (3).png',
      title: 'Visualization 2'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav">
        <Link to="/" className="breadcrumb-link">
          ← Back to Home
        </Link>
      </nav>

      <header>
        <h1>Visualizations</h1>
        <p className="subtitle">AI Model Visualizations and Charts</p>
      </header>

      <main>
        {/* Images Row */}
        <div className="images-row">
          {images.map((image, index) => (
            <div
              key={index}
              className="image-thumbnail"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.title} />
              <div className="image-overlay">
                <span className="image-title">{image.title}</span>
                <span className="view-icon">🔍 Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualizationsPage;
