import React from "react";
import abtimg from "./assets/abtimg1.jpeg";

function About() {
  return (
    <div   className="container card pt-5 lead" style={{
      height:"100%"
     }} id="about">
      <div className="row ">
        <div className="col-lg-4 col-md-6 col-sm-12   m-auto">
          <div className="card-img-left left" data-aos='fade-down-right'>
            <img
              src={abtimg}
              className="card-img-left bg-light shadow-lg"
              alt="Photo"
              style={{
               height:"22rem",
               width:"22rem",
                borderRadius:"5%",
                transition: "ease-in",
                transitionDelay: "0.2s",
              }}
            />
          </div>
        </div>
       
        <div className="col-lg-8 col-md-6 col-sm-12  m-auto" style={{ maxWidth: "550px" }}>
          <div className='right' data-aos='fade-down-left'>
            <div className="card-body">
              <span
                className="card-title fs-2 bold "
                style={{ color: "#008fac" }}
              >
                About Me,
              </span>
              <hr />
              <p className="card-text">
                Am a MERN Stack Developer from Ulkottai,Tamil Nadu in India 🇮🇳. I
                love to create web apps that would make life easy and enjoyable
                for people. I have just completed MERN Stack at Guvi Geeks of
                IIT-M, Chennai.
              </p>
              <p>
                I like to interact with people, listen to new ideas . I am
                always open to have talk about anything and look forward to
                connect with you 🤝. Feel free to contact me here. ⤵️{" "}
              </p>
              <div className="d-flex flex-row-reverse" id="sw">
                <a type="button" className="btn btn-secondary but" href="#con">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

