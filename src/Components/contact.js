import React, { useState } from 'react';
import './contact.css';
import Navbar from './navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(process.env.REACT_APP_FORMSPREE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      window.location.reload(); // Reload the page
    } else {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <div className="map-container">
        <iframe
            title="Restaurant Location"
            width="50%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-AOzGgZ3Ufo3Uy3IhsBeefGrjQsgYTVc&q=2304+Coit+Road+Suite+660+Plano+TX+75075`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="contact-form">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
