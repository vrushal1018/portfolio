import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#f0f0f0', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
      <p>© {new Date().getFullYear()} Vrushal. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>LinkedIn</a>
      </div>
    </footer>
  );
}
