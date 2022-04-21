import React from "react";

const Firms = ({ data }) => {
  return (
    <section id="firm" className="firm">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Professional affiliations</h2>
          {/* <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p> */}
        </div>

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            {data &&
              data.map((x, i) => (
                <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up" key={i}>
                  <i className="bx bx-receipt main"></i>
                  <h4>{x.name}</h4>
                  <p>
                    <i className="bx bx-current-location"></i>
                    {x.location}
                  </p>
                  <p>
                    <i className="bx bxs-calendar"></i>
                    {x.experience}
                  </p>
                </div>
              ))}
          </div>
          <div
            className="image col-lg-6 order-1 order-lg-2"
            style={{ backgroundImage: `url("./img/services.jpg")` }}
            data-aos="fade-left"
            data-aos-delay="100"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Firms;
