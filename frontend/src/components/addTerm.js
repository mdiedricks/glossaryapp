import React from "react";
import "../App.css";

function AddTerm() {
  const createTerm = () => {};

  return (
    <div className="container content">
      <h4>Create Term</h4>
      <form onSubmit={createTerm()}>
        <label htmlFor="term">Term</label>
        <br />
        <input type="text" id="term"></input>
        <br />
        <label htmlFor="definition">Definition</label>
        <br />
        <textarea type="text" id="definition"></textarea>
        <br />
        <div style={{ textAlign: "center" }}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddTerm;
