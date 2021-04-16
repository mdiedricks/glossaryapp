import React from "react";

function Term({ data, id }) {
  return (
    <div>
      <h4>{data.term}</h4>
      <p>{data.definition}</p>
      <hr></hr>
    </div>
  );
}

export default Term;
