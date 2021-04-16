import React, { useContext } from "react";
import Term from "./term";
import { TermContext } from "../Context";

const TermList = () => {
  let [data, status] = useContext(TermContext);
  // useEffect(() => {
  //   fetchTerms();
  // }, []);

  // const [data, setData] = useState([]);
  // const [status, setStatus] = useState(false);

  // const fetchTerms = () => {
  //   setStatus(false);

  //   fetch("/terms")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.terms))
  //     .catch((err) => console.log(err));
  //   setStatus(true);
  // };
  let terms;
  if (data) {
    terms = data.map((term, index) => <Term data={term} key={index} />);
  }

  return (
    <div className="content container">
      {status ? terms : <h3>Loading...</h3>}
    </div>
  );
};

export default TermList;
