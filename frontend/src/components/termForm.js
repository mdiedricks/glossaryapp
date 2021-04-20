import React, { useState } from "react";
import "../App.css";

const TermForm = ({ deactivateAdd }) => {
  const [term, setTerm] = useState("");
  const [def, setDef] = useState("");

  const termHandler = (e) => {
    setTerm(e.target.value);
  };
  const defHandler = (e) => {
    setDef(e.target.value);
  };

  const addTerm = async (e) => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Create Term</h4>
        <button onClick={() => deactivateAdd()} className="small">
          x
        </button>
      </div>
      <form onSubmit={addTerm}>
        <label htmlFor="term">Term</label>
        <br />
        <input
          name="term"
          type="text"
          id="term"
          onChange={termHandler}
          value={term}
        ></input>
        <br />
        <label htmlFor="definition">Definition</label>
        <br />
        <textarea
          name="definition"
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
};

export default TermForm;
