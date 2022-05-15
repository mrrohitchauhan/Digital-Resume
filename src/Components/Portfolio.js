import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Portfolio = ({ data }) => {
  const [type, setType] = useState([]);
  useEffect(() => {
    data && setType([...new Set(data.map((data) => data.type))]);
    setTimeout(() => {
          
      const script = document.createElement("script");
      script.src = "/js/main.js";
      script.async = true;
      document.body.appendChild(script);
    }, 100);
  }, [data]);

  return (
    <section id="portfolio" className="portfolio">
      {data && (
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>CHECK OUT SOME OF MY WORKS</p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                {/* <li data-filter=".web-app">Web App</li>
                <li data-filter=".mobile-app">Mobile App</li> */}
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {data.map((x, i) => (
              <div
                className={`col-lg-4 col-md-6 portfolio-item ${x.class}`}
                key={i}
              >
                <div className="portfolio-wrap">
                  <img
                    src={`img/portfolio/${x.thumbnail}`}
                    className="img-fluid"
                    alt={x.name}
                  />
                  <div className="portfolio-info">
                    <h4>{x.name}</h4>
                    <p>{x.tech}</p>
                    <div className="portfolio-links">
                      <Link to={`/details/${x.id}`}>
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
