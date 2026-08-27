import "./Navbar.css";
import DownloadCVButton from "../DownloadCVButton/DownloadCVButton";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar__logo">
        Fernando Blanco
      </div>

      <button
        className="navbar__toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "navbar__nav navbar__nav--open" : "navbar__nav"}>
        <ul className="navbar__menu">

          <li>
            <a
                href="#about"
                onClick={() => setMenuOpen(false)}
            >
                Inicio
            </a>
          </li>
          
          <li>
            <a href="#projects">Sobre mi</a>
          </li>

          <li>
            <a href="#projects">Proyectos</a>
          </li>

          <li>
            <a href="#contact">Contacto</a>
          </li>

          <li>
            <DownloadCVButton />
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;