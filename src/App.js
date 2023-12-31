import "./App.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  function changePage(page) {
    setPage(page);
  }
  return (
    <div className="App">
      <h1>oi navagoí</h1>
      <NavBar onChangePage={changePage} page={page} />
      <Contenu page={page} />
      <Footer />
    </div>
  );
}

function NavBar({ onChangePage, page }) {
  return (
    <nav>
      <button
        onClick={() => onChangePage(1)}
        className={page === 1 ? "active" : ""}
      >
        truc 1
      </button>
      <button
        onClick={() => onChangePage(2)}
        className={page === 2 ? "active" : ""}
      >
        Lorem ipsum dolor sit.
      </button>
      <button
        onClick={() => onChangePage(3)}
        className={page === 3 ? "active" : ""}
      >
        Lorem, ipsum dolor.
      </button>
      <button
        onClick={() => onChangePage(4)}
        className={page === 4 ? "active" : ""}
      >
        Lorem ipsum dolor sit.
      </button>
    </nav>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h2>Made with ❤ by Théo, Amélie, Lucas & Eliott</h2>
    </div>
  );
}

function Contenu({ page }) {
  return (
    <div className="content">
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 />}
      {page === 3 && <Page3 />}
      {page === 4 && <Page4 />}
    </div>
  );
}

function Page1() {
  return (
    <div>
      <h1>cc</h1>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>cc2</h1>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h1>cc3</h1>
    </div>
  );
}

function Page4() {
  return (
    <div>
      <h1>cc3</h1>
    </div>
  );
}

export default App;
