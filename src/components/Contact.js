import React from "react";

const Contact = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="esuggestions" className="form-label">
          Suggestions
        </label>
        <textarea className="form-control" id="suggestions" rows="5"></textarea>
      </div>
    </div>
  );
};

export default Contact;
