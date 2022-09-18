import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <>

      <div className="container card pt-5" id="hero" >
        <div className='row  justify-content-center '>
          <div className='col-lg-8 col-md-8 col-sm-8 align-self-center pt-5 '>
            <div className="card-body text-center mx-auto pt-5">
              <h1 className="pt-5">Hello <span className=''>👋</span>, I'm Kirubaharan M <span className=''>&#128522;</span></h1>
              <p className="pt-3 ms-2"> <img  src={"https://readme-typing-svg.herokuapp.com/?size=30&font=Edu+VIC+WA+NT+Beginner&duration=6000&color=black&size=32&center=true&vCenter=true&width=420&height=80&lines=Full-StackWeb+Developer;MERN-Stack+Developer;ReactJs+Developer;NodeJs+Developer;"} /></p>
            </div>
            <div className=" text-center pt-2 pb-2 d-grid gap-4 d-md-block">
            <a
                class="btn btn-outline-primary mx-3 "
                href="#!"
                role='button'
                download              
              >
                Resume
              </a>
              <a
                class="btn btn-outline-primary mx-2"
                href="#portfolio"
                role='button'
              
              >
                Portfolio
              </a>
            </div>
            <div className="text-center pt-4 ">
                <a class="btn text-dark btn-md  btn-floating mx-2" style={{backgroundColor: "whitesmoke"}} href="https://www.linkedin.com/in/kirubaharan-m-116b36234" role="button">
                     <FontAwesomeIcon className='fab fa-linkedin-in' icon={faLinkedinIn} />
                </a>
                <a class="btn text-dark btn-md  btn-floating mx-2"  style={{backgroundColor: "whitesmoke"}} href="https://github.com/KIRUBAHARAN8878M" role="button">
                    <FontAwesomeIcon className='fab fa-github' icon={faGithub} />
                </a>
                <a class="btn text-dark btn-md  btn-floating mx-2" style={{backgroundColor: "whitesmoke"}} href="#!" role="button">
                    <FontAwesomeIcon className='fab fa-whatsapp' icon={faWhatsapp} />
                </a>
                <a class="btn text-dark btn-md  btn-floating mx-2"  style={{backgroundColor: "whitesmoke"}} href="mailto:kirubaharan8878m@gmail.com" role="button">
                    <FontAwesomeIcon className='fas fa-envelope' icon={faEnvelope} />
                </a>
            </div> 
          </div>
        </div>
      </div>



    </>








  )
}

export default Home