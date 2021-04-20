import React, { useContext, useState } from "react";
import Term from "./term";
// import { TermContext } from "../Context";

const TermList = () => {
  // let [data, status] = useContext(TermContext);

  let terms = [];
  // if (data) {
  //   terms = data.map((term) => <Term term={term} key={term._id} />);
  // }

  return (
    <div className="content container">
      {/* {status ? terms : <h3>Loading...</h3>} */}
    </div>
  );
};

export default TermList;
