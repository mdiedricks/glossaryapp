import React, { useState, useEffect } from "react";
import "./App.css";
import Term from "./components/term";
import TermForm from "./components/termForm";
import EditForm from "./components/editForm";

function App() {
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [terms, setTerms] = useState([]);
  const [favOnly, setFavOnly] = useState(false);
  const [editTerm, setEditTerm] = useState({});

  useEffect(() => {
    fetchTerms();
  }, [editing]);

  const fetchTerms = () => {
    setLoading(true);

    fetch("/terms")
      .then((res) => res.json())
      .then((data) => {
        setTerms(data.terms);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const activateEdit = (term) => {
    if (editing) {
      deactivateEdit();
    }
    setEditTerm(term);
    setEditing(true);
    window.scrollTo(0, 0);
  };
  const deactivateEdit = () => {
    setEditing(false);
  };
  const deactivateAdd = () => {
    setAdding(false);
  };
  const toggleFavourites = () => {
    setFavOnly(!favOnly);
  };

  return (
    <>
      <header className="nav">
        <h2>Glossary App</h2>
      </header>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "0.5rem" }}
      >
        <button onClick={() => setAdding(true)}>Add Term</button>
        <button onClick={toggleFavourites}>Fav Only</button>
      </div>
      {adding && <TermForm deactivateAdd={deactivateAdd}></TermForm>}
      {editing && (
        <EditForm
          editTerm={editTerm}
          deactivateEdit={deactivateEdit}
        ></EditForm>
      )}

      {/* <div className="filter">Filter</div> */}
      <div className="content container">
        {loading && <h3>Loading...</h3>}

        {!loading &&
          !favOnly &&
          terms.map((item) => (
            <Term term={item} key={item._id} activateEdit={activateEdit} />
          ))}

        {!loading &&
          favOnly &&
          terms
            .filter((item) => item.favourite === true)
            .map((item) => (
              <Term term={item} key={item._id} activateEdit={activateEdit} />
            ))}
      </div>
    </>
  );
}

export default App;
