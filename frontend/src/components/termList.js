import React, { useState, useEffect } from "react";
import Term from "./term";

const staticTerms = [
  {
    term: "abyssal plain",
    definition:
      "The ocean floor offshore from the continental margin, usually very flat with aslight slope.",
  },
  {
    term: "accrete",
    definition:
      "v. To add terranes (small land masses or pieces of crust) to another, usually larger, land mass.",
  },
];

const TermList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch("/terms");
      console.log(data.body);
      // setData(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [status]);

  const terms = data.map((term, index) => <Term data={term} key={index} />);

  return <div className="content container">{terms}</div>;
};

export default TermList;
