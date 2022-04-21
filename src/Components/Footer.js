import React from "react";

const Footer = ({ data }) => {
  return (
    <>
      <section className="business-talking">
        <div className="container">
          <h2>Let’s Talk Business.</h2>
        </div>
      </section>
      {data && (
        <div className="container">
          <section className="main-section contact" id="contact">
            <div className="row">
              <div className="col-lg-6 col-sm-7 wow fadeInLeft">
                <div className="contact-info-box address clearfix">
                  <h3>
                    <i className=" icon-map-marker"></i>Address:
                  </h3>
                  <span>
                    308 Negra Arroyo Lane
                    <br />
                    Albuquerque, New Mexico, 87111.
                  </span>
                </div>
                <div className="contact-info-box phone clearfix">
                  <h3>
                    <i className="fa fa-phone"></i>Phone:
                  </h3>
                  <span>{data.phone}</span>
                </div>
                <div className="contact-info-box email clearfix">
                  <h3>
                    <i className="fa fa-pencil"></i>email:
                  </h3>
                  <span>{data.email}</span>
                </div>
                <div className="contact-info-box hours clearfix">
                  <h3>
                    <i className="fa fa-clock-o"></i>Hours:
                  </h3>
                  <span>
                    <strong>Monday - Thursday:</strong> 10am - 6pm
                    <br />
                    <strong>Friday:</strong> People work on Fridays now?
                    <br />
                    <strong>Saturday - Sunday:</strong> Best not to ask
                  </span>
                </div>
                <ul className="social-link">
                  {data.social.map((x, i) => (
                    <li className="">
                      <a href={x.url} target="_blank">
                        <i className={x.className}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6 col-sm-5 wow fadeInUp delay-05s">
                <div className="form">
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control input-text text-area"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="input-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Footer;
