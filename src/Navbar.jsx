import React from 'react'

function Navbar() {
  return (
    <>
    <nav
      className=" container p-2 shadow fixed-top navbar mynav navbar-light "
      style={{ position: "sticky" }}
    >
      <div className=" container-fluid">
        <div className="navbar-brand d-flex" style={{ alignItems: "center" }} >
          
          <span
           id='kiru'
            className="myname "
            style={{ color: "black" }}
          >
           KIRUBAHARAN M
          </span>
        </div>
        <ul className="nav justify-content-end  d-flex justify-content-between">
          <li className="nav-item">
            <a
              className="nav-link link-secondary"
              aria-current="page"
              href="#hero"
            >
             Home
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-secondary" href="#about">
            About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#skill">
            Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-secondary" href="#contact">
              Contact
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  </>

  )
}

export default Navbar