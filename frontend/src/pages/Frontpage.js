import React, { useEffect } from 'react';
import '../styles/Frontpage.css'
import natureImage from '../images/nature123.jpg';

function FrontPage() {
  useEffect(() => {
    const text = document.querySelector('.text');
    const letters = text.textContent.split('');
    text.textContent = '';
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${i * 30}ms`;
      text.appendChild(span);
    });
  }, []);

  return (
    <main role="main" className="container">
      <div className="background-image" style={{backgroundImage: `url(${natureImage})`}}></div>
      <div className="content">
        <h1 className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ultrices eros in cursus turpis. Morbi tristique senectus et netus et malesuada fames ac.
          Tortor posuere ac ut consequat semper viverra nam.
          Vestibulum lectus mauris ultrices eros. Morbi tristique senectus et netus.
        </h1>
      </div>
    </main>
  );
}

export default FrontPage;
