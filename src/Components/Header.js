import React from "react";
import TypeWriter from "react-typewriter";
import Particle from "./Particle";


const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <>
      <header className="header" id="header">
        <Particle />
        <div className="container">
          <figure className="logo animated fadeInDown delay-07s">
            <a href="#">
              <img src="img/ajansalogoi.png" alt="" />
            </a>
          </figure>
          <h1 className="animated fadeInDown delay-07s">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <ul className="we-create animated fadeInUp delay-1s">
            <li>
              Based in {city}. <span>{occupation}</span>. {description}.
            </li>
          </ul>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
      <nav className="main-nav-outer nav-wrap" id="test">
        <div className="container">
          <ul className="main-nav">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#firm">Firms</a>
            </li>
            <li>
              <a href="#Portfolio">Works</a>
            </li>
            <li className="small-logo">
              <a href="#header">
                <img src="img/ajansalogo.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a className="res-nav_click" href="#">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
