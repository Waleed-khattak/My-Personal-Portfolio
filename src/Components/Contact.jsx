import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setSubmittedName(name);
      setShowModal(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setName('');
  };

  return (
    <section id="contact" className="contact container" data-aos="fade-up">
      <h2 className='section-title' data-aos="fade-down" data-aos-delay="100">Contact Me</h2>
      <div className="contact-form" data-aos="fade-up" data-aos-delay="200">
        <form id="contact-form" onSubmit={handleSubmit}>
          <h3 style={{ color: 'black', marginBottom: '20px', fontSize: '27px' }} data-aos="zoom-in" data-aos-delay="300">Let's Get in Touch</h3>

          <label htmlFor="name" data-aos="zoom-in" data-aos-delay="400">Name: </label>
          <input
            type="text"
            name='name'
            value={name}
            id='name'
            placeholder='Enter name...'
            onChange={(e) => setName(e.target.value)}
            required
            data-aos="zoom-in"
            data-aos-delay="450"
          />

          <label htmlFor="email" data-aos="zoom-in" data-aos-delay="500">Email: </label>
          <input
            type="text"
            name='email'
            value={email}
            id='email'
            placeholder='Enter email...'
            onChange={(e) => setEmail(e.target.value)}
            required
            data-aos="zoom-in"
            data-aos-delay="550"
          />

          <label htmlFor="message" data-aos="zoom-in" data-aos-delay="600">Message: </label>
          <textarea
            name="message"
            id="message"
            value={message}
            cols={30}
            rows={2}
            placeholder='Feel free to ask anything'
            onChange={(e) => setMessage(e.target.value)}
            required
            data-aos="zoom-in"
            data-aos-delay="650"
          />

          <input
            type="submit"
            value='submit'
            id="submit"
            data-aos="fade-up"
            data-aos-delay="700"
          />
        </form>
      </div>

      {showModal && (
        <div style={styles.overlay} data-aos="zoom-in">
          <div style={styles.modal}>
            <h3 style={{ marginBottom: '20px' }}>
              Thank you for your message, {submittedName}!
            </h3>
            <button className='close' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: 30,
    margin: 22,
    borderRadius: 10,
    textAlign: 'center',
    minWidth: 300,
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)'
  }
};

export default Contact;
