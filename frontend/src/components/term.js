import React from "react";
import starGold from "../img/star-gold.png";
import starBlack from "../img/star-blk.png";

function Term({ term, activateEdit, triggerUpdate }) {
  const deleteTerm = async (term) => {
    console.log(term._id);
    const res = await fetch("/terms", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(term),
    });
    triggerUpdate();
    return res.json();
  };

  const updateFavourite = async (term) => {
    const updatedTerm = term;
    updatedTerm.favourite = !updatedTerm.favourite;

    const res = await fetch("/terms", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTerm),
    });
    triggerUpdate();
    return res.json();
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4>{term.term}</h4>
        {term.favourite ? (
          <img
            className="fav"
            src={starGold}
            onClick={() => updateFavourite(term)}
            alt="favourited"
          />
        ) : (
          <img
            className="fav"
            src={starBlack}
            onClick={() => updateFavourite(term)}
            alt="notfavourited"
          />
        )}
      </div>
      <p>{term.definition}</p>
      <button onClick={() => deleteTerm(term)}>Delete</button>
      <button onClick={() => activateEdit(term)}>Edit</button>
      <hr />
    </div>
  );
}

export default Term;
