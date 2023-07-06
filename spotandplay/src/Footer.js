import React from 'react';

import GooglePlay from './logos/GooglePlay.png';
import AppStore from './logos/AppStore.png';
import SPLogo from './logos/splogo.png';
import Instagram from './logos/instagram_color.png';
import Linkedin from './logos/linkedin_color.png';
import Facebook from './logos/fb_color.png';
import Twitter from './logos/twitter_color.png'
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
        <div class="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
          <ul className="footer-links">
            <li>Home</li>     
            <li>About us</li>
            <li>Our Services</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-column">
        <div class="footer-widget-followus">
              <h3>Follow us</h3>
            </div>      
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
      <div className='copyright-text'>
      <div className="footer-row2">
        <p className="footer-text">© 2023 Spot &amp; Play. All Rights Reserved.</p>
        <div className="footer-links-row">
          <a href="/home">Home</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/policy">Policy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
