import React, { useState, createContext, useEffect } from "react";

export const TermContext = createContext();

export const TermProvider = (props) => {
  useEffect(() => {
    fetchTerms();
  }, []);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const fetchTerms = () => {
    setStatus(false);

    fetch("/terms")
      .then((res) => res.json())
      .then((data) => setData(data.terms))
      .catch((err) => console.log(err));
    setStatus(true);
  };
  return (
    <TermContext.Provider value={[data, status]}>
      {props.children}
    </TermContext.Provider>
  );
};
