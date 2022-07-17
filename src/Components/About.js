import React from "react";

const About = ({ data }) => {
  return (
    <div id="about">
      <div className="about-top">
        {data && (
          <div className="container">
            <div className="row justify-content-center mb-4">
              <a href="#header" className="scrollto about-logo">
                <img
                  src={`./img/${data.image}`}
                  alt={data.image}
                  className="img-thumbnail rounded-circle"
                />
              </a>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-lg-6" data-aos="fade-right">
                <h3>About Me</h3>
                <p>{data && data.bio}</p>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <h3>Contact Details</h3>
                <div className="contact">
                  <div className="info ">
                    <div className="address d-flex justify-content-center align-items-center">
                      <i className="bi bi-geo-alt"></i>
                      <p>
                        {data.address.street}
                        <br />
                        {data.address.city}, {data.address.state},{" "}
                        {data.address.zip}
                      </p>
                    </div>

                    <div className="email d-flex justify-content-center align-items-center">
                      <i className="bi bi-envelope"></i>
                      <p>{data.email}</p>
                    </div>

                    <div className="phone d-flex justify-content-center align-items-center">
                      <i className="bi bi-phone"></i>
                      <p>{data.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {data && (
              <div className="social-links" data-aos="fade-down">
                {data.social.map((x, i) => (
                  // eslint-disable-next-line react/jsx-no-target-blank
                  <a href={x.url} className={x.name} key={i} target="_blank">
                    <i className={x.class}></i>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* <div className="container about-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Knight</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div> */}
    </div>
  );
};

export default About;
