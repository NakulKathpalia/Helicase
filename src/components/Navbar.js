import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg  navbar-${props.mode  === "light" ? "dark" : "light"} bg-${
          props.mode === "light" ? "fadedgreen" : "darkblue"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="logo.png"
              alt=""
              width={90}
              height={28}
              className="d-inline-block me-4 align-text-top"
            />
            Helicase
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="About">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover more
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="Biotechnology">
                      Biotechnology
                    </Link>
                    <Link className="dropdown-item" to="Immunology">
                      Immunology
                    </Link>
                    <Link className="dropdown-item" to="Microbiology">
                      Microbiology
                    </Link>

                    <Link className="dropdown-item" to="Virology">
                      Virology
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Bioinformatics">
                      Bioinformatics
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <Link className="dropdown-item" to="Contact">
                      Contact Us For More
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </li>
            </ul>

            {
              <div
                className={`form-check form-switch text-${
                  props.mode 
                } mx-3`}
              >
                <input
                  className="form-check-input"
                  onClick={props.toggleMode}
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Dark mode
                </label>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
}
