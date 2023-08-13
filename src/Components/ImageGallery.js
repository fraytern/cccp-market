import React from 'react';
import './image-gallery.css';

const ImageGallery = ({ products }) => {
  return (
    <div className="image-gallery">
      {products.map((product, index) => (
        <div key={index} className="image-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
