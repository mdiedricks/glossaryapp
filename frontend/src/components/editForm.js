import React, { useState, useEffect } from "react";
import "../App.css";

const EditForm = ({ editTerm, deactivateEdit }) => {
  const [term, setTerm] = useState("");
  const [def, setDef] = useState("");

  useEffect(() => {
    setTerm(editTerm.term);
    setDef(editTerm.definition);
    console.log(editTerm);
  }, [editTerm]);

  const termHandler = (e) => {
    setTerm(e.target.value);
  };
  const defHandler = (e) => {
    setDef(e.target.value);
  };

  const updateTerm = async (e) => {
    e.preventDefault();
    editTerm.term = term;
    editTerm.definition = def;
    const newTerm = editTerm;

    const res = await fetch("/terms", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTerm),
    });
    deactivateEdit();
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
        <h4>Update Term</h4>
        <button onClick={() => deactivateEdit()} className="small">
          x
        </button>
      </div>
      <form onSubmit={updateTerm}>
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

export default EditForm;
