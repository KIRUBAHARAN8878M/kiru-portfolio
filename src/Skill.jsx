import React from "react";
import "./Skill.css";
import html from "./assets/html.png";
import bootstrap from "./assets/bootstrap.png";
import css from "./assets/css-3.png";
import git from "./assets/git-logo.png";
import js from "./assets/js.png";
import mongo from "./assets/mongo.png";
import node from "./assets/node.jpeg";
import react from "./assets/react.png";
function Skill() {
    return (
        <div className="container card d-grid gap-2 py-5" id='skill'>
          <div className=" align-self-center">
            <div className="card-body">
              <h5
                className="card-title text-start fs-2 lead p-3"
                style={{ color: "#008fac" }}
              >
             My Software Skills
              </h5>
              <hr />
              <div className=" mt-3 pt-5">
                <div className="row gap-3 justify-content-lg-evenly">
                  <div className="col ">
                    <div className="skills">
                      <img src={html} alt="skills" />
                      <span>HTML5</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skills">
                      <img src={css} alt="skills" />
                      <span>CSS3</span>
                    </div>
                  </div>
    
                  <div className="col">
                    <div className="skills">
                      <img src={js} alt="skills" />
                      <span>JS</span>
                    </div>
                  </div>
    
                  <div className="col">
                    <div className="skills">
                      <img src={react} alt="skills" />
                      <span>ReactJS</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skills">
                      <img
                        src="https://evanpoe.github.io/portfolio/images/express-logo.png"
                        alt="..."
                      />
                      <span>ExpressJS</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skills">
                      <img src={mongo} alt="skills" />
                      <span>MongoDb</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skills">
                      <img src={node} alt="skills" />
                      <span>NodeJS</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skills">
                      <img src={git} className="bg-dark rounded" alt="..." />
                      <span>GitHUb</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skills">
                      <img src={bootstrap} alt="skills" />
                      <span>Bootstrap5</span>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export default Skill
