import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [displayLinks, setDisplayLinks] = useState(false);

  const handleDisplayLinks = () => {
    setDisplayLinks(!displayLinks);
  };

  const [displayDropDownMenu, setDisplayDropDownMenu] = useState(false);

  const handleDropDownMenu = () => {
    const icon = document.getElementById("icon");
    setDisplayDropDownMenu(!displayDropDownMenu);
    icon.classList.toggle("rotate-icon");
  };

  return (
    <header className="d-flex align-items-center justify-content-center">
      <nav
        className={`navbar col-12 d-flex ${
          displayLinks ? "display-nav" : "hide_nav"
        }`}
      >
        <img className="logo" src={logo} alt="logo morgane bertaud" />
        <ul className="menu-nav d-flex">
          <li className="nav-item">
            <Link to="/projets/morgane-bertaud-dieteticienne">Accueil</Link>
          </li>
          <li className="nav-item">
            <span id="dropdown-item" onClick={handleDropDownMenu}>
              Présentation
              <i id="icon" className="fa-solid fa-chevron-down fa-xs"></i>
            </span>
            <ul
              className={`dropdown-menu ${
                displayDropDownMenu ? "visible" : ""
              }`}
            >
              <li>
                <Link to="/projets/morgane-bertaud-dieteticienne/presentation/qui-suis-je">
                  Qui suis-je ?
                </Link>
              </li>
              <li>
                <Link to="/projets/morgane-bertaud-dieteticienne/presentation/pour-qui">
                  Pour qui ?
                </Link>
              </li>
              <li>
                <Link to="/projets/morgane-bertaud-dieteticienne/presentation/que-dit-la-loi">
                  Que dit la loi ?
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/projets/morgane-bertaud-dieteticienne/temoignages">
              Témoignages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projets/morgane-bertaud-dieteticienne/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projets/morgane-bertaud-dieteticienne/tarifs">
              Tarifs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projets/morgane-bertaud-dieteticienne/rdv-en-ligne">
              RDV en ligne
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projets/morgane-bertaud-dieteticienne/e-books">
              E-books
            </Link>
          </li>
        </ul>
        <button className="burger" onClick={handleDisplayLinks}>
          <i className="fa-solid fa-bars fa-2x"></i>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
