import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <>
            <section className="breadcrumbs" >
                <div className="container card   pt-5" id='contact'>
                    <div className="">
                        <main id="main">
                            <section id="contact" className="contact">
                                <div className="container card-body">

                                    <div className="section-title">
                                        <h5 className="card-title text-start fs-2 lead p-3"
                                            style={{ color: "#008fac" }} >Contact</h5>
                                    </div>
                                    <hr />


                                    <div className="row justify-content-center" data-aos="fade-in">

                                    <div class=" col-lg-8 col-md-8 col-sm-8 align-self-center">
                                        <div class="info p-3 mx-auto mb-3" >
                                <div class='card-header text-center fw-bold fs-4'>Get in Touch</div>
                                           
                                                <div className="email mt-3">
                                                    <FontAwesomeIcon  className="fas i " icon={faEnvelope} />
                                                    <h4>Email:</h4>
                                                    <p>kirubaharan8878m@gmail.com</p>
                                                </div>

                                                <div className="phone">
                                                    <FontAwesomeIcon className="fas i" icon={faPhone} />
                                                    <h4>Call:</h4>
                                                    <p>+91 848 967 1064</p>
                                                </div>

                                                <div className="phone">
                                                    <FontAwesomeIcon className="fab i" icon={faGithub} />
                                                    <h4>Github</h4>
                                                    <p>https://github.com/KIRUBAHARAN8878M</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" row  justify-content-center ">
                                    <div class=" col-lg-8 col-md-8 col-sm-8 align-self-center mt-5">
                                            <form role="form" className="mail-form">
                                                <div className="row">
                                                    <div className="form-group ">
                                                        <label for="name">Your Name</label>
                                                        <input type="text" name="name" className="form-control" id="name" required />
                                                    </div>
                                                    <div className="form-group ">
                                                        <label for="name">Your Email</label>
                                                        <input type="email" className="form-control" name="email" id="email" required />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="name">Subject</label>
                                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                                </div>
                                                <div className="form-group">
                                                    <label for="name">Message</label>
                                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                                </div>
                                                <div className="my-3">
                                                    <div className="loading">Loading</div>
                                                    <div className="error-message"></div>
                                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                                </div>
                                                <div className="text-center"><button className="btn btn-success">Send Message</button></div>
                                            </form>
                                        </div>
                                    </div>
                           

                                </div>
                            </section>
                        </main>
                       <hr />
                        <div class='text-center mx-auto mt-3 p-4 myname'>@2022 Designed by Kirubaharan M</div>
                    </div>
                 </div>
            </section>


          
        </>
    )
}

export default Contact 