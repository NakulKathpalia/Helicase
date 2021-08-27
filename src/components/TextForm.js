import React from "react";

export default function TextForm(props) {
  return (
    <div className="mb-3">
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
      ></textarea>
      <button className="btn btn-success">Submit</button>
    </div>
    

  );
}
