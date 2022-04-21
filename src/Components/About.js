import React from "react";

const About = ({ data }) => {
  // if (data) {
  //   var skillmessage = data.skillmessage;
  //   var education = data.education.map(function (education) {
  //     return (
  //       <div key={education.school}>
  //         <h3>{education.school}</h3>
  //         <p className="info">
  //           {education.degree} <span>&bull;</span>
  //           <em className="date">{education.graduated}</em>
  //         </p>
  //         <p>{education.description}</p>
  //       </div>
  //     );
  //   });
  //   var work = data.work.map(function (work) {
  //     return (
  //       <div key={work.company}>
  //         <h3>{work.company}</h3>
  //         <p className="info">
  //           {work.title}
  //           <span>&bull;</span> <em className="date">{work.years}</em>
  //         </p>
  //         <p>{work.description}</p>
  //       </div>
  //     );
  //   });
  //   var skills = data.skills.map(function (skills) {
  //     var className = "bar-expand " + skills.name.toLowerCase();
  //     return (
  //       <li key={skills.name}>
  //         <span style={{ width: skills.level }} className={className}></span>
  //         <em>{skills.name}</em>
  //       </li>
  //     );
  //   });
  // }

  return (
    <div id="about">
      <div className="about-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <a href="#header" className="scrollto about-logo">
                <img src="assets/img/hero-logo.png" alt="" />
              </a>
              <h3>Knight</h3>
              <p>
                Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
                eligendi fuga maxime saepe commodi placeat.
              </p>
            </div>
          </div>

          <div className="row about-newsletter justify-content-center">
            <div className="col-lg-6">
              <form action="" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container about-bottom clearfix">
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
      </div>
    </div>
  );
};

export default About;
