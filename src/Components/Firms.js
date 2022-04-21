import React from "react";

const Firms = ({ data }) => {
  return (
    <section class="main-section" id="firm">
      <div class="container">
        <h2>Firms</h2>
        <h6>Compaines i worked with</h6>
        <div class="row">
          <div class="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
            {data &&
              data.map((x, i) => (
                <div class="firm-list">
                  <div class="firm-list-col1">
                    <i class="fa fa-building-o"></i>
                  </div>
                  <div class="firm-list-col2">
                    <h3>{x.name}</h3>
                    <p>
                      <i class="fa fa-map-marker"></i>
                      {x.location}
                    </p>
                    <p>
                      <i class="fa fa-calendar"></i>
                      {x.experience}
                    </p>
                    <p>
                      <i class="fa fa-link"></i>
                      <a href={x.url} alt={x.name} target="_blank">
                        {x.url}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <figure class="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
            <img src="img/macbook-pro.png" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Firms;
