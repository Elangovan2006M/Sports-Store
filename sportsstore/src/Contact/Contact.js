import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-text">Contact Us</h1>
        <p className="contact-description">Get in touch with us for any queries or support.</p>
      </div>
      <div className="contact-socialmedia">
        <div className="connect-links">
          <a href="https://www.linkedin.com/in/elangovan-m-001527290">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" height="50px" style={{ padding: '0 20px' }}/>
            <p className='contact-names'>LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/omnivert.yo?igsh=ZTJvdWhmeXp3aWJy">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height="50px" style={{ padding: '0 20px' }}/>
            <p className='contact-names'>Instagram</p>
          </a>
          <a href="mailto:elangovan2006m@gmail.com">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" height="50px" style={{ padding: '0 20px' }} />
            <p className='contact-names'>Mail</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
