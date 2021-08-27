import React from "react";
 import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Helicase
          </a>

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
                    <a className="dropdown-item" href="/">
                      Biotechnology
                    </a>
                    <a className="dropdown-item" href="/">
                      Microbiology
                    </a>

                    <a className="dropdown-item" href="/">
                      Virology
                    </a>
                    <a className="dropdown-item" href="/">
                      Immunology
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Bioinformatics
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Contact us for more
                    </a>
                  </li>
                </ul>
              </li>

            </ul>

            { <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'} mx-3`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked"  />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark mode</label>
            </div>}

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
