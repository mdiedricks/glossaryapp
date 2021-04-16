import "./App.css";
import TermList from "./components/termList";
import AddTerm from "./components/addTerm";

function App() {
  return (
    <>
      <header className="nav">
        <h2>Glossary App</h2>
      </header>
      <AddTerm></AddTerm>
      <div className="filter">Filter</div>
      <TermList></TermList>
    </>
  );
}

export default App;
