import React, { useState, useEffect } from "react";
import "./App.css";
import Term from "./components/term";
import TermForm from "./components/termForm";
import EditForm from "./components/editForm";
import Header from "./components/header";

function App() {
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [terms, setTerms] = useState([]);
  const [favOnly, setFavOnly] = useState(false);
  const [update, setUpdate] = useState(false);
  const [editTerm, setEditTerm] = useState({});

  useEffect(() => {
    fetchTerms();
  }, [editing, adding, update]);

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
  const triggerUpdate = () => {
    setUpdate(!update);
  };

  return (
    <>
      <Header />
      <div className="ctrl-panel">
        <button onClick={() => setAdding(true)}>Add Term</button>
        {!favOnly && (
          <button onClick={toggleFavourites}>Show Favourites</button>
        )}
        {favOnly && (
          <button className="toggle" onClick={toggleFavourites}>
            Hide Favourites
          </button>
        )}
      </div>
      {adding && <TermForm deactivateAdd={deactivateAdd}></TermForm>}
      {editing && (
        <EditForm
          editTerm={editTerm}
          deactivateEdit={deactivateEdit}
        ></EditForm>
      )}

      <div className="content container">
        {loading && <h3>Loading...</h3>}
        {!loading &&
          !favOnly &&
          terms.map((item) => (
            <Term
              term={item}
              key={item._id}
              activateEdit={activateEdit}
              triggerUpdate={triggerUpdate}
            />
          ))}
        {!loading &&
          favOnly &&
          terms
            .filter((item) => item.favourite === true)
            .map((item) => (
              <Term
                term={item}
                key={item._id}
                activateEdit={activateEdit}
                triggerUpdate={triggerUpdate}
              />
            ))}
      </div>
    </>
  );
}

export default App;
