import React from 'react';
import '../index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'next/app';
import Head from 'next/head';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <div>
      <Head>
        <script src="https://kit.fontawesome.com/02199a3a80.js" crossorigin="anonymous"></script>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,600,800|Roboto|Yeon+Sung&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <title>Web Developer Portofolio Website</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      {/* <div id="header" className="headerContainer">
        <div className="name">
          <img
            className="logo"
            // src={logo}
            alt="profile"
            height="10%"
          ></img>
          <p variant="h1" className="name">
            Anhar Amir Fathoni
          </p>
        </div>
        <div className="menuContainer">
          <p to={'/resume'}  className="link">
            Resume
          </p>
          <p
            to={'/portofolio'}
            
            className="link"
          >
            Portofolio
          </p>
          <p to={'/blog'}  className="link">
            Blog
          </p>
          <p to={'/gallery'}  className="link">
            Gallery
          </p>
          <p to={'/contact'}  className="link">
            Contact
          </p>
        </div>
      </div> */}

      <Component {...pageProps} />

      {/* <style jsx>{`
      @media screen and (max-width: 768px) {
        body {
          background-color: blue;
        }
      }
      `}</style> */}
    </div>
  );
}
