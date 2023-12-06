import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <a href="/features" className="footer-link">Documentation</a>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com" className="social-link">
            {/* Insert Twitter Icon Here */}
          </a>
          <a href="https://facebook.com" className="social-link">
            {/* Insert Facebook Icon Here */}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 FinRep. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
