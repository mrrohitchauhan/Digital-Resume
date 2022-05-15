import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ProjectDetails = () => {
  let { id } = useParams();
  const [portfolioData, setPorfolioData] = useState({});
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setPorfolioData(data.portfolio.find((portfolio) => portfolio.id == id));
        setName(data.main.name);
        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;

        document.body.appendChild(script);
      });
  }, [id]);

  return (
    <main id="main" data-aos="fade-up">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfoio Details</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Portfoio Details</li>
            </ol>
          </div>
        </div>
      </section>
      {portfolioData && (
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    {portfolioData.gallery &&
                      portfolioData.gallery.map((x, i) => (
                        <div className="swiper-slide" key={i}>
                          <img
                            src={`/img/portfolio/${x}`}
                            alt={portfolioData.name}
                            key={i}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Domain</strong>: {portfolioData.domain}
                    </li>
                    <li>
                      <strong>Client</strong>: {portfolioData.client}
                    </li>
                    <li>
                      <strong>Technologies</strong>: {portfolioData.tech}
                    </li>
                    <li className="text-truncate" style={{ maxWidth: "95%" }}>
                      <strong>Project URL</strong>:&nbsp;
                      {portfolioData.url ? (
                        <a href={portfolioData.url} target="_blank">
                          {portfolioData.url}
                        </a>
                      ) : (
                        "URL unavailable"
                      )}
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>{portfolioData.name}</h2>
                  <p>{portfolioData.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer data={name && name} />
    </main>
  );
};

export default ProjectDetails;
