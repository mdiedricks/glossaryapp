import React, { useState, useEffect } from "react";
import "../App.css";

const TermForm = ({ editTerm, updateTerm }) => {
  const [term, setTerm] = useState("");
  const [def, setDef] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect((prevProps) => {
    if (editTerm.term != term) {
      setTerm(editTerm.term);
      setDef(editTerm.definition);
    } else {
    }
  }, []);

  const termHandler = (e) => {
    setTerm(e.target.value);
  };
  const defHandler = (e) => {
    setDef(e.target.value);
  };

  const addOrModifyTerm = async (e) => {
    const newTerm = {
      term: term,
      definition: def,
    };
    if (!edit) {
      const res = await fetch("/terms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTerm),
      });
      return res.json();
    } else {
      const res = await fetch(`/terms/${term._id}`, {
        method: "UPDATE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTerm),
      });
      return res.json();
    }
  };

  return (
    <div className="container content">
      <h4>Create Term</h4>
      <form onSubmit={addOrModifyTerm}>
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
