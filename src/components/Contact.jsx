// src/components/Contact.jsx
import React, { useState } from 'react';
import '../css/header.css'; // assumes .container and form styles live here or import a dedicated css

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.';
    if (!form.email.trim()) return 'Email is required.';
    // simple email regex
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(form.email)) return 'Email is invalid.';
    if (!form.message.trim()) return 'Message is required.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err);
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMsg('');

    try {
      // TODO: replace URL with your real endpoint or integrate service (e.g., Formspree, Netlify Forms, custom API)
      // Example placeholder using fetch:
      /*
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!resp.ok) throw new Error('Network response was not ok');
      */

      // Simulate success delay
      await new Promise(r => setTimeout(r, 600));
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Failed to send. Try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="section-box" style={{ padding: '1.5rem', marginTop: '1rem' }}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Name"
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Email"
              />
            </label>

            <label>
              Message:
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Message"
              />
            </label>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--gold)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: 'var(--dark)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <span aria-live="polite" style={{ color: 'limegreen' }}>
                  Message sent!
                </span>
              )}
              {status === 'error' && errorMsg && (
                <span aria-live="assertive" style={{ color: '#f66' }}>
                  {errorMsg}
                </span>
              )}
            </div>
          </form>

          <div className="social-links" style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/nicurrego" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/img/github.png" alt="GitHub" width={32} height={32} />
            </a>
            <a href="https://linkedin.com/in/nicurrego" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/img/in.png" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="https://instagram.com/nicurrego" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/img/instagram.png" alt="Instagram" width={32} height={32} />
            </a>
            <a href="mailto:contact@nicurrego@gmail.com" aria-label="Email">
              <img src="/img/email.png" alt="Email" width={32} height={32} />
            </a>
          </div>

          <div className="footer-credit" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p>&copy; 2025 Nicolas Urrego. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
