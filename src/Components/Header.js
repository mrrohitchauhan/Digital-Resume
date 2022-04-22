import React from "react";
import TypeWriter from "react-typewriter";
import Particle from "./Particle";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
  }

  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <a href="#" className="hero-logo" data-aos="zoom-in">
            <img src="./img/hero-logo.png" alt="" />
          </a>
          {/* <h1 data-aos="zoom-in">Welcome To Knight Studios</h1> */}
          <h1 data-aos="zoom-in" className="animated fadeInDown delay-07s">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <h2 data-aos="fade-up">
            Based in {city}. <span>{occupation}</span>. {description}
          </h2>
          <p className="scrolldown">
            <a className="smoothscroll scrollto" href="#about">
              <i className="bx bxs-chevron-down-circle"></i>
            </a>
          </p>
        </div>
      </section>
      <header id="header" className="d-flex align-items-center">
        {/* <Particle /> */}
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="#">
              <img src="./img/small-logo.png" alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#skills">
                  Competences
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#firm">
                  Firms
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Portfolio
                </a>
              </li>
              {/* <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
