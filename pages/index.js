import BaseLayout from '../components/layouts/BaseLayout';
import { Button } from 'reactstrap';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <>
      {/* <BaseLayout> */}
      <div className="root">
        <div id="header" className="headerContainer">
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
        <div id="content" className="contentContainer">
          <div className="contentText">
            <p className="contentTextgreeting">Hello</p>
            <p className="contentTextDescription">
              - This is me being creative
            </p>
          </div>
          <img
            className="profile_picture"
            src="/images/anhar.png"
            alt="profile"
          ></img>
        </div>
        {/* <div id="content" className="pt-5 contentTextDescription flex-column">
          <p>Web Developer, Badminton Player, Anime Lover</p>
          <p>Robotics Fans, Movie Watcher</p>
        </div> */}
        <div className="social-media-group">
          <i className="fab fa-instagram fa-3x socialmedia"></i>
          <i className="fab fa-linkedin fa-3x socialmedia"></i>
          <i className="fab fa-github fa-3x socialmedia"></i>
          <i className="fas fa-envelope fa-3x socialmedia"></i>
        </div>
      </div>
      {/* </BaseLayout> */}
      <style jsx>{`
        .root {
          padding: 0;
          margin: 0;
          min-width: 100vw;
          min-height: 100vh;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            to right bottom,
            #2e313b,
            #2a2c35,
            #262730,
            #22232a,
            #1e1e25
          );
          color: #ffffff;
          overflow: scroll;
        }
        .icon {
          font-size: 3em;
          cursor: pointer;
        }
        .contentContainer {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contentText {
          display: flex;
          flex-direction: column;
        }
        .contentTextgreeting {
          font-family: 'Raleway', sans-serif;
          font-size: 7rem;
          font-weight: 800;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .contentTextDescription {
          font-family: 'Raleway', cursive;
          font-size: 1.5rem;
          font-weight: 400;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .profile_picture {
          filter: grayscale(20%);
          height: 100%;
          object-fit: contain;
        }
        .socialmedia {
          margin: 0.2em;
        }
        .socialmedia:hover {
          color: #55bdc3;
          cursor: pointer;
        }
        .social-media-group {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: fixed;
          bottom: 0;
        }
      `}</style>
    </>
  );
}
