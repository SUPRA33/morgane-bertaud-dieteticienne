import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [displayLinks, setDisplayLinks] = useState(false);

  // const xmarkIcon = document.getElementById("xmark-icon");
  // const burgerIcon = document.getElementById("burger-icon");

  // const [displayXmarkIcon, setDisplayXmarkIcon] = useState(false);
  // const [displayBurgerIcon, setDisplayBurgerIcon] = useState(true);

  const [displayBurgerIcon, setDisplayBurgerIcon] = useState(true);
  const [displayXMarkIcon, setDisplayXMarkIcon] = useState(false);

  const handleDisplayLinks = () => {
    setDisplayLinks(!displayLinks);
    setDisplayBurgerIcon(!displayBurgerIcon);
    setDisplayXMarkIcon(!displayXMarkIcon);

    // disable scroll when menu is open
    if (!displayLinks) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // enable scroll on click on item
  const enableScroll = () => {
    document.body.style.overflow = "";
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
            <Link
              to="/projets/morgane-bertaud-dieteticienne"
              onClick={enableScroll}
            >
              Accueil
            </Link>
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
                <Link
                  to="/projets/morgane-bertaud-dieteticienne/presentation/qui-suis-je"
                  onClick={enableScroll}
                >
                  Qui suis-je ?
                </Link>
              </li>
              <li>
                <Link
                  to="/projets/morgane-bertaud-dieteticienne/presentation/pour-qui"
                  onClick={enableScroll}
                >
                  Pour qui ?
                </Link>
              </li>
              <li>
                <Link
                  to="/projets/morgane-bertaud-dieteticienne/presentation/que-dit-la-loi"
                  onClick={enableScroll}
                >
                  Que dit la loi ?
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              to="/projets/morgane-bertaud-dieteticienne/temoignages"
              onClick={enableScroll}
            >
              Témoignages
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projets/morgane-bertaud-dieteticienne/contact"
              onClick={enableScroll}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projets/morgane-bertaud-dieteticienne/tarifs"
              onClick={enableScroll}
            >
              Tarifs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projets/morgane-bertaud-dieteticienne/rdv-en-ligne"
              onClick={enableScroll}
            >
              RDV en ligne
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projets/morgane-bertaud-dieteticienne/e-books"
              onClick={enableScroll}
            >
              E-books
            </Link>
          </li>
        </ul>
        <button className="burger" onClick={handleDisplayLinks}>
          <div className="burger-icon-wrapper">
            {displayBurgerIcon && <i className="fa-solid fa-bars fa-2x"></i>}
            {displayXMarkIcon && (
              <i id="xmark-icon" className="fa-solid fa-xmark fa-lg"></i>
            )}
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
