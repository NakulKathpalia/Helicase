import React from "react";

function About(props) {
  return (
    <>
      <div className={` text-${props.mode === "light" ? "dark" : "light"}`}>
        <div className="align-self-center">
          <h1
            className="text-uppercase  text-center fw-bold"
            style={{
              fontFamily: "Merriweather",
              fontWeight: "bold",
              fontSize: "50px",
              paddingTop: "5%",
            }}
          >
            Why Helicase ?
          </h1>
        </div>

        <div>
          <p className="mx-5 my-5 text-center fs-5">
            In colleges, students faces lots of challenges when it comes to find
            or study certain subjects or topics in details. We, at Helicase
            provide those very details about the subjects. We provide notes of
            biotechnology on our website. You can access those and bring your
            learning to a level where you will have your knowledge about the
            subjects well established."
          </p>
        </div>
        <div className="mx-4 row row-cols-1">
          <div className="col-sm-4">
            <div
              className={`card text-${
                props.mode === "light" ? "dark" : "light"
              } bg-${props.mode}`}
            >
              <h5 className="card-header text-center">Nakul Kathpalia</h5>
              <img
                src="Nakul-01.jpg"
                className="card-img-top "
                alt="..."
                style={{}}
              />
              <div className="card-body">
                <h5 className="card-title">CEO | Founder</h5>
                <p className="card-text">Nakul Kathpalia :A Biotechnologist</p>
                <a
                  href="/"
                  className={`btn btn-${
                    props.mode === "light" ? "success" : "warning"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className={`card text-${
                props.mode === "light" ? "dark" : "light"
              } bg-${props.mode}`}
            >
              <h5 className="card-header text-center">Priyanka Ghalyan</h5>
              <img src="Priyanka_01.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Content Writer</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="/"
                  className={`btn btn-${
                    props.mode === "light" ? "success" : "warning"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className={`card text-${
                props.mode === "light" ? "dark" : "light"
              } bg-${props.mode}`}
            >
              <h5 className="card-header text-center">Pratyusha Trivedi</h5>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Art & Creativity</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="/"
                  className={`btn btn-${
                    props.mode === "light" ? "success" : "warning"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center my-5">How We become HELICSE</h2>
          <p className="mx-5 text-center my-3 fs-5">
            I Nakul Kathpalia was sitting alone thinking about what i am doing
            in my life ? what can i do in my life? Then an idea through which i
            can serve to all like me. I suffered a lot during online studies
            because Everything is availabe but nothing is available if i search
            anything related to my topic i got the whole research paper ,when i
            need a 2 mark question or 4 mark question i have to read the whole
            research paper . Then an idea came in my mind .I have some
            developing skills .Yes , I can make a website ,that can resolve
            problems which i had and many more like me . From Here HELICASE came
            .
          </p>
          <p className="mx-3  text-center fs-5">
            Now i be like "What an idea sirji"
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
