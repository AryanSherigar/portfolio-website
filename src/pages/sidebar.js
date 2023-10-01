import React from 'react';
import './sidebar.css';

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <ul className="social-links">
        <li><a href="https://github.com/AryanSherigar" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-lg"></i></a></li>
        <li><a href="www.linkedin.com/in/aryan-sherigar-866144255" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-lg"></i></a></li>
      </ul>
    </div>
  );
}

export default SocialSidebar;
