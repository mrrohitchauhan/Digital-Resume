import React, { useState, useEffect } from "react";

const Portfolio = ({ data }) => {
  const [type, setType] = useState([]);
  useEffect(() => {
    data && setType([...new Set(data.map((data) => data.type))]);
    console.log(type);
  }, [data]);

  return (
    <section class="main-section paddind" id="Portfolio">
      <div class="container">
        <h2>Portfolio</h2>
        <h6>CHECK OUT SOME OF MY WORKS.</h6>
        <div class="portfolioFilter">
          {/* {type && ( */}
          <ul class="Portfolio-nav wow fadeIn delay-02s">
            <li>
              <a href="#" data-filter="*" class="current">
                All
              </a>
            </li>
            {/* {type.map((x) => ( */}
            <li>
              <a href="#" data-filter=".web-app">
                Web App
              </a>
            </li>
            <li>
              <a href="#" data-filter=".mobile-app">
                Mobile App
              </a>
            </li>
            {/* ))} */}
          </ul>
          {/* )} */}
        </div>
      </div>
      {data && (
        <div class="portfolioContainer wow fadeInUp delay-04s">
          {data.map((x, i) => (
            <div class={`Portfolio-box ${x.class}`}>
              <a
                href={`${x.url ? x.url : `img/portfolio/${x.image}`}`}
                target="_blank"
              >
                <img src={`img/portfolio/${x.image}`} alt={x.name} />
              </a>
              <h3>{x.name}</h3>
              <p>{x.tech}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
