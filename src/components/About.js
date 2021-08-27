import React from "react";

function About(props) {
  return (
    <>
      <div className="row row-cols-1">
        <div className="col-sm-4">
          <div className={`card text-${props.mode==='light' ? 'dark':'light'} bg-${props.mode}`}>
            <img src="..." className="card-img-top" alt="..." />
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className={`card text-${props.mode==='light' ? 'dark':'light'} bg-${props.mode}`}>
            <h5 className="card-header">Featured</h5>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className={`card text-${props.mode==='light' ? 'dark':'light'} bg-${props.mode}`}>
            <h5 className="card-header">Featured</h5>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
