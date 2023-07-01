import React from 'react';

import GooglePlay from './logos/GooglePlay.png';
import AppStore from './logos/AppStore.png';
import SPLogo from './logos/splogo.png';
import Instagram from './logos/instagram.png';
import Linkedin from './logos/linkedin.png';
import Facebook from './logos/facebook.png';
import Twitter from './logos/twitter.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-row">
        <div className="footer-column">
          <img src={SPLogo} alt="Logo" className="footer-logo" />
          <p className="footer-text">Your Sports Community App</p>
          <div className="footer-buttons">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={GooglePlay} alt="Google Play" className="footer-button" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={AppStore} alt="App Store" className="footer-button" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Partner with Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="footer-social-icon" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin}alt="LinkedIn" className="footer-social-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-links-row">
          <a href="/faqs">FAQs</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/cancellation-policy">Cancellation Policy</a>
        </div>
        <p className="footer-text">© 2023 Spot &amp; Play. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
