import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__credit">
            Designed & Built by <span>Varshini S Kamath</span>
          </span>
        </div>
        <div className="footer__right">
          <span className="footer__email">vkamath32@gatech.edu</span>
        </div>
      </div>
      <div className="footer__line" />
      <div className="container footer__copy">
        <span>© {new Date().getFullYear()} Varshini S Kamath. All rights reserved.</span>
        <a href="#top" className="footer__top">Back to top ↑</a>
      </div>
    </footer>
  );
}
