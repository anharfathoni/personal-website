import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Header(props) {
  useEffect(() => {
    const myFunction = () => {
      var header = document.getElementById('header');
      var sticky = header.offsetTop;
      // console.log({ yOffset: window.pageYOffset, sticky });
      if (window.pageYOffset > 40) {
        header.classList.add('background-black');
      } else {
        header.classList.remove('background-black');
      }
    };

    window.addEventListener('scroll', myFunction);
  }, []);

  return (
    <div id="header" className="headerContainer position-fixed">
      <div className="name">
        <img
          className="logo"
          src="/logo/A.png"
          alt="profile"
          height="10%"
        ></img>
        <p className="name">Anhar Amir Fathoni</p>
      </div>
      <div className="menuContainer">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/cv">
          <a className="link">Resume</a>
        </Link>
        <Link href="/portfolios">
          <a className="link">Portfolios</a>
        </Link>
        <Link href="/blog">
          <a className="link">Blog</a>
        </Link>
        <Link href="/gallery">
          <a className="link">Gallery</a>
        </Link>
        <Link href="/contact">
          <a className="link">Contact</a>
        </Link>
      </div>
    </div>
  );
}
