import React from "react";
import "./style.css";

export default function TextForm(props) {
  return (
    <div>
      <br />
      <br />
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <section
          className={`firstsection bg-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <div className="frontpanel text-center">
            <h6
              className={`mainheading pt-5 text-uppercase fw-bold display-1 text-${props.mode}`}
              style={{
                fontFamily: "cursive",
              }}
            >
              Helicase
            </h6>
            <h5 className={`blockquote-footer text-${props.mode}`}>
              "Unwind your Searches ,Binds your studies"
            </h5>
          </div>
        </section>

        <div
          className="text-center mx-4 paras "
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <p className="text-center text-light abt">
            In colleges, students faces lots of challenges when it comes to find
            or study certain subjects or topics in details. We, at Helicase
            provide those very details about the subjects. We provide notes of
            biotechnology on our website. You can access those and bring your
            learning to a level where you will have your knowledge about the
            subjects well established.These note are enough to qualify national
            level exams.
          </p>
          <button className={`mb-3 my-5 btn btn-light`}>
            <a href="/About" className="text-decoration-none">
              <b className={`text-dark `}>Read More About Helicae</b>
            </a>
          </button>
        </div>
      </div>
      <div className="mx-5 my-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col rounded-3">
            <div
              className={`card crdbdr bg-${
                props.mode === "light" ? "success" : "light"
              }`}
            >
              <img
                src="biotechnology.jpg"
                className="card-img-top crdbdrimg"
                alt="..."
              />
              <div className={`card-body `}>
                <h5 className={`card-title text-${props.mode}`}>
                  Biotechnology
                </h5>
                <p className={`card-text  text-${props.mode}`}>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className={`btn btn-${props.mode} `}>
                  <a
                    className={`text-decoration-none text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    href="/Biotechnology"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className={`card crdbdr bg-${
                props.mode === "light" ? "primary" : "light"
              }`}
            >
              <img
                src="immuno.jpg"
                className="card-img-top crdbdrimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className={`card-title text-${props.mode}`}>Immunology</h5>
                <p className={`card-text  text-${props.mode}`}>
                  {" "}
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className={`btn btn-${props.mode} `}>
                  <a
                    className={`text-decoration-none text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    href="/Immunology"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className={`card crdbdr bg-${
                props.mode === "light" ? "danger" : "light"
              }`}
            >
              <img
                src="microbiology.jpg"
                className="card-img-top crdbdrimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className={`card-title text-${props.mode}`}>
                  Microbiology
                </h5>
                <p className={`card-text  text-${props.mode}`}>
                  {" "}
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <button className={`btn btn-${props.mode} `}>
                  <a
                    className={`text-decoration-none text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    href="/Biotechnology"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className={`card crdbdr bg-${
                props.mode === "light" ? "info" : "light"
              }`}
            >
              <img
                src="virology.jpg"
                className="card-img-top crdbdrimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className={`card-title text-${props.mode}`}>Virology</h5>
                <p className={`card-text  text-${props.mode}`}>
                  {" "}
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className={`btn btn-${props.mode} `}>
                  <a
                    className={`text-decoration-none text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    href="/Biotechnology"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className={`card crdbdr bg-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <img
                src="bioinformatics.jpg"
                className="card-img-top crdbdrimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className={`card-title text-${props.mode}`}>
                  Bioinformatics
                </h5>
                <p className={`card-text  text-${props.mode}`}>
                  {" "}
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button className={`btn btn-${props.mode} `}>
                  <a
                    className={`text-decoration-none text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    href="/Biotechnology"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
