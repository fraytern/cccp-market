import React from 'react';
import './our-products.css';
import ImageGallery from './ImageGallery';
import pelmeni from './pelmeni.jpg';
import borscht from './borsht.jpg';
import syrniki from './syrniki.jpg';
import olivie from './olivie.jpg'
import blini from './blini.jpg'
import medovik from './medovik.jpg'
import Navbar from './navbar';
import Footer from './Footer';

const OurProducts = () => {
  const products = [
    { name: 'Pelmeni', image: pelmeni },
    { name: 'Borscht', image: borscht },
    { name: 'Syrniki', image: syrniki },
    { name: 'Olivier', image: olivie },
    { name: 'Blini', image: blini },
    { name: 'Medovik', image: medovik },
  ];

  return (
    <div className="our-products-container">
      <Navbar />
      <h1>Our Products</h1>
      <ImageGallery products={products} />
    </div>
  );
}

export default OurProducts;
