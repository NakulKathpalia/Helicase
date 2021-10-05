import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function TextForm(props) {
  return (
    <div>
      <br />
      <br />
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <div
          className={`firstsection my-5 bg-${
            props.mode === "light" ? "d" : "l"
          }`}
        ></div>

        <div
          className="text-center paras "
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
          }} id="about"
        >
          <p className={`text-center text-light abt`}>
            In colleges, students faces lots of challenges when it comes to find
            or study certain subjects or topics in details. We, at Helicase
            provide those very details about the subjects. We provide notes of
            biotechnology on our website. You can access those and bring your
            learning to a level where you will have your knowledge about the
            subjects well established.These note are enough to qualify national
            level exams.
          </p>
          <button className={`mb-3 my-5 btn btn-light`}>
            <Link to="/About" className="text-decoration-none">
              <b className={`text-dark `}>Read More About Helicae</b>
            </Link>
          </button>
        </div>
      </div>
      <div className="mx-5 my-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col ">
            <div className={`crd bg-${props.mode === "light" ? "dark" : "light"} text-${props.mode}`}>
              <div className="card-content">
                <img className="crd-img" src="biotechnology.jpg" alt="" />
                <h2 className="card-title">Biotechnology</h2>
                <p className="card-body">
                  Biotechnology is technology that utilizes biological systems,
                  living organisms or parts of this to develop or create
                  different products. Brewing and baking bread are examples of
                  processes that fall within the concept of biotechnology
                </p>
                <a type="button" href="/Biotechnology" className="btn btn-success">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className={`crd bg-${props.mode === "light" ? "dark" : "light"} text-${props.mode}`}>
              <div className="card-content">
                <img className="crd-img" src="Immuno.jpg" alt="" />
                <h2 className="card-title">Immunology</h2>
                <p className="card-body">
                  Immunology is the study of the immune system and is a very
                  important branch of the medical and biological sciences. The
                  immune system protects us from infection through various lines
                  of defence. If the immune system is not functioning as it
                  should, it can result in disease, such as autoimmunity,
                  allergy and cancer.
                </p>
                <a type="button" href="/Immunology" className="btn btn-success">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className={`crd bg-${props.mode === "light" ? "dark" : "light"} text-${props.mode}`}>
              <div className="card-content">
                <img className="crd-img" src="Microbiology.jpg" alt="" />
                <h2 className="card-title">Microbiology</h2>
                <p className="card-body">
                  Microbiology is the study of all living organisms that are too
                  small to be visible with the naked eye. This includes
                  bacteria, archaea, viruses, fungi, prions, protozoa and algae,
                  collectively known as 'microbes'.
                </p>
                <a type="button" href="/Microbiology" className="btn btn-success">
                  Learn More
                </a>
              </div>
            </div>
          </div>
       
          {/* <div className="col">
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
                  Virology is the scientific discipline concerned with the study
                  of the biology of viruses and viral diseases, including the
                  distribution, biochemistry, physiology, molecular biology,
                  ecology, evolution and clinical aspects of viruses.
                </p>
                <button className={`btn btn-${props.mode} `}>
                  <Link
                    className={`text-decoration-none text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    to="/Virology"
                  >
                    Learn More
                  </Link>
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
                  Bioinformatics involves the analysis of biological information
                  using computers and statistical techniques, the science of
                  developing and utilizing computer databases and algorithms to
                  accelerate and enhance biological research
                </p>
                <button className={`btn btn-${props.mode} `}>
                  <Link
                    className={`text-decoration-none text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    to="/Bioinformatics"
                  >
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
