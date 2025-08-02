// src/components/Contact.jsx
import { useState } from 'react';
import styles from '../css/Contact.module.css';

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
      // placeholder for real submission
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
    <section id="contact" className={styles.contactSection} aria-label="Contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.sectionBox}>
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <label className={styles.label}>
              Name:
              <input
                className={styles.input}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Name"
              />
            </label>

            <label className={styles.label}>
              Email:
              <input
                className={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Email"
              />
            </label>

            <label className={styles.label}>
              Message:
              <textarea
                className={styles.textarea}
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Message"
              />
            </label>

            <div className={styles.actions}>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={styles.submitButton}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <span className={`${styles.statusMessage} ${styles.success}`} aria-live="polite">
                  Message sent!
                </span>
              )}
              {status === 'error' && errorMsg && (
                <span className={`${styles.statusMessage} ${styles.error}`} aria-live="assertive">
                  {errorMsg}
                </span>
              )}
            </div>
          </form>

          <div className={styles.socialLinks}>
            <a
              className={styles.socialLink}
              href="https://github.com/nicurrego"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src="./github.png" alt="GitHub" width={24} height={24} />
            </a>
            <a
              className={styles.socialLink}
              href="https://linkedin.com/in/nicurrego"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="./in.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a
              className={styles.socialLink}
              href="https://instagram.com/nicurrego"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="./instagram.png" alt="Instagram" width={24} height={24} />
            </a>
            <a
              className={styles.socialLink}
              href="mailto:contact@nicurrego@gmail.com"
              aria-label="Email"
            >
              <img src="./email.png" alt="Email" width={24} height={24} />
            </a>
          </div>

          <div className={styles.footerCredit}>
            <p>&copy; 2025 Nicolas Urrego. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
