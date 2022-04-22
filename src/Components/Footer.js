import React from "react";

const Footer = ({ data }) => {
  return (
    <div id="about">
      <div className="container about-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>{data}</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Footer;
