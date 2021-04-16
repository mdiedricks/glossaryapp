import React, { useState } from "react";
import "../App.css";

function AddTerm() {
  const [term, setTerm] = useState("");
  const [def, setDef] = useState("");

  const termHandler = (e) => {
    setTerm(e.target.value);
  };
  const defHandler = (e) => {
    setDef(e.target.value);
  };

  const createTerm = async () => {
    const newTerm = {
      term: term,
      definition: def,
    };
    const res = await fetch("/terms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTerm),
    });
    return res.json();
  };

  return (
    <div className="container content">
      <h4>Create Term</h4>
      <form onSubmit={createTerm}>
        <label htmlFor="term">Term</label>
        <br />
        <input
          type="text"
          id="term"
          onChange={termHandler}
          value={term}
        ></input>
        <br />
        <label htmlFor="definition">Definition</label>
        <br />
        <textarea
          type="text"
          id="definition"
          onChange={defHandler}
          value={def}
        ></textarea>
        <br />
        <div style={{ textAlign: "center" }}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddTerm;
