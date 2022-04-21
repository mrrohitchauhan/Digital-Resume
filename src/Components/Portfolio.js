import React, { useState, useEffect } from "react";

const Portfolio = ({ data }) => {
  const [type, setType] = useState([]);
  useEffect(() => {
    data && setType([...new Set(data.map((data) => data.type))]);
  }, [data]);

  return (
    <section id="portfolio" className="portfolio">
      {data && (
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>CHECK OUT SOME OF MY WORKS</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".web-app">Web App</li>
                <li data-filter=".mobile-app">Mobile App</li>
                {/* <li data-filter=".filter-web">Web</li> */}
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
                    src={`img/portfolio/${x.image}`}
                    className="img-fluid"
                    alt={x.name}
                  />
                  <div className="portfolio-info">
                    <h4>{x.name}</h4>
                    <p>{x.tech}</p>
                    <div className="portfolio-links">
                      {x.url && (
                        <a href={x.url} target="_blank" title={x.name}>
                          <i className="bx bx-link"></i>
                        </a>
                      )}
                      {x.image && !x.url && (
                        <a
                          href={`img/portfolio/${x.image}`}
                          target="_blank"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title={x.name}
                        >
                          <i className="bx bx-show"></i>
                        </a>
                      )}
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
