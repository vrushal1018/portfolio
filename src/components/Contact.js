import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xkgzngnl", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <section id="contact" className="contact-section fade-in">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent.
            </div>
          )}

          {error && (
            <div className="error-message">
              ❌ Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
