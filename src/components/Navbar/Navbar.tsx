import "./Navbar.css";
import DownloadCVButton from "../DownloadCVButton/DownloadCVButton";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-content">
        <a
            href="#start"
            className="navbar__logo"
            onClick={() => setMenuOpen(false)}
        >
            Fernando Blanco
        </a>

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
                          href="#start"
                          onClick={() => setMenuOpen(false)}
                      >
                          Inicio
                      </a>
                  </li>

                  <li>
                      <a
                          href="#about"
                          onClick={() => setMenuOpen(false)}
                      >
                          Sobre mí
                      </a>
                  </li>

                  <li>
                      <a
                          href="#projects"
                          onClick={() => setMenuOpen(false)}
                      >
                          Proyectos
                      </a>
                  </li>

                  <li>
                      <a
                          href="#contact"
                          onClick={() => setMenuOpen(false)}
                      >
                          Contacto
                      </a>
                  </li>

                  <li>
                      <DownloadCVButton />
                  </li>

              </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;