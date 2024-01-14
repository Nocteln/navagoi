import "./App.css";
import { useState } from "react";
const NauffIle = require("./nauffIle.png");
const Bucheron = require("./bucheron.Png");
const Fermier = require("./fermier.png");
const arbrePlantation = require("./arbrePlantation.png");
const calandrier = require("./calandrier.png");
const map = require("./map_2.jpg");
const echanges = require("./echanges.jpeg");
const vote = require("./vote.jpeg");

function App() {
  const [page, setPage] = useState(1);

  function changePage(page) {
    setPage(page);
  }
  return (
    <div className="App">
      <h1 className="titre">oi navagoí</h1>
      <NavBar onChangePage={changePage} page={page} />
      <Contenu page={page} />
      <Footer onChangePage={changePage} page={page} />
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
        Structure Sociale et Gouvernance
      </button>
      <button
        onClick={() => onChangePage(2)}
        className={page === 2 ? "active" : ""}
      >
        Système de Vie Communautaire
      </button>
      <button
        onClick={() => onChangePage(3)}
        className={page === 3 ? "active" : ""}
      >
        Système Juridique et Règles de Vie
      </button>
      <button
        onClick={() => onChangePage(4)}
        className={page === 4 ? "active" : ""}
      >
        Vie Quotidienne et Divertissement
      </button>
    </nav>
  );
}

function Footer({ onChangePage, page }) {
  return (
    <div className="footer">
      <button
        onClick={() => onChangePage(5)}
        className={page === 5 ? "active" : ""}
      >
        Plan de l'ile
      </button>
      <h2>Par Théo, Amélie, Lucas & Eliott</h2>
    </div>
  );
}

function Page5() {
  return (
    <div className="page">
      <h1>🗺️Plan de l'ile🗺️</h1>
      <br />
      <img src={map} alt="plan de l'ile" style={{ height: "60vh" }} />
    </div>
  );
}

function Contenu({ page }) {
  return (
    <div className="content">
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 />}
      {page === 4 && <Page4 />}
      {page === 3 && <Page3 />}
      {page === 5 && <Page5 />}
    </div>
  );
}

function Page1() {
  return (
    <div className="page">
      <h1>🗡️Structure Sociale et Gouvernance🗡️</h1>
      <br />
      {/* <div className="categorySepare"> */}
      <div>
        <h2>
          Nom de la ville : <strong>Oi Navagoí</strong> (qui signifie "les
          nauffragés" en grec)
        </h2>
        <br />
        <h3>
          Sur l'île, la hiérarchie repose sur la collaboration et l'expertise
          individuelle. Les habitants élisent des représentants pour la ville,
          chacun spécialisé dans un domaine spécifique tel que l'agriculture, la
          construction, la médecine, l'éducation, etc. Ces représentants sont
          choisis en fonction de leurs compétences avérées et de leur engagement
          envers le bien-être communautaire.
        </h3>
      </div>
      <br />
      <h3>
        Hiérarchie: Représentants de la ville, experts dans chaque domaine,
        apprentissage des compétences.
      </h3>
      <img src={NauffIle} alt="" width="25%" />
      {/* </div> */}
    </div>
  );
}

function Page2() {
  return (
    <div className="page">
      <h1>👫Système de Vie Communautaire👫</h1>
      <br />
      <br />
      <div className="commu">
        <div>
          <h3>
            Système de Rémunération: Troc, échange avec évaluation individuelle
            de la valeur des biens.
          </h3>
          <img src={echanges} alt="" />
        </div>
        {/* <br /> */}
        <div>
          <h3>
            Système de Vote: Démocratie participative avec des votes publics et
            l'objectif d'une décision unanime.
          </h3>
          <img src={vote} alt="" />
        </div>
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div className="page rules">
      <h1>⚖️ Système Juridique et Règles de Vie ⚖️</h1>
      <br />
      <br />
      <br />
      <div className="categorySepare">
        <div className="lettreEspace">
          <h3>📜 Les 10 commandements du nauffragé 📜</h3>
          <br />
          <h4>1. Respecte la vie de chaque habitant</h4>
          <h4>2. Protège l'écosystème qui nous nourrit</h4>
          <h4>3. Ne vole pas les biens des autres</h4>
          <h4>
            4. Dis toujours la vérité et sois honnête envers tes semblables
          </h4>
          <h4>5. Respecte la propriété et la vie privée de chacun </h4>
          <h4>6. Ne convoite pas excessivement les biens d'autrui</h4>
          <h4>7. Soutiens la communauté dans les moments de besoin</h4>
          <h4>
            8. Sois bienveillant envers les compétents qui partagent leur savoir
          </h4>
          <h4>9. Participe activement aux décisions démocratiques de l'île</h4>
          <h4>
            10. Cultive l'amour, la paix, et la solidarité parmi tous les
            habitants
          </h4>
        </div>
        <br />
        <div>
          <h3>
            Système Judiciaire: Travaux forcés pour les contrevenants,
            contribuant au développement de la communauté.
          </h3>
          {/* <img src={TenCommands} alt="" /> */}
          <span className="emojiBalance">⚖️</span>
        </div>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div className="page ">
      <h1>Vie Quotidienne et Divertissement</h1>
      <br />
      <div className="categorySquare">
        <div>
          <h3 className="one">
            Système de Direction de la Population: Les compétents dirigent,
            partage des connaissances en échange de rémunération future.
          </h3>
          <br />
          <img src={Bucheron} alt="" className="imgVie" />
        </div>
        <div>
          <h3 className="two">
            Répartition des Tâches: Liberté individuelle dans la vie
            quotidienne, possibilité de créer des groupes/familles.
          </h3>
          <br />
          <img src={Fermier} alt="" className="imgVie" />
        </div>
        <div>
          <h3 className="three">
            Gestion de l'Écosystème: Respect de la nature, replantation,
            élevages, champs, etc.
          </h3>
          <br />
          <img src={arbrePlantation} alt="" className="imgVie" />
        </div>
        <div>
          <h3 className="four">
            Calendrier: Organisation du temps en fonction des saisons et des
            années.
          </h3>
          <br />
          <img src={calandrier} alt="" className="imgVie" />
        </div>
        {/* <h3>
          Infrastructure de Divertissement: Terrains de jeu, loto équitable,
          concours sportifs, événements festifs.
        </h3> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
