import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
                                        <div class="info p-1 mx-auto" >
                                <div class='card-header text-center fw-bold fs-4'>Get in Touch</div>                               
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
                                                <div className="text-center"><a className="btn btn-outline-success" target = "_blank" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=kirubaharan8878m@gmail.com" role="button">Send Message</a></div>
                                            </form>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row justify-content-center" data-aos="fade-in">

<div class=" col-lg-8 col-md-8 col-sm-8 align-self-center">
    <div class="info container pt-5 mx-auto d-flex justify-content-center"  >
    <a class="btn text-white mx-2 text-center" style={{backgroundColor: "#25d366"}}  target = "_blank" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=kirubaharan8878m@gmail.com" role="button">
    <FontAwesomeIcon  className="fas  " icon={faWhatsapp} />

</a>
<a class="btn text-white  mx-2 text-center"  style={{backgroundColor: "#dd4b39"}}  target = "_blank" href="https://wa.me/+918489671064" role="button">
<FontAwesomeIcon  className="fas  " icon={faEnvelope} />

</a>
<a class="btn text-white mx-2 text-center" style={{backgroundColor: "#55acee"}} target = "_blank" href="https://www.linkedin.com/in/kirubaharan-m-116b36234" role="button">
<FontAwesomeIcon  className="fas  " icon={faLinkedinIn} />

</a>
<a class="btn text-white mx-2 text-center" style={{backgroundColor: "#333333"}} target = "_blank" href="https://github.com/KIRUBAHARAN8878M" role="button">
<FontAwesomeIcon  className="fas  " icon={faGithub} />
</a>
       
           
           
           
           
         
        </div>
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