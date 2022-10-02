import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaGithubSquare } from "react-icons/fa";

import "./footer.scss";
import TMDB from "../../images/TMDB.png";

//Link tags are Router component used to navigate the one page App
const Footer = () => {
  const isSignedIn = (type) => {
    if (localStorage.getItem("session")) {
      if (type === "profile") {
        return "/user/account";
      }
      if (type === "favorites") {
        return "/user/favorites";
      }
    }
    return "/user/signin";
  };

  return (
    <div className="main-footer">
      <section className="main-footer-top">
        <header className="main-footer-top-header">
          <h2>Film Flix</h2>
          <nav className="main-footer-nav">
            <Link to="/">Home </Link>
            <Link to={isSignedIn("profile")}>Profile </Link>
            <Link to={isSignedIn("favorites")}>Favorites </Link>
          </nav>
        </header>
        <p className="main-footer-item">
          portfolio:
          <a href="https://cedrickmonesit.github.io/Portfolio.github.io/" rel="noopener noreferrer" target="_blank">
            cedrickmonesit.io
          </a>
        </p>
        <p className="main-footer-item">
          phone number: <a href="tel: 508-494-4306">508-494-4306</a>
        </p>
        <p className="main-footer-top-copyright">
          Copyright @2022 <br />
          Code and design by
          <a className="main-footer-copyright-name" href="https://github.com/cedrickmonesit" rel="noopener noreferrer" target="_blank">
            Cedrick Monesit
          </a>
        </p>
      </section>
      <section className="main-footer-bottom">
        <div className="main-footer-bottom-logo">
          <a href="https://www.themoviedb.org/" alt="TMDB anchor tag" rel="noopener noreferrer" target="_blank">
            <img className="main-footer-tmdb-logo" src={TMDB} alt="TMDB Logo" />
          </a>
        </div>
        <div className="main-footer-bottom-social-icons">
          <a href="https://github.com/cedrickmonesit" rel="noopener noreferrer" target="_blank">
            <FaGithubSquare className="main-footer-social-icon" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
