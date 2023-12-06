import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="container">
      <p className="main-heading">Accounting made simple for small businesses.</p>
      <p className="sub-heading">Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don't get audited.</p>
      <button className="button button-primary">Get 6 months free</button>
      <button className="button button-secondary">Watch video</button>
    </div>
  );
}

export default MainContent;
