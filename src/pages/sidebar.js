import React from 'react';
import './sidebar.css';

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <ul className="social-links">
        <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src='/images/Github.png' alt="LinkedIn" /></a></li>
        <li><a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><img src='Github.png' alt="GitHub" /></a></li>
        {/* Add more social links here */}
      </ul>
    </div>
  );
}

export default SocialSidebar;
